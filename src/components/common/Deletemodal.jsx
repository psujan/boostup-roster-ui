import React from "react";
import { Modal, Box, Button, Typography, Stack, Divider } from "@mui/material";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";

const DeleteModal = ({ open, setOpen, confirmDelete = () => {} }) => {
  const handleClose = () => setOpen(false);

  return (
    <Modal
      open={open}
      size="sm"
      onClose={handleClose}
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
      BackdropProps={{
        invisible: true, // Removes the backdrop (black background)
      }}
    >
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          bgcolor: "#fff",
          boxShadow: 24,
          borderRadius: 3,
          width: 380, // Increased size
          padding: 4, // More padding for better spacing
          border: "1px solid #ddd",
          outline: "none",
        }}
      >
        {/* Modal Content */}

        <h5
          className="heading-5"
          style={{ textAlign: "center", marginBottom: "12px" }}
        >
          {" "}
          Are you sure you want to delete this item?
        </h5>

        <Divider sx={{ marginBottom: 3 }} />

        <Stack direction="row" spacing={4} justifyContent="center">
          {" "}
          {/* Increased gap between buttons */}
          {/* Cancel Button */}
          <Button
            variant="outlined"
            color="primary"
            onClick={() => confirmDelete(false)}
            sx={{
              width: "45%",
            }}
          >
            Cancel
          </Button>
          {/* Delete Button */}
          <Button
            variant="contained"
            onClick={() => confirmDelete(true)}
            sx={{
              width: "45%",
              backgroundColor: "#FF4040",
              color: "#fff",
              "&:hover": {
                backgroundColor: "#e53935",
              },
            }}
            startIcon={<DeleteForeverIcon />}
          >
            Delete
          </Button>
        </Stack>
      </Box>
    </Modal>
  );
};

export default DeleteModal;
