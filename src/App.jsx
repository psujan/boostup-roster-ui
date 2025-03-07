import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import Employees from "./components/Employees";
import Schedule from "./components/Schedule";
import { CssBaseline, Box } from "@mui/material";
import Drawer from "./components/Drawer";
import Overview from "./pages/admin/Overview";
import OnBoardStaff from "./pages/admin/OnBoardStaff";
import ScheduleShift from "./pages/admin/ScheduleShift";

const App = () => {
  const [open, setOpen] = React.useState(true); //  drawer open state

  return (
    <Router>
      <CssBaseline />
      <Box sx={{}}>
        <Drawer open={open} setOpen={setOpen} />{" "}
        {/* Pass open state to Drawer */}
        <Box
          component="main"
          sx={{
            flexGrow: 1,
            bgcolor: "#f5f5f5",
            p: 3,
            transition: "margin-left 0.3s ease",
            marginLeft: open ? "240px" : "60px",
            marginTop: "44px",
            paddingLeft: open ? "40px" : "30px",
          }}
        >
          <Routes>
            <Route path="/" element={<Overview />} />
            <Route path="/onboard-staff" element={<OnBoardStaff />} />
            <Route path="/schedule-shift" element={<ScheduleShift />} />

            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/employees" element={<Employees />} />
            <Route path="/schedule" element={<Schedule />} />
          </Routes>
        </Box>
      </Box>
    </Router>
  );
};

export default App;
