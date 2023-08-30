import axios from "axios";

const api = axios.create({
    baseURL: "https://64edfcbb1f872182714224af.mockapi.io/api/v1/", 
  });
export default api;