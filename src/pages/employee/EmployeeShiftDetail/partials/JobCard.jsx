import React from "react";
import { Box, Button, Typography, Divider } from "@mui/material";

const JobCard = () => {
  return (
    <Box
      bgcolor="white"
      p={2}
      borderRadius={2}
      boxShadow={1}
      display="flex"
      flexDirection="column"
      gap={2}
    >
      {/* Clock IN OUT buttons */}
      <Box display="flex" gap={2}>
        <Button
          variant="contained"
          sx={{ bgcolor: "var(--secondaryColor)", flex: 1, color: "black" }}
        >
          Clock In
        </Button>
        <Button
          variant="contained"
          sx={{ bgcolor: "lightgrey", flex: 1, color: "black" }}
        >
          Clock Out
        </Button>
      </Box>

      {/* Job Information */}
      <Box>
        <Typography fontWeight="600">Sun 03 | 6:00 AM - 2:00 PM</Typography>
        <Typography color="text.secondary">
          Strata Cleaning - 2 Avona St, Glebe
        </Typography>
      </Box>

      <Divider />

      {/* Job notes */}
      <Box>
        <Typography fontWeight="600" mb={1}>
          Job Notes
        </Typography>
        <Typography>1. Vacuum Floor and Clean Carpet Areas</Typography>
        <Typography>2. Deep clean the bar and terrace</Typography>
      </Box>

      <Divider />

      {/* Can't Attend Button */}
      <Button
        variant="contained"
        sx={{
          bgcolor: "var(--primaryColor)",
          borderRadius: 2,
          textTransform: "none",
          mt: 2,
        }}
        fullWidth
      >
        I Can’t Attend This One
      </Button>
    </Box>
  );
};

export default JobCard;
