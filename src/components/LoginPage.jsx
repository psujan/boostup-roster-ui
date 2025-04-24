import { useState } from "react";
import "../assets/css/styles.css";
import {
  Container,
  TextField,
  Button,
  Typography,
  Box,
  Paper,
  InputLabel,
} from "@mui/material";
import api from "../services/api";
import { useNavigate } from "react-router-dom";
import { ToastMessage } from "./common/ToastNotification";
import Logo from "../assets/images/boostup-logo.png";
import { useLoader } from "../utils/context/LoaderContext";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";

const LoginPage = () => {
  const navigate = useNavigate();
  const { showLoader, hideLoader } = useLoader();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = () => {
    showLoader();
    api
      .post("/api/v1/auth", { email, password })
      .then((res) => {
        console.log(res);
        const token = res.data?.data?.token;
        const role = res.data?.data?.roles?.[0];
        const user = res?.data?.data?.user; // store whole user object
        const tokenExpiry = res?.data?.data?.tokenExpiresIn;
        const employee = res?.data?.data?.employee;
        if (token && role) {
          // Clear All Previously Stored Data
          localStorage.clear();
          localStorage.setItem("token", token);
          localStorage.setItem("role", role);
          localStorage.setItem("user", JSON.stringify(user));
          localStorage.setItem("tokenExpiry", tokenExpiry);
          localStorage.setItem("employee", JSON.stringify(employee));
          switch (role) {
            case "SuperAdmin":
              navigate("/admin-dashboard");
              ToastMessage("success", "Login Successful");
              break;
            case "Employee":
              navigate("/employee-dashboard");
              ToastMessage("success", "Login Successful");
              break;
            default:
              navigate("/login");
          }
        } else {
          console.error("Invalid response structure");
          ToastMessage("error", "Invalid Login");
        }
      })
      .catch((error) => {
        console.error(error);
        ToastMessage(
          "error",
          error?.response?.data?.message || "Something Went Wrong"
        );
        // console.error(error?.response?.data?.message || "Login failed");
      })
      .finally(() => {
        hideLoader();
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
          <div>
            <InputLabel className="base-input-label" htmlFor="login-email">
              Email<span className="is-required">*</span>
            </InputLabel>
            <TextField
              type="email"
              id="login-email"
              variant="outlined"
              className="base-input"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div id="login-password-wrap">
            <InputLabel className="base-input-label" htmlFor="login-pwd">
              Password<span className="is-required">*</span>
            </InputLabel>
            <TextField
              type={showPassword ? "text" : "password"}
              id="login-pwd"
              variant="outlined"
              className="base-input"
              onChange={(e) => setPassword(e.target.value)}
            />
            {showPassword ? (
              <VisibilityIcon
                className="eye-position"
                onClick={() => setShowPassword(false)}
              />
            ) : (
              <VisibilityOff
                className="eye-position"
                onClick={() => setShowPassword(true)}
              />
            )}
          </div>
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
