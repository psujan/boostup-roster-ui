import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import { useState } from "react";
import { TextField } from "@mui/material";
import { ToastMessage } from "./common/ToastNotification";
import api from "../services/api";
import { useLoader } from "../utils/context/LoaderContext";
import { useNavigate } from "react-router-dom";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  borderRadius: "8px",
  boxShadow: 24,
  p: 4,
};

export default function ForgotPasswordModal({ open, handleOpen }) {
  const navigate = useNavigate();
  const { showLoader, hideLoader } = useLoader();
  const handleClose = () => handleOpen(false);
  const [email, setEmail] = useState("");

  const handleSubmit = () => {
    if (!email) {
      ToastMessage("error", "Please provide your email");
      return;
    }
    showLoader();
    api
      .post("/api/v1/auth/reset-password-token", { email: email })
      .then((res) => {
        const token = res?.data?.data?.resetToken;
        const email = res?.data?.data?.resetEmail;
        if (token && email) {
          localStorage.setItem("resetEmail", email);
          localStorage.setItem("resetToken", token);
        }
        if (res?.data?.success) {
          ToastMessage("success", res?.data?.message || "Successful");
          handleOpen(false);
          navigate("/change-password");
        }
      })
      .catch((err) => {
        console.error(err);
        const message = err?.response?.data?.message || "Something Went Wrong";
        ToastMessage("error", message);
      })
      .finally(() => {
        hideLoader();
      });
  };
  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <h5 className="heading-5" style={{ marginBottom: "10px" }}>
            Forgot Password ?
          </h5>
          <p className="text-muted text-sm">
            Please provide your email to continue
          </p>
          <Box sx={{ mt: 2 }}>
            <form action="">
              <TextField
                type="email"
                id="recover-email"
                variant="outlined"
                placeholder="john@hotmail.com"
                className="base-input"
                onChange={(e) => setEmail(e.target.value)}
              />
              <Button
                variant="outlined"
                sx={{ mt: 2, width: "100%" }}
                onClick={() => handleSubmit()}
              >
                Continue
              </Button>
            </form>
          </Box>
        </Box>
      </Modal>
    </div>
  );
}
