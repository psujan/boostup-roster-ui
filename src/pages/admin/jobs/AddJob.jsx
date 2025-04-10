import React from "react";
import JobForm from "./partials/JobForm";
import { TextField, Button, Box, Typography } from "@mui/material";
import BackButton from "../../../components/common/BackButton";
import BaseLayout from "../../../components/common/BaseLayout";
import Heading from "../../../components/common/Heading";
import AddIcon from "@mui/icons-material/NorthEast";
import { useNavigate } from "react-router-dom";

const AddJob = () => {
  const navigate = useNavigate();
  return (
    <BaseLayout>
      <Box className="content-top flex flex-between flex-center">
        <Heading title="Add Job" />
        <Button
          variant="outlined"
          color="primary"
          size="sm"
          sx={{
            fontSize: "14px",
            fontWeight: "500",
            textTransform: "none",
          }}
          onClick={() => navigate("/jobs")}
        >
          View All
          <AddIcon sx={{ marginLeft: "10px", fontSize: "15px" }} />
        </Button>
      </Box>
      <JobForm />
    </BaseLayout>
  );
};

export default AddJob;
