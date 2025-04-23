import React from "react";
import Greeting from "../EmployeeHome/partials/Greeting";
import WeeklyStatsCard from "../EmployeeHome/partials/WeeklyStatsCard";
import MyShiftsHeader from "./partials/MyShiftsHeader";
import { Box } from "@mui/material";
import LeaveSchedule from "./partials/LeaveSchedule";

const EmployeeLeaveRequest = () => {
  return (
    <Box>
      <Greeting />
      <WeeklyStatsCard />
      <MyShiftsHeader />
      <LeaveSchedule />
    </Box>
  );
};

export default EmployeeLeaveRequest;
