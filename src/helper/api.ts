import axios from "axios";

export const api = axios.create({
  baseURL: "https://x527qdw0-4000.inc1.devtunnels.ms",
});

api.interceptors.request.use((config) => {
  const token = localStorage.getItem("authToken");

  if (token && config.headers) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});
