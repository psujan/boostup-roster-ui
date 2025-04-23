import { useState, useEffect } from "react";
import { Routes, useLocation, useNavigate } from "react-router-dom";
import { isAuthenticated } from "../utils/auth";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { Box, Button } from "@mui/material";
import ResponsiveDrawer from "../components/Drawer";
import { LoaderProvider } from "../utils/context/LoaderContext";
import AdminRoutes from "../routes/AdminRoutes";
import EmployeeRoutes from "../routes/EmployeeRoutes";
import EmployeeSidebar from "../components/EmployeeSidebar";
import MenuOutlinedIcon from "@mui/icons-material/MenuOpenOutlined";

export const AppContentRoute = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const [empSideBar, setEmpSideBar] = useState(false);
  const isLoginPage =
    location.pathname === "/" || location.pathname === "/login";
  const { isAuth, role } = isAuthenticated();
  console.log("here", isAuth, navigate, isLoginPage);

  const toggleEmpSideBar = (toggleState) => {
    setEmpSideBar(toggleState);
  };

  useEffect(() => {
    if (role.toLocaleLowerCase() == "employee") {
      setOpen(false);
    }
    // if (!isAuth && !isLoginPage) {
    //   navigate("/login");
    // }
  }, [isAuth, isLoginPage, navigate]);

  // if (isLoginPage)
  //   return (
  //     <LoaderProvider>
  //       <Routes>
  //         <Route path="/" element={<LoginPage />} />
  //         <Route path="/login" element={<LoginPage />} />
  //       </Routes>
  //     </LoaderProvider>
  //   );
  // if (!isAuth) return null;

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <LoaderProvider>
        {role.toLocaleLowerCase() == "employee" ? (
          <Box>
            <EmployeeSidebar
              empSideBar={empSideBar}
              toggleEmpSideBar={toggleEmpSideBar}
            />
            <div
              className="flex flex-between flex-center"
              style={{ padding: "16px 8px", borderBottom: "1px solid #d9d9d9" }}
            >
              <h1
                style={{
                  fontSize: "18px",
                  fontWeight: 700,
                  color: "var(--primaryColor)",
                }}
              >
                Boostup
              </h1>

              <div
                onClick={() => setEmpSideBar(true)}
                className="flex flex-center"
                style={{
                  border: "1px solid #d9d9d9",
                  borderRadius: "8px",
                  justifyContent: "center",
                  padding: "4px",
                  cursor: "pointer",
                }}
              >
                <MenuOutlinedIcon color="#666" />
              </div>
            </div>
            <Box
              component="main"
              sx={{
                flexGrow: 1,
                bgcolor: "#fff",
                p: 1,
                minHeight: "100vh",
              }}
            >
              <EmployeeRoutes />
            </Box>
          </Box>
        ) : (
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
              <AdminRoutes />
            </Box>
          </Box>
        )}
      </LoaderProvider>
    </LocalizationProvider>
  );
};
