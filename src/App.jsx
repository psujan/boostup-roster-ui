import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
  useNavigate,
} from "react-router-dom";
import EmployeeProfile from "./components/EmployeeProfile";
import Schedule from "./components/Schedule";
import { CssBaseline, Box, ThemeProvider, createTheme } from "@mui/material";
import Drawer from "./components/Drawer";
import Dashboard from "./pages/admin/dashboard/Dashboard";
import OnBoardStaff from "./pages/admin/OnBoardStaff";
import ScheduleShift from "./pages/admin/ScheduleShift";
import EventsTable from "./components/Eventstable";
import LeaveRequest from "./components/Leavereq";
import RosterTable from "./components/RosterTable";
import EmployeeHome from "./components/EmployeeHome";
import LoginPage from "./components/LoginPage";
import { isAuthenticated } from "./utils/auth";
import { ToastContainer } from "react-toastify";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import Onboard from "./pages/admin/employee/Onboard";
import { LoaderProvider } from "./utils/context/LoaderContext";
import EmployeeDetail from "./pages/admin/employee/EmployeeDetail";

const AppContent = ({ open, setOpen }) => {
  const location = useLocation();
  const navigate = useNavigate();
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
          <Drawer open={open} setOpen={setOpen} />
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
                  <Route path="/onboard-staff" element={<OnBoardStaff />} />
                  <Route path="/schedule-shift" element={<ScheduleShift />} />
                  <Route path="/employee" element={<EmployeeProfile />} />
                  <Route path="/schedule" element={<Schedule />} />
                  <Route path="/events" element={<EventsTable />} />
                  <Route path="/leave-request" element={<LeaveRequest />} />
                  <Route path="/add-employee" element={<Onboard />} />
                  <Route
                    path="/roster"
                    element={<RosterTable addRoster={true} />}
                  />
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
                  <Route path="/employee-jobs" element={<EmployeeHome />} />
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

const App = () => {
  const [open, setOpen] = React.useState(true);

  const theme = createTheme({
    typography: {
      fontFamily: "Inter, sans-serif",
      lineHeight: "100%",
    },
    components: {
      MuiButton: {
        styleOverrides: {
          root: {
            borderRadius: "8px",
            transition: "all 0.3s ease-in-out",
            "&:hover": {
              transform: "translateY(-2px)",
            },
            "&:active": {
              transform: "translateY(0px)",
              boxShadow: "none",
            },
          },
        },
      },
      MuiSelect: {
        styleOverrides: {
          root: {
            backgroundColor: "transparent",
            "& .MuiOutlinedInput-notchedOutline": {
              border: "none",
            },
            "&:hover .MuiOutlinedInput-notchedOutline": {
              border: "none",
            },
            "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
              border: "none",
            },
          },
        },
      },
      MuiTextField: {
        styleOverrides: {
          root: {
            "& .MuiOutlinedInput-root": {
              padding: "10px",
              borderRadius: "8px",
            },
            "&:hover fieldset": {
              borderColor: "var(--primaryColor)",
            },
            "&.focused fieldset": {
              outline: "var(--primaryColor)", // Change to your primary color when focused
            },
          },
        },
      },
    },
  });

  return (
    <Router>
      <ToastContainer />
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <AppContent open={open} setOpen={setOpen} />
      </ThemeProvider>
    </Router>
  );
};

export default App;
