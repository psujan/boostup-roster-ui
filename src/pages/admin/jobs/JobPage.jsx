import React from "react";
import AddIcon from "@mui/icons-material/Add";
import JobTable from "./partials/JobTable";
import { Box, Button, Typography } from "@mui/material";
import BackButton from "../../../commonComponents/BackButton";
const JobPage = () => {
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
          Jobs
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
      <JobTable />
    </div>
  );
};

export default JobPage;
