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

const ForgotPasswordPage = () => {
  console.log("showing this page");
  const navigate = useNavigate();
  const { showLoader, hideLoader } = useLoader();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const validate = () => {
    if (!password) {
      ToastMessage("error", "Please provide new password");
      return;
    }

    if (password != confirmPassword) {
      ToastMessage("error", "Please match your new password");
      return;
    }

    return true;
  };
  const handleSubmit = () => {
    if (!validate()) {
      return;
    }
    const payload = {
      email: email,
      resetToken: localStorage.getItem("resetToken"),
      password: password,
    };
    showLoader();
    api
      .post("/api/v1/auth/reset-password", payload)
      .then((res) => {
        if (res?.data?.success) {
          ToastMessage("success", res?.data?.message || "Successful");
          localStorage.clear()
          navigate("/login");
        } else {
          ToastMessage("error", res?.data?.message || "Something Went Wrong");
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
          <div style={{ display: "flex", alignItems: "center" }}>
            <span>
              <img
                src={Logo}
                alt="LOGO"
                style={{ width: "60px", height: "60px" }}
              />
            </span>
            <span style={{ paddingLeft: "12px" }}>Change Your Password</span>
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
          <div>
            <InputLabel className="base-input-label" htmlFor="new-pwd">
              New Password<span className="is-required">*</span>
            </InputLabel>
            <TextField
              type="password"
              id="new-pwd"
              variant="outlined"
              className="base-input"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div>
            <InputLabel className="base-input-label" htmlFor="new-pwd-confirm">
              Confirm Password<span className="is-required">*</span>
            </InputLabel>
            <TextField
              type="password"
              id="new-pwd-confirm"
              variant="outlined"
              className="base-input"
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </div>
          <Button
            variant="contained"
            fullWidth
            onClick={handleSubmit}
            sx={{ backgroundColor: "#1E7E51", height: 48 }}
          >
            Submit
          </Button>
        </Box>
      </Paper>
    </Container>
  );
};

export default ForgotPasswordPage;
