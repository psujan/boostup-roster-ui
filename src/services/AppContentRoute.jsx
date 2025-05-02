import { useEffect } from "react";
import { Routes, Route, useLocation, useNavigate } from "react-router-dom";
import { isAuthenticated } from "../utils/auth";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LoaderProvider } from "../utils/context/LoaderContext";
import LoginPage from "../components/LoginPage";
import AdminLayouts from "../components/layouts/AdminLayouts";
import EmployeeLayouts from "../components/layouts/EmployeeLayouts";

export const AppContentRoute = () => {
  //const location = useLocation();
  const navigate = useNavigate();
  // const isLoginPage = location.pathname === "/login";
  const { role } = isAuthenticated();

  const isValidLoggedIn = () => {
    const token = localStorage.getItem("token");
    const tokenExpiry = localStorage.getItem("tokenExpiry");
    if (!token) {
      return false;
    }

    if (!tokenExpiry) {
      return false;
    }
    if (new Date(tokenExpiry) > Date.now()) {
      return true;
    }

    return false;
  };
  useEffect(() => {
    if (!isValidLoggedIn()) {
      navigate("/login");
    }
  }, []);

  const getRoleBasedLayout = () => {
    // To access role , user must have valid login
    if (!isValidLoggedIn()) {
      localStorage.clear();
    }
    switch (role.toLowerCase()) {
      case "superadmin":
        return <AdminLayouts />;
      case "employee":
        return <EmployeeLayouts />;
      default:
        return <LoginPage />;
    }
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <LoaderProvider>
        {getRoleBasedLayout()}
        {/* <Routes>
          <Route path="/login" element={<LoginPage />} />
        </Routes> */}
      </LoaderProvider>
    </LocalizationProvider>
  );
};
