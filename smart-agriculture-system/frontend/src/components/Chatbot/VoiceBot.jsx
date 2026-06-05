import { useState } from "react";
import { sendVoiceMessage } from "../../api/chatbotApi";

function VoiceBot() {
    const [audioFile, setAudioFile] =
        useState(null);

    const [response, setResponse] =
        useState("");

    const handleUpload = async () => {
        if (!audioFile) return;

        const formData = new FormData();

        formData.append(
            "audio",
            audioFile
        );

        try {
            const data =
                await sendVoiceMessage(
                    formData
                );

            setResponse(
                data.reply ||
                "Voice response received"
            );
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div>
            <h3>Voice Assistant</h3>

            <input
                type="file"
                accept="audio/*"
                onChange={(e) =>
                    setAudioFile(
                        e.target.files[0]
                    )
                }
            />

            <button onClick={handleUpload}>
                Upload Voice
            </button>

            {response && (
                <p>{response}</p>
            )}
        </div>
    );
}

export default VoiceBot;