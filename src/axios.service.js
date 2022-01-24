import axios from "axios"
import baseUrl from "./urls";

export const axiosService = axios.create({
    baseURL:baseUrl
});
