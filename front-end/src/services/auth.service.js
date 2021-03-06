import axios from "axios";

const AUTH_URL = "http://localhost:8080/api/auth/";


const login = (email, password) => {
    const response = axios
        .post(AUTH_URL + "signin", {
            email,
            password,
        });
    if (response.data.accessToken) {
        localStorage.setItem("user", JSON.stringify(response.data));
    }
    return response.data;
};


const logout = () => {
    localStorage.removeItem("user");
};


export default {
    login,
    logout,
};