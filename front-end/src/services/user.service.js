import axios from "axios";
import authHome from "./auth.home";

const HOME_URL = "http://localhost:8080/api/home/";

const getHomeBoard = () => {
    return axios.get(HOME_URL + "admin", { headers: authHome() });
};

const getMainPage = () => {
    return axios.get(HOME_URL + "materials" );
};

const findByDescription = (desc) => {
    return axios.get(HOME_URL + `/materials/description=${desc}`)
}

const updateMaterial = (id, data) => {
    return axios.get(HOME_URL + `/materials/${id}`, data);
}

export default { getHomeBoard, getMainPage, findByDescription, updateMaterial } ;