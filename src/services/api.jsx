import React from "react";
import axios from "axios";
const api = axios.create({
  baseURL: "http://localhost:5208",
  headers: {
    "Content-Type": "application/json",
    // 'Authorization': `Bearer ${token}` // Optional: Add token if needed
  },
  timeout: 10000,
});

export default api;
