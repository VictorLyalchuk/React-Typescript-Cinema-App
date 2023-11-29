import axios from "axios";
import { getTokenFromLocalStorage } from "../Services/LocalStorage.Helper";

export const instance = axios.create({
    // withCredentials:false,
    baseURL: 'https://cinema-webapi.azurewebsites.net/api/',
    headers: {
        Authorization: 'Bearer' + getTokenFromLocalStorage() || '',
    }
});