import api from "./axios";

export const detectCropDisease = async (formData) => {
    const response = await api.post(
        "/crop/detect",
        formData,
        {
            headers: {
                "Content-Type": "multipart/form-data",
            },
        }
    );

    return response.data;
};

export const getCropHistory = async () => {
    const response = await api.get("/crop/history");
    return response.data;
};

export const getCropById = async (id) => {
    const response = await api.get(`/crop/${id}`);
    return response.data;
};