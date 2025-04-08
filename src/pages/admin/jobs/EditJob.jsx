import React from "react";
import JobForm from "./partials/JobForm";
import { TextField, Button, Box, Typography } from "@mui/material";
import BackButton from "../../../components/common/BackButton";
import BaseLayout from "../../../components/common/BaseLayout";
import Heading from "../../../components/common/Heading";
import AddIcon from "@mui/icons-material/NorthEast";
import { useNavigate } from "react-router-dom";
import UpdateJobForm from "./partials/UpdateJobForm";

const AddJob = () => {
  const navigate = useNavigate();
  return (
    <BaseLayout>
      <Box className="content-top flex flex-between flex-center">
        <Heading title="Add new job" />
        <Button
          variant="text"
          sx={{
            fontSize: "14px",
            fontWeight: "500",
            height: "32px",
            padding: "6px 10px",
            textTransform: "none",
            color: "var(--primaryColor)",
          }}
          onClick={() => navigate("/jobs")}
        >
          View All
          <AddIcon sx={{ marginLeft: "10px", fontSize: "15px" }} />
        </Button>
      </Box>
      <UpdateJobForm />
    </BaseLayout>
  );
};

export default AddJob;
