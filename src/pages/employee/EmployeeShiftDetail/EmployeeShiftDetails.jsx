import { Box } from "@mui/material";
import React from "react";
import Greeting from "../EmployeeHome/partials/Greeting";
import MyShiftsHeader from "./partials/MyShiftsHeader";
import WeeklyStatsCard from "../EmployeeHome/partials/WeeklyStatsCard";
import JobCard from "./partials/JobCard";

const EmployeeShiftDetails = () => {
  return (
    <Box>
      <Greeting />
      <WeeklyStatsCard />
      <MyShiftsHeader />
      <JobCard />
    </Box>
  );
};

export default EmployeeShiftDetails;
