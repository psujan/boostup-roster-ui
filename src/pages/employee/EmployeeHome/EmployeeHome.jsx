<<<<<<< HEAD
import { Box } from "@mui/material";
import WeeklyStatsCard from "./partials/WeeklyStatsCard";
import Greeting from "./partials/Greeting";
import AssignedShifts from "./partials/AssignedShifts";

const EmployeeHome = () => {
  return (
    <Box className="employee-box-wrap">
      <Greeting />
      <WeeklyStatsCard />
      <AssignedShifts />
=======
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
>>>>>>> bf24c8b40d0f2c64e033459ddbc16934da383f42
    </Box>
  );
};

export default EmployeeHome;
