import React from "react";
import { Box } from "@mui/material";
import KeyboardBackspaceOutlinedIcon from "@mui/icons-material/KeyboardBackspaceOutlined";
const BackButton = () => {
  return (
    <Box sx={{ paddingTop: "20px" }}>
      <KeyboardBackspaceOutlinedIcon color="#6666" />
    </Box>
  );
};

export default BackButton;
