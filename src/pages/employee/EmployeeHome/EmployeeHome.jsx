import { Box, Typography } from "@mui/material";
import React from "react";
import WeeklyStatsCard from "./partials/WeeklyStatsCard";
import MyShiftsHeader from "./partials/MyShiftsHeader";

import Greeting from "./partials/Greeting";
import ShiftSchedule from "./partials/ShiftSchedule";

const EmployeeHome = () => {
  return (
    <Box>
      <Greeting />
      <WeeklyStatsCard />
      <MyShiftsHeader />
      <ShiftSchedule />
    </Box>
  );
};

export default EmployeeHome;
