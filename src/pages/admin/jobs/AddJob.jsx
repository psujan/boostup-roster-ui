import React from "react";
import JobForm from "./partials/JobForm";
import { TextField, Button, Box, Typography } from "@mui/material";
import BackButton from "../../../commonComponents/BackButton";

const AddJob = () => {
  return (
    <div>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "flex-start",
        }}
      >
        <BackButton />
      </Box>
      <br />

      <Box
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: "15px",
          marginTop: "-20px",
        }}
      >
        <Typography style={{ fontWeight: "500", fontSize: "20px" }}>
          Add new Job
        </Typography>
      </Box>
      <JobForm />
    </div>
  );
};

export default AddJob;
