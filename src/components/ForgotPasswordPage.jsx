import { useEffect, useState } from "react";
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
  const navigate = useNavigate();
  const { showLoader, hideLoader } = useLoader();
  const [email, setEmail] = useState(localStorage.getItem("resetEmail"));
  const [token, setToken] = useState(localStorage.getItem("resetToken"));

  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const passwordRegex =
    /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?])(?=.{6,}).+$/;
  const validate = () => {
    if (!password) {
      ToastMessage("error", "Please provide new password");
      return;
    }

    if (!passwordRegex.test(password)) {
      ToastMessage("error", "Please match password requirements");
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
      resetToken: token,
      password: password,
    };
    showLoader();
    api
      .post("/api/v1/auth/reset-password", payload)
      .then((res) => {
        if (res?.data?.success) {
          ToastMessage("success", res?.data?.message || "Successful");
          localStorage.clear();
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

  const validatePageRequest = () => {
    let valid = false;
    const email = localStorage.getItem("resetEmail");
    const token = localStorage.getItem("resetToken");

    if (email && token) {
      valid = true;
    }

    return valid;
  };

  useEffect(() => {
    setTimeout(() => {
      const isValid = validatePageRequest();
      if (!isValid) {
        window.location.href = "/";
      }
    }, 1500);
  }, []);

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
            <a href="/">
              <span>
                <img
                  src={Logo}
                  alt="LOGO"
                  style={{ width: "60px", height: "60px" }}
                />
              </span>
            </a>
            <span style={{ paddingLeft: "12px" }}>Change Your Password</span>
          </div>
        </Typography>
        <Box
          component="form"
          sx={{ display: "flex", flexDirection: "column", gap: 2 }}
        >
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
            <Box
              sx={{
                margin: "8px 0",
                padding: "4px 8px",
                backgroundColor: "#f4f4f4",
                borderRadius: "6px",
              }}
            >
              <p
                className="text-sm is-required"
                style={{ marginBottom: "6px" }}
              >
                Please set a strong password. The password must meet at least
                following criterions
              </p>
              <p className="text-sm">
                1 Uppercase <br />
                1 Lowercase <br />
                1 Number <br />
                1 Special Character <br />
                Minimum Six Characters <br />
              </p>
            </Box>
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
