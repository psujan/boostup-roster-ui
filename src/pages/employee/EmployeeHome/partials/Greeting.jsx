import React from "react";
import { Box, Typography } from "@mui/material";

const Greeting = () => {
  const user = localStorage.getItem("user");
  return (
    <Box
      display="flex"
      alignItems="center"
      flexWrap="wrap"
      sx={{ margin: "30px 0px" }}
    >
      <Typography sx={{ fontSize: "clamp(15px, 5vw, 25px)" }}>
        Good Morning&nbsp;
      </Typography>
      <Typography
        sx={{
          fontSize: "clamp(15px, 5vw, 25px)",
          color: "var(--primaryColor)",
        }}
      >
        {user}
      </Typography>
      <Typography sx={{ fontSize: "clamp(15px, 5vw, 25px)" }}>
        &nbsp;!
      </Typography>
    </Box>
  );
};

export default Greeting;
