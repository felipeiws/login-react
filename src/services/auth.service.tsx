import axios from "axios";

const API_URL = "https://6035a2cb6496b9001749f256.mockapi.io/api/";

const login = (email, password) => {
    return axios.post(API_URL + "auth", {
            email,
            password,
        })
        .then((response) => {
            if (response.data.accessToken) {
                localStorage.setItem("user", JSON.stringify(response.data));
            }

            return response.data;
        });
};

const logout = () => {
    localStorage.removeItem("user");
};

export default {
    login,
    logout,
};
