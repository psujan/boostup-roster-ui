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
import EditJob from "../pages/admin/jobs/EditJob";
import LoginPage from "../components/LoginPage";
import Onboard from "../pages/admin/employee/Onboard";
import { LoaderProvider } from "../utils/context/LoaderContext";
import EmployeeDetail from "../pages/admin/employee/EmployeeDetail";
import ScheduleShift from "../pages/admin/ScheduleShift";
import EmployeeProfile from "../components/EmployeeProfile";
import LeaveRequest from "../components/Leavereq";
import EmployeeHome from "../pages/employee/EmployeeHome/EmployeeHome";
import EmployeeShiftDetails from "../pages/employee/EmployeeShiftDetail/EmployeeShiftDetails";
import EmployeeLeaveRequest from "../pages/employee/EmployeeLeaveRequest/EmployeeLeaveRequest";

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
      <LoaderProvider>
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
              paddingLeft: open ? "32px" : "30px",
              minHeight: "100vh",
            }}
          >
            <Routes>
              {role === "SuperAdmin" ? (
                <>
                  <Route path="/" element={<Dashboard />} />
                  <Route path="/admin-dashboard" element={<Dashboard />} />
                  <Route path="/schedule-shift" element={<ScheduleShift />} />
                  <Route path="/employee" element={<EmployeeProfile />} />
                  <Route path="/jobs" element={<JobPage />} />
                  <Route path="/jobs/add-jobs" element={<AddJob />} />
                  <Route path="/jobs/update-jobs/:id" element={<EditJob />} />

                  <Route path="/leave-request" element={<LeaveRequest />} />
                  <Route path="/add-employee" element={<Onboard />} />

                  <Route
                    path="/employee/:id"
                    element={<EmployeeDetail />}
                  ></Route>
                </>
              ) : role == "Employee" ? (
                <>
                  <Route path="/" element={<EmployeeHome />} />
                  <Route
                    path="/employee-dashboard"
                    element={<EmployeeHome />}
                  />

                  <Route
                    path="/employee-jobs"
                    element={<EmployeeShiftDetails />}
                  />
                  <Route
                    path="/employee-leaves"
                    element={<EmployeeLeaveRequest />}
                  />

                  <Route path="/employee-roster" element={<EmployeeHome />} />
                  <Route path="/employee-request" element={<EmployeeHome />} />
                  <Route path="/employee-profile" element={<EmployeeHome />} />
                </>
              ) : null}
            </Routes>
          </Box>
        </Box>
      </LoaderProvider>
    </LocalizationProvider>
  );
};
