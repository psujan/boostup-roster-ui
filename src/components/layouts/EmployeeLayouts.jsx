import { Box } from "@mui/material";
import EmployeeSidebar from "../EmployeeSidebar";
import MenuOutlinedIcon from "@mui/icons-material/MenuOpenOutlined";
import { useState } from "react";
import EmployeeRoutes from "../../routes/EmployeeRoutes";

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
          backgroundColor: "#f5f5f5",
        }}
      >
        <EmployeeRoutes />
      </Box>
    </Box>
  );
}
