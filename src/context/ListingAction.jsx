import axios from "axios";
const URL = "http://127.0.0.1:8000/api";

const http = axios.create({
  baseURL: URL,
  // headers: { "Content-type": "application/json; charset=UTF-8" },
});

http.interceptors.request.use(config => {
  const token = localStorage.getItem("token");
  config.headers.Authorization = `Bearer ${token}`;
  return config;
});

export default http;
