import axios from "axios";

export default axios.create({
  // baseURL: "http://localhost:3084/api",
  baseURL: "http://192.168.1.101:3084/api",
  headers: {
    "Content-type": "application/json",
  },
});
