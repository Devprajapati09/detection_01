import api from "./axios";

export const getGovernmentNews =
    async () => {
        const response = await api.get(
            "/news/government"
        );

        return response.data;
    };

export const getSchemes =
    async () => {
        const response = await api.get(
            "/news/schemes"
        );

        return response.data;
    };

export const getLatestUpdates =
    async () => {
        const response = await api.get(
            "/news/latest"
        );

        return response.data;
    };