import React from "react";
import AddIcon from "@mui/icons-material/Add";

import {
  Card,
  CardContent,
  Typography,
  Button,
  Avatar,
  Stack,
  Box,
  TextField,
} from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import BackButton from "./common/BackButton";
import "../index.css";
import ECard from "./ECard";

const EmployeeProfile = () => {
  return (
    <>
      <Box
        style={{
          display: "flex",
          justifyContent: "flex-start",
          alignItems: "center",
          // marginTop: "20px",
        }}
      >
        <BackButton />
        {/* <Typography  >Back</Typography> */}
      </Box>
      <Box
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          // width : '80%'
        }}
      ></Box>
      <Box
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginTop: "-20px",
          marginBottom: "20px",
        }}
      >
        <Typography style={{ fontWeight: "500", fontSize: "20px" }}>
          Employee
        </Typography>
        <Button
          variant="contained"
          sx={{
            background: "var(--primaryColor)",
            fontSize: "16px",
            fontWeight: "600",
            width: "106px",
            height: "40px",
            textTransform: "none",
          }}
        >
          <AddIcon sx={{ marginRight: "10px" }} /> Add
        </Button>
      </Box>
      <Box
        sx={{
          height: "916px",
          borderRadius: "8px",
          backgroundColor: "white",
          padding: "40px 40px",
        }}
      >
        <TextField
          id="outlined-basic"
          label="Search..."
          variant="outlined"
          sx={{ width: "200px" }}
          inputProps={{ style: { height: "15px", padding: "10px" } }}
        />
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <ECard />
          <ECard />
          <ECard />
          <ECard />
        </Box>
      </Box>
    </>
  );
};

export default EmployeeProfile;
