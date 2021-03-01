import axios from "axios";

const API_URL = "https://6035a2cb6496b9001749f256.mockapi.io/api/";

const api = axios.create({
    baseURL: API_URL,
});

export default api;
