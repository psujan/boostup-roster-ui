import React from "react";
import { Box, Typography } from "@mui/material";

const Greeting = () => {
  const user = localStorage.getItem("user");
  return (
<<<<<<< HEAD
    <Box display="flex" alignItems="center" flexWrap="wrap" sx={{margin:'20px 0 35px 0'}}>
      <h5 className="heading-5">
        Hi &nbsp;
        <span className="clr-primary" style={{ fontSize: "15.5px", fontWeight:'600' }}>
          Sujan Poudel
        </span>
        &nbsp;👋
      </h5>
=======
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
>>>>>>> bf24c8b40d0f2c64e033459ddbc16934da383f42
    </Box>
  );
};

export default Greeting;
