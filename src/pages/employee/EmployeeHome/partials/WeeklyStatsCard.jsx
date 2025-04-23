import React from "react";
import { Typography, Box, Grid } from "@mui/material";

const WeeklyStatsCard = () => {
  return (
    <Box>
      <Box sx={{ mb: 2 }}>
        <h5 className="heading-5">This Week</h5>
      </Box>
      <Box
        sx={{
          p: 3,
          backgroundColor: "#fff",
          borderRadius: "8px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          fontSize: "14px",
        }}
      >
        <Box sx={{ textAlign: "center" }}>
          <p className="text-muted" style={{ marginBottom: "10px" }}>
            No Of Shifts
          </p>
          <p style={{ fontWeight: "500" }}>3</p>
        </Box>
        <Box
          sx={{
            backgroundColor: "#ccc",
            width: "60px",
            height: "100%",
            border: "1px solid #ccc",
            transform: "rotate(90deg)",
          }}
        ></Box>
        <Box sx={{ textAlign: "center" }}>
          <p className="text-muted" style={{ marginBottom: "10px" }}>
            Worked Hours
          </p>
          <p style={{ fontWeight: "500" }}>20</p>
        </Box>
      </Box>
    </Box>
  );
};

export default WeeklyStatsCard;
