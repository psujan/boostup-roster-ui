import React, { useState } from "react";
import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import { isAuthenticated } from "../utils/auth";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { Box } from "@mui/material";
import Dashboard from "../pages/admin/dashboard/Dashboard";
import ResponsiveDrawer from "../components/Drawer";
import JobPage from "../pages/admin/jobs/JobPage";
import AddJob from "../pages/admin/jobs/AddJob";
import LoginPage from "../components/LoginPage";

export const AppContentRoute = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [open, setOpen] = useState(true);
  const isLoginPage =
    location.pathname === "/" || location.pathname === "/login";
  const { isAuth, role } = isAuthenticated();
  React.useEffect(() => {
    if (!isAuth && !isLoginPage) {
      navigate("/login");
    }
  }, [isAuth, isLoginPage, navigate]);

  if (isLoginPage)
    return (
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    );
  if (!isAuth) return null;

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <Box>
        <ResponsiveDrawer open={open} setOpen={setOpen} />
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
            {role === "SuperAdmin" ? (
              <>
                {/* <Route path="/" element={<Dashboard />} /> */}
                <Route path="/admin-dashboard" element={<Dashboard />} />
                <Route path="/jobs" element={<JobPage />} />
                <Route path="/add-jobs" element={<AddJob />} />

                {/* <Route path="/onboard-staff" element={<OnBoardStaff />} />
                <Route path="/schedule-shift" element={<ScheduleShift />} />
                <Route path="/employee" element={<EmployeeProfile />} />
                <Route path="/schedule" element={<Schedule />} />
                <Route path="/events" element={<J />} />
                <Route path="/leave-request" element={<LeaveRequest />} />
                <Route
                  path="/roster"
                  element={<RosterTable addRoster={true} />}
                /> */}
              </>
            ) : role == "Employee" ? (
              <>
                <Route path="/" element={<EmployeeHome />} />
                {/* <Route path="/employee-dashboard" element={<EmployeeHome />} />
                <Route path="/employee-jobs" element={<EmployeeHome />} />
                <Route path="/employee-roster" element={<EmployeeHome />} />
                <Route path="/employee-request" element={<EmployeeHome />} />
                <Route path="/employee-profile" element={<EmployeeHome />} /> */}
              </>
            ) : null}
          </Routes>
        </Box>
      </Box>
    </LocalizationProvider>
  );
};
