import React from "react";
import { Typography, Box, Grid } from "@mui/material";

const WeeklyStatsCard = () => {
  return (
<<<<<<< HEAD
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
=======
    <Box
      sx={{
        border: "1px solid #ccc",
        borderRadius: "8px",
        maxWidth: 500,
        mx: "auto",
        overflow: "hidden",
        backgroundColor: "white",
      }}
    >
      <Box sx={{ p: 2 }}>
        <Typography
          sx={{ fontSize: "clamp(15px, 5vw, 20px)", fontWeight: "500" }}
        >
          This Week (01 Jan - 7 Jan)
        </Typography>
      </Box>

      <Grid container sx={{ backgroundColor: "white", textAlign: "center" }}>
        <Grid
          item
          xs={12}
          sm={6}
          sx={{
            p: 2,
            borderRight: { sm: "1px solid #ccc" },
            borderBottom: { xs: "1px solid #ccc", sm: "none" },
          }}
        >
          <Typography color="text.secondary">No Of Shift</Typography>
          <Typography variant="h6">3</Typography>
        </Grid>

        <Grid item xs={12} sm={6} sx={{ p: 2 }}>
          <Typography color="text.secondary">Worked Hours</Typography>
          <Typography variant="h6">48</Typography>
        </Grid>
      </Grid>
>>>>>>> bf24c8b40d0f2c64e033459ddbc16934da383f42
    </Box>
  );
};

export default WeeklyStatsCard;
