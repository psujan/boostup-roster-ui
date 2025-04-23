import React from "react";
import { Grid, Box, Typography, IconButton } from "@mui/material";
import NorthEastIcon from "@mui/icons-material/NorthEast"; // External link arrow
import { useNavigate } from "react-router-dom";

const ShiftCard = ({ day, date, time, location }) => {
  const navigate = useNavigate();

  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="space-between"
      bgcolor="#fff"
      p={2}
      borderRadius={2}
      boxShadow={1}
      marginBottom={5}
    >
      {/* Left Section: Date */}
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        minWidth={50}
      >
        <Typography variant="body1" fontWeight="400">
          {day}
        </Typography>
        <Typography variant="h6" fontWeight="400">
          {date}
        </Typography>
      </Box>

      {/* Middle Section: Time and Address */}
      <Box flex="1" mx={2}>
        <Typography sx={{ fontSize: "clamp(12px, 4vw, 20px)" }}>
          {time}
        </Typography>
        <Typography
          variant="body2"
          color="text.secondary"
          fontWeight="500"
          mt={0.5}
        >
          {location}
        </Typography>
      </Box>

      {/* Right Section: Icon */}
      <IconButton onClick={() => navigate("/employee-roster")}>
        <NorthEastIcon sx={{ color: "var(--primaryColor)" }} />
      </IconButton>
    </Box>
  );
};

const ShiftSchedule = () => {
  const shifts = [
    {
      id: 1,
      day: "Sun",
      date: "03",
      time: "6:00 AM - 2:00 PM",
      location: "Strata Cleaning - 2 Avona St, Glebe",
    },
    {
      id: 2,
      day: "Mon",
      date: "04",
      time: "8:00 AM - 4:00 PM",
      location: "Tech Works - 5 Silicon Ave, Sydney",
    },
    {
      id: 3,
      day: "Tue",
      date: "05",
      time: "10:00 AM - 6:00 PM",
      location: "Office Cleaners - 30 Martin St, Sydney",
    },
  ];

  return (
    <Grid container spacing={2} sx={{ paddingTop: "30px" }}>
      {shifts.map((shift) => (
        <Grid item xs={12} sm={6} md={4} key={shift.id}>
          <ShiftCard
            day={shift.day}
            date={shift.date}
            time={shift.time}
            location={shift.location}
          />
        </Grid>
      ))}
    </Grid>
  );
};

export default ShiftSchedule;
