import { Modal, Box, Typography, Button } from "@mui/material";
import React, { useState } from "react";
import { useParams } from "react-router-dom";
import api from "../../../../../services/api";
import { ToastMessage } from "../../../../../components/common/ToastNotification";
import { useLoader } from "../../../../../utils/context/LoaderContext";

const UpdateImage = ({ open, handleClose, onImageUpload = () => {} }) => {
  const { showLoader, hideLoader } = useLoader();
  const { id } = useParams();
  const [file, setFile] = useState(null);
  const handleImageChange = (event) => {
    const file = event.target.files[0];
    console.log("dddd", file);
    if (file) {
      setFile(event.target.files[0]);
      console.log(event.target.files[0]);
    }
  };

  const uploadImage = () => {
    handleClose();
    showLoader();
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
        ToastMessage("success", res.data.message);
        onImageUpload();
      })
      .catch((err) => {
        ToastMessage("error", err?.message);
      })
      .finally(() => {
        hideLoader();
        setFile(null);
      });
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
          variant="outlined"
          component="label"
          sx={{
            textTransform: "none",
            color: "#000",
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
          {file
            ? file.name + " | " + (file.size / (1024 * 1024)).toFixed(2) + "Mb"
            : "JPG, PNG, or JPEG under 5MB"}
        </Typography>

        {file ? (
          <Box>
            <Button
              variant="contained"
              color="primary"
              onClick={() => uploadImage()}
            >
              Upload Image
            </Button>
          </Box>
        ) : undefined}
      </Box>
    </Modal>
  );
};

export default UpdateImage;
