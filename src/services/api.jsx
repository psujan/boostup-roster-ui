//import React from "react";

import axios from "axios";
const api = axios.create({
  baseURL: import.meta.env.VITE_APP_API_URL,
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${'AUTH_TOKEN'}`, // Optional: Add token if needed
  },
  timeout: 10000,
});

export default api;
