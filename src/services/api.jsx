//import React from "react";

import axios from "axios";
const api = axios.create({
  baseURL: import.meta.env.VITE_APP_API_URL,
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${"AUTH_TOKEN"}`,
  },
  timeout: 10000,
});

// sending dynamic token
api.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default api;
