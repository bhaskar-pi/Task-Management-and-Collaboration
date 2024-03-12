import { BASE_URL } from "../constants";
import axios from 'axios'

axios.defaults.withCredentials = true;

const axiosInstance = axios.create({
    baseURL: BASE_URL
})

export const registerApi = (data) => {
    return axiosInstance.post(`/register`, data)
}

export const loginApi = (data) => {
    return axiosInstance.post('/login', data)
}

export const getDashboard = () => {
    return axiosInstance.get('/dashboard')
}

export const logoutApi = () => {
    return axiosInstance.post()
}