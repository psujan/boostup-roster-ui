// import SwapHorizOutlinedIcon from "@mui/icons-material/SwapHorizOutlined";
import { Drawer, Divider, Box, Button } from "@mui/material";
import SpaceDashboardOutlinedIcon from "@mui/icons-material/SpaceDashboardOutlined";
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
import AllOutOutlinedIcon from "@mui/icons-material/AllOutOutlined";
import Person2OutlinedIcon from "@mui/icons-material/Person2Outlined";
import { Link } from "react-router-dom";
export default function EmployeeSidebar({ empSideBar, toggleEmpSideBar }) {
  return (
    <Drawer
      open={empSideBar}
      anchor="left"
      sx={{ zIndex: 1202 }}
      onClose={() => toggleEmpSideBar(false)}
    >
      <Box sx={{ width: 280 }} role="presentation">
        <Box sx={{ padding: "20px 10px" }}>
          <Box className="flex flex-between flex-center">
            <h5 className="heading-5">Hi, Sujan Poudel</h5>
            <Button variant="outlined" color="primary" size="small">
              Logout
            </Button>
          </Box>
          <Divider sx={{ margin: "10px 0" }}></Divider>
        </Box>
        <Box>
          <ul>
            <li className="flex flex-center emp-sidebar-link-list">
              <Link
                onClick={() => toggleEmpSideBar(false)}
                to="/employee-dashboard"
                style={{ width: "100%" }}
                className="flex flex-center emp-sidebar-link"
              >
                <SpaceDashboardOutlinedIcon color="#ccc" />
                <span style={{ paddingLeft: "20px" }}>Dashboard</span>
              </Link>
            </li>
            <li className="flex flex-center emp-sidebar-link-list">
              <Link
                onClick={() => toggleEmpSideBar(false)}
                to="/shift-history"
                style={{ width: "100%" }}
                className="flex flex-center emp-sidebar-link"
              >
                <CalendarTodayOutlinedIcon color="#ccc" />
                <span style={{ paddingLeft: "20px" }}>Shifts</span>
              </Link>
            </li>
            <li className="flex flex-center emp-sidebar-link-list">
              <Link
                onClick={() => toggleEmpSideBar(false)}
                to="/employee-leaves"
                style={{ width: "100%" }}
                className="flex flex-center emp-sidebar-link"
              >
                <AllOutOutlinedIcon color="#ccc" />
                <span style={{ paddingLeft: "20px" }}>Leaves</span>
              </Link>
            </li>
            <li className="flex flex-center emp-sidebar-link-list">
              <Link
                onClick={() => toggleEmpSideBar(false)}
                to="/employee-dashboard"
                style={{ width: "100%" }}
                className="flex flex-center emp-sidebar-link"
              >
                <Person2OutlinedIcon color="#ccc" />
                <span style={{ paddingLeft: "20px" }}>Profile</span>
              </Link>
            </li>
          </ul>
        </Box>
      </Box>
    </Drawer>
  );
}
