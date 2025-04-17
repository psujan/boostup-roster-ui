import { Modal, Box, Typography, Button } from "@mui/material";
import React, { useState } from "react";
import { useParams } from "react-router-dom";
import api from "../../../../../services/api";
import { ToastMessage } from "../../../../../components/common/ToastNotification";

const UpdateImage = ({ open, handleClose }) => {
  const { id } = useParams();
  const handleImageChange = (event) => {
    const file = event.target.files[0];
    console.log("dddd", file);
    if (file) {
      const formData = new FormData();
      formData.append("imageFile", file);
      formData.append("employeeId", id);

      api
        .post("/api/v1/employee/update-image", formData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        })
        .then((res) => {
          console.log("res herasm,", res);
          ToastMessage("success", res.data.message);
          console.log("eeeesds", res.data);
        })
        .catch((err) => {
          ToastMessage("error", err?.message);
        });
    }
    handleClose();
  };

  return (
    <Modal open={open} onClose={handleClose}>
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          bgcolor: "background.paper",
          boxShadow: 24,
          p: 4,
          borderRadius: 3,
          width: 360,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 2,
        }}
      >
        <Typography variant="h6" gutterBottom sx={{ fontWeight: "bold" }}>
          Upload Profile Image
        </Typography>

        <Button
          variant="contained"
          component="label"
          sx={{
            textTransform: "none",
            color: "#fff",
            borderRadius: 2,
          }}
        >
          Choose Image
          <input
            type="file"
            accept="image/*"
            hidden
            onChange={handleImageChange}
          />
        </Button>

        <Typography variant="caption" color="text.secondary">
          JPG, PNG, or JPEG under 5MB
        </Typography>
      </Box>
    </Modal>
  );
};

export default UpdateImage;
