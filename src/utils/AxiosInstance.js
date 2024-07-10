import axios from "axios";
const baseURL = "http://localhost:8800";

export const AxiosConfig = axios.create({
  baseURL,
});

AxiosConfig.interceptors.request.use((config) => {
  const token = JSON.parse(localStorage.getItem("token"));

  config.headers.Authorization = token;
  return config;
});
