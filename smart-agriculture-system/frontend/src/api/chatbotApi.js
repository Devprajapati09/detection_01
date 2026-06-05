import api from "./axios";

export const sendMessage = async (
    message
) => {
    const response = await api.post(
        "/chatbot/chat",
        {
            message,
        }
    );

    return response.data;
};

export const sendVoiceMessage =
    async (formData) => {
        const response = await api.post(
            "/chatbot/voice",
            formData,
            {
                headers: {
                    "Content-Type":
                        "multipart/form-data",
                },
            }
        );

        return response.data;
    };

export const getChatHistory =
    async () => {
        const response = await api.get(
            "/chatbot/history"
        );

        return response.data;
    };