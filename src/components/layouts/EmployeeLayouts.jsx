import { Box, Typography } from "@mui/material";
import EmployeeSidebar from "../EmployeeSidebar";
import MenuOutlinedIcon from "@mui/icons-material/MenuOpenOutlined";
import { useState } from "react";
import EmployeeRoutes from "../../routes/EmployeeRoutes";
import { Link } from "react-router-dom";

export default function EmployeeLayouts() {
  const [empSideBar, setEmpSideBar] = useState(false);
  const toggleEmpSideBar = (toggleState) => {
    setEmpSideBar(toggleState);
  };
  return (
    <Box>
      <EmployeeSidebar
        empSideBar={empSideBar}
        toggleEmpSideBar={toggleEmpSideBar}
      />
      <div
        className="flex flex-between flex-center"
        style={{ padding: "16px 8px", borderBottom: "1px solid #d9d9d9" }}
      >
        <Link to="/employee-dashboard">
          <Typography
            variant="h5"
            style={{
              color: "var(--primaryColor)",
              fontWSize: "24px",
              fontWeight: "600",
              width: "100%",
              textAlign: "left", // Center the text for better alignment
              visibility: open ? "visible" : "hidden", // Hide the text when the drawer is closed
            }}
          >
            BoostUp
          </Typography>
        </Link>

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
          backgroundColor: "#f5f5f5",
        }}
      >
        <EmployeeRoutes />
      </Box>
    </Box>
  );
}
