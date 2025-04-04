//import React from "react";

import axios from "axios";
const api = axios.create({
  baseURL: import.meta.env.VITE_APP_API_URL,
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9lbWFpbGFkZHJlc3MiOiJib29zdHVwYWRtaW5AZ21haWwuY29tIiwiaHR0cDovL3NjaGVtYXMubWljcm9zb2Z0LmNvbS93cy8yMDA4LzA2L2lkZW50aXR5L2NsYWltcy9yb2xlIjoiU3VwZXJBZG1pbiIsImV4cCI6MTc0Mzc5MDA2NSwiaXNzIjoiaHR0cDovL2xvY2FsaG9zdDo3MTgxIiwiYXVkIjoiaHR0cDovL2xvY2FsaG9zdDo3MTgxIn0.yKZVHzeqSWvZE-hkfb4y2xUoteSOsP4dqjx1eFlvd_o`, // Optional: Add token if needed
  },
  timeout: 10000,
});

export default api;
