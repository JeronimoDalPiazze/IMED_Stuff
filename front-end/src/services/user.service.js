import axios from "axios";
import authHome from "./auth.home";

const HOME_URL = "https://jsonplaceholder.typicode.com/todos/";

const getTestRoute = () => {
    return axios.get(HOME_URL + "1");
}

const getHomeBoard = () => {
    return axios.get(HOME_URL + "admin", { headers: authHome() });
};

const getMainPage = () => {
    return axios.get(HOME_URL + "materials");
};

const createMaterial = (data) => {
    return axios.post(HOME_URL + "materials", data);
};

const findByDescription = (desc) => {
    return axios.get(HOME_URL + `/materials/description=${desc}`);
}

const findById = (id) => {
    return axios.get(HOME_URL + `/materials/${id}`);
}

const updateMaterial = (id, data) => {
    return axios.put(HOME_URL + `/materials/${id}`, data);
}

const updateReservation = (id) => {
    return axios.put(HOME_URL + `/materials/${id}`);
}

const openReservation = (id) => {
    return axios.put(HOME_URL + `/materials/${id}`);
}

const removeMaterial = (id) => {
    return axios.delete(HOME_URL + `/materials/${id}`);
}

export default {
    getTestRoute,
    getHomeBoard,
    getMainPage,
    createMaterial,
    findByDescription,
    findById,
    updateMaterial,
    updateReservation,
    openReservation,
    removeMaterial
};