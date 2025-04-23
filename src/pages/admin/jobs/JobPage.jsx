import React from "react";
import AddIcon from "@mui/icons-material/Add";
import JobTable from "./partials/JobTable";
import { Box, Button } from "@mui/material";
import Heading from "../../../components/common/Heading";
import BaseLayout from "../../../components/common/BaseLayout";
import { useNavigate } from "react-router-dom";
const JobPage = () => {
  const navigate = useNavigate();
  const handleJobAdd = () => {
    navigate("add-jobs");
  };
  return (
    <BaseLayout>
      <Box className="content-top flex flex-between flex-center">
        <Heading title="Jobs" />
        <Button
          variant="outlined"
          color="primary"
          size="sm"
          sx={{
            fontSize: "14px",
            fontWeight: "500",
            textTransform: "none",
          }}
          onClick={handleJobAdd}
        >
          <AddIcon sx={{ marginRight: "10px" }} /> Add
        </Button>
      </Box>
      <JobTable />
    </BaseLayout>
  );
};

export default JobPage;
