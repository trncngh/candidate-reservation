import axios from "axios";

export default axios.create({
  // baseURL: "http://localhost:3084/api",
  baseURL: "https://localhost:3084/api",
  headers: {
    "Content-type": "application/json",
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "GET, POST, OPTIONS, PUT, PATCH, DELETE",
    "Access-Control-Allow-Headers":
      "x-access-token, Origin, X-Requested-With, Content-Type, Accept",
  },
});
