import api from "./axios";

export const detectVegetable = async (formData) => {
    const response = await api.post(
        "/vegetable/detect",
        formData,
        {
            headers: {
                "Content-Type": "multipart/form-data",
            },
        }
    );

    return response.data;
};

export const getVegetableHistory = async () => {
    const response = await api.get(
        "/vegetable/history"
    );

    return response.data;
};