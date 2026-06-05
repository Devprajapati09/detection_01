import api from "./axios";

export const analyzeSoil = async (formData) => {
    const response = await api.post(
        "/soil/analyze",
        formData,
        {
            headers: {
                "Content-Type": "multipart/form-data",
            },
        }
    );

    return response.data;
};

export const getSoilHistory = async () => {
    const response = await api.get("/soil/history");
    return response.data;
};