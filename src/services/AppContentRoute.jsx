import { useEffect } from "react";
import {
  Routes,
  Route,
  useLocation,
  useNavigate,
  useSearchParams,
} from "react-router-dom";
import { isAuthenticated } from "../utils/auth";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LoaderProvider } from "../utils/context/LoaderContext";
import LoginPage from "../components/LoginPage";
import AdminLayouts from "../components/layouts/AdminLayouts";
import EmployeeLayouts from "../components/layouts/EmployeeLayouts";
import ForgotPasswordPage from "../components/ForgotPasswordPage";

export const AppContentRoute = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();
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
    console.log(location.pathname);
    if (location.pathname === "/change-password") {
      console.log(searchParams.get("email"));
      console.log(searchParams.get("token"));
      const resetEmail = searchParams.get("email");
      const resetToken = searchParams.get("token");
      if (resetEmail && resetToken) {
        localStorage.setItem("resetEmail", resetEmail);
        localStorage.setItem("resetToken", resetToken);
      }
      navigate("/change-password");
      return;
    }
    if (!isValidLoggedIn()) {
      navigate("/login");
    }
  }, []);

  const getRoleBasedLayout = () => {
    // To access role , user must have valid login
    if (!isValidLoggedIn() && location.pathname != "/change-password") {
      localStorage.clear();
    }
    switch (role.toLowerCase()) {
      case "superadmin":
        return <AdminLayouts />;
      case "employee":
        return <EmployeeLayouts />;
      default:
        return location.pathname == "/change-password" ? (
          <ForgotPasswordPage />
        ) : (
          <LoginPage />
        );
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
