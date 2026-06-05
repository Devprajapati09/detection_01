import { useState } from "react";
import { sendMessage } from "../../api/chatbotApi";
import "./Chatbot.css";

function Chatbot() {
    const [message, setMessage] = useState("");
    const [chat, setChat] = useState([]);
    const [loading, setLoading] = useState(false);

    const handleSend = async () => {
        if (!message.trim()) return;

        const userMessage = {
            sender: "user",
            text: message,
        };

        setChat((prev) => [...prev, userMessage]);

        try {
            setLoading(true);

            const response = await sendMessage(message);

            const botMessage = {
                sender: "bot",
                text:
                    response.reply ||
                    response.message ||
                    "No response available",
            };

            setChat((prev) => [...prev, botMessage]);
            setMessage("");
        } catch (error) {
            console.error(error);

            setChat((prev) => [
                ...prev,
                {
                    sender: "bot",
                    text: "Something went wrong.",
                },
            ]);
        } finally {
            setLoading(false);
        }
    };

    const handleKeyPress = (e) => {
        if (e.key === "Enter") {
            handleSend();
        }
    };

    return (
        <div className="chatbot-container">
            <div className="chatbot-header">
                <h2>Farmer Assistant Chatbot</h2>
            </div>

            <div className="chatbot-messages">
                {chat.map((msg, index) => (
                    <div
                        key={index}
                        className={`message ${msg.sender}`}
                    >
                        {msg.text}
                    </div>
                ))}

                {loading && (
                    <div className="message bot">
                        Typing...
                    </div>
                )}
            </div>

            <div className="chatbot-input">
                <input
                    type="text"
                    placeholder="Ask farming related questions..."
                    value={message}
                    onChange={(e) =>
                        setMessage(e.target.value)
                    }
                    onKeyDown={handleKeyPress}
                />

                <button onClick={handleSend}>
                    Send
                </button>
            </div>
        </div>
    );
}

export default Chatbot;