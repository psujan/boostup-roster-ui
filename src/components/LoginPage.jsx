import { useState } from "react";
import "../assets/css/styles.css";
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
import Logo from "../assets/images/boostup-logo.png";

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
        console.log("error aako ho ra");
        ToastMesssage("error", error?.response?.data?.message);
        // console.error(error?.response?.data?.message || "Login failed");
      });
  };

  return (
    <Container
      component="main"
      maxWidth="sm"
      sx={{
        display: "flex",
        height: "100vh",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Paper
        elevation={2}
        sx={{
          padding: 4,
          width: "100%",
          borderRadius: "8px",
          boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px",
        }}
      >
        <Typography
          variant="h5"
          sx={{
            marginBottom: 5,
            fontWeight: "bold",
            color: "var(--primaryColor)",
          }}
        >
          <div style={{ display: "flex" }}>
            <span>
              <img
                src={Logo}
                alt="LOGO"
                style={{ width: "60px", height: "60px" }}
              />
            </span>
            <span style={{ paddingLeft: "12px" }}>
              Welcome To Boostup Cleaning Services
            </span>
          </div>
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
            size="small"
            sx={{
              "& .MuiInputBase-root": {
                height: 48, // Adjust height
                fontSize: "0.875rem", // Adjust font size
              },
            }}
            onChange={(e) => setEmail(e.target.value)}
          />
          <TextField
            label="Password"
            type="password"
            variant="outlined"
            fullWidth
            size="small"
            value={password}
            sx={{
              "& .MuiInputBase-root": {
                height: 48, // Adjust height
                fontSize: "0.875rem", // Adjust font size
              },
            }}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button
            variant="contained"
            fullWidth
            onClick={handleLogin}
            sx={{ backgroundColor: "#1E7E51", height: 48 }}
          >
            Login
          </Button>

          <div style={{ textAlign: "left" }}>
            <a href="" className="clr-text">
              Forgot Password ?
            </a>
          </div>
        </Box>
      </Paper>
    </Container>
  );
};

export default LoginPage;
