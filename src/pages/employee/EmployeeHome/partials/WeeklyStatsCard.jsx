import React from "react";
import { Typography, Box, Grid } from "@mui/material";

const WeeklyStatsCard = () => {
  return (
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
    </Box>
  );
};

export default WeeklyStatsCard;
