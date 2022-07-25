import axios from "axios";

const api = axios.create({
  baseURL: "https://app.rdstation.com.br/",
});

export default api;
