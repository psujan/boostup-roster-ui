import React, { useState } from "react";
import {
  Container,
  TextField,
  Button,
  Typography,
  Box,
  Paper,
} from "@mui/material";
import api from "../services/api";
import { useNavigate } from "react-router-dom";
import { ToastMesssage } from "../commonComponents/ToastNotification";

const LoginPage = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    api
      .post("/api/v1/auth", { email, password })
      .then((res) => {
        console.log(res);
        const token = res.data?.data?.token;
        const role = res.data?.data?.roles?.[0];

        if (token && role) {
          localStorage.setItem("token", token);
          localStorage.setItem("role", role);

          switch (role) {
            case "SuperAdmin":
              navigate("/admin-dashboard");
              ToastMesssage("success", "Login Successfull");
              break;
            case "Employee":
              navigate("/employee-dashboard");
              ToastMesssage("success", "Login Successfull");
              break;
            default:
              navigate("/login");
          }
        } else {
          console.error("Invalid response structure");
          ToastMesssage("error", "invalid Login");
        }
      })
      .catch((error) => {
        ToastMesssage("error", error?.response?.data?.message);
        console.error(error?.response?.data?.message || "Login failed");
      });
  };

  return (
    <Container
      component="main"
      maxWidth="xs"
      sx={{
        display: "flex",
        height: "100vh",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Paper
        elevation={3}
        sx={{ padding: 4, width: "100%", textAlign: "center" }}
      >
        <Typography
          variant="h5"
          sx={{
            marginBottom: 2,
            fontWeight: "bold",
            color: "var(--primaryColor)",
          }}
        >
          BoostUp Login
        </Typography>
        <Box
          component="form"
          sx={{ display: "flex", flexDirection: "column", gap: 2 }}
        >
          <TextField
            label="Email"
            variant="outlined"
            fullWidth
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <TextField
            label="Password"
            type="password"
            variant="outlined"
            fullWidth
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button
            variant="contained"
            fullWidth
            onClick={handleLogin}
            sx={{ backgroundColor: "#1E7E51" }}
          >
            Login
          </Button>
        </Box>
      </Paper>
    </Container>
  );
};

export default LoginPage;
