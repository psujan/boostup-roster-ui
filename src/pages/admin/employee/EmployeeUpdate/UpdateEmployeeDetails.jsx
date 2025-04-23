import React from "react";
import EmployeeForm from "./partials/EmployeeForm";
import { TextField, Button, Box, Typography } from "@mui/material";
import BaseLayout from "../../../../components/common/BaseLayout";
import Heading from "../../../../components/common/Heading";
import AddIcon from "@mui/icons-material/NorthEast";

const UpdateEmployeeDetails = () => {
  return (
    <BaseLayout>
      {console.log("perimens")}
      <Box className="content-top flex flex-between flex-center">
        <Heading title="Update employe Profile" />
        <Button
          variant="outlined"
          color="primary"
          size="sm"
          sx={{
            fontSize: "14px",
            fontWeight: "500",
            textTransform: "none",
          }}
          onClick={() => navigate("/all-employee")}
        >
          View All Employee
          <AddIcon sx={{ marginLeft: "10px", fontSize: "15px" }} />
        </Button>
      </Box>
      <EmployeeForm />
    </BaseLayout>
  );
};

export default UpdateEmployeeDetails;
