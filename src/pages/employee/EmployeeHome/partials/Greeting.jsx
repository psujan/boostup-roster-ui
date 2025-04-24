import React from "react";
import { Box, Typography } from "@mui/material";
import { isAuthenticated } from "../../../../utils/auth";

const Greeting = () => {
  const { user } = isAuthenticated();
  return (
    <Box
      display="flex"
      alignItems="center"
      flexWrap="wrap"
      sx={{ margin: "20px 0 35px 0" }}
    >
      <h5 className="heading-5">
        Hi &nbsp;
        <span
          className="clr-primary"
          style={{ fontSize: "15.5px", fontWeight: "600" }}
        >
          {user?.fullName}
        </span>
        &nbsp;👋
      </h5>
    </Box>
  );
};

export default Greeting;
