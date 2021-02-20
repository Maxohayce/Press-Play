// axiosconfig.js
import axios from "axios";

// configure base url
const listenAPI = axios.create({
  baseURL: "https://listen-api.listennotes.com/api/v2",
  timeout: 30000,
});

// intercept requests and add authorization token
listenAPI.interceptors.request.use((config) => {
  config.headers["X-ListenAPI-Key"] = `b532b0fed3ea49e8a5cb767a1cfc0ada`;
  return config;
});

export default listenAPI;
