import axios from "axios";

export const apiClient = axios.create({
  baseURL: "https://news-api-xu59.onrender.com",
});

// axios instance option - timeout
