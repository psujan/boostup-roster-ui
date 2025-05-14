import React from "react";
import { Box, Typography } from "@mui/material";

const MyShiftsHeader = () => {
  return (
    <Box
      display="flex"
      justifyContent="space-between"
      alignItems="center"
      borderBottom={1}
      borderColor="divider"
      p={2}
    >
      <Typography variant="h6" fontWeight="bold">
        My Leaves
      </Typography>
      <Typography variant="body1" color="text.secondary">
        2025
      </Typography>
    </Box>
  );
};

export default MyShiftsHeader;
