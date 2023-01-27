import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "http://localhost:5000/api",
  headers: {
    "Access-Control-Allow-Origin": "*",
  },
  withCredentials: true,
});

export default axiosInstance;
