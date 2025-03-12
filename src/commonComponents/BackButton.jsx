import React from "react";
import { Box, Typography } from "@mui/material";
import KeyboardBackspaceOutlinedIcon from "@mui/icons-material/KeyboardBackspaceOutlined";
const BackButton = () => {
  return (
    <Box
      sx={{
        padding: "28px 0px",
        fontColor: "#000)",
        fontSize: "14px",
        fontWeight: "300",
        display: "flex",
        alignItems: "center",
      }}
    >
      <KeyboardBackspaceOutlinedIcon size="16px" />
      &nbsp;Back
    </Box>
  );
};

export default BackButton;
