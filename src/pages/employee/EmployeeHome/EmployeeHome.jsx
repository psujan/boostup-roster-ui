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
    </Box>
  );
};

export default EmployeeHome;
