import api from "./axios";

export const getCurrentWeather = async (
    city
) => {
    const response = await api.get(
        `/weather/current?city=${city}`
    );

    return response.data;
};

export const getWeatherPrediction =
    async (lat, lon) => {
        const response = await api.get(
            `/weather/predict?lat=${lat}&lon=${lon}`
        );

        return response.data;
    };

export const getWeatherHistory =
    async () => {
        const response = await api.get(
            "/weather/history"
        );

        return response.data;
    };