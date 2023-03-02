import axios from "axios";

export default axios.create({
  // baseURL: "http://localhost:3084/api",
  baseURL:
    "http://ec2-54-179-126-97.ap-southeast-1.compute.amazonaws.com:3084/api",
  headers: {
    "Content-type": "application/json",
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "GET, POST, OPTIONS, PUT, PATCH, DELETE",
    "Access-Control-Allow-Headers":
      "x-access-token, Origin, X-Requested-With, Content-Type, Accept",
  },
});
