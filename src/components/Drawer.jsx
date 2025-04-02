import * as React from "react";
import "../App.css";
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MuiDrawer from "@mui/material/Drawer";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import SpaceDashboardOutlinedIcon from "@mui/icons-material/SpaceDashboardOutlined";
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
import UpdateOutlinedIcon from "@mui/icons-material/UpdateOutlined";
import EventBusyOutlinedIcon from "@mui/icons-material/EventBusyOutlined";
import GroupOutlinedIcon from "@mui/icons-material/GroupOutlined";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { useLocation, useNavigate } from "react-router-dom";
import Typography from "@mui/material/Typography"; // <-- Add this line for Typography import
import { isAuthenticated } from "../utils/auth";
import { MenuItem, Select } from "@mui/material";
import ClickableTextMenu from "../commonComponents/TextMenu";
import { ToastMesssage } from "../commonComponents/ToastNotification";

const drawerWidth = 240;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between", // Ensures space between the text and icon
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
  backgroundColor: "#f4f4f4", // Background color for Drawer Header
}));

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme }) => ({
  zIndex: theme.zIndex.drawer + 1, // Ensures AppBar stays on top
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme),
  }),
}));

const adminIcons = [
  <SpaceDashboardOutlinedIcon />,
  <CalendarTodayOutlinedIcon />,
  <UpdateOutlinedIcon />,
  <EventBusyOutlinedIcon />,
  <GroupOutlinedIcon />,
];

const employeeIcons = [
  <SpaceDashboardOutlinedIcon />,
  <CalendarTodayOutlinedIcon />,
  <EventBusyOutlinedIcon />,
  <UpdateOutlinedIcon />,
  <GroupOutlinedIcon />,
];

const options = ["My Profile", "Log out"];

export default function ResponsiveDrawer({ open, setOpen }) {
  const navigate = useNavigate();
  const location = useLocation();
  const theme = useTheme();
  const { isAuth, role } = isAuthenticated();

  const employeePath = [
    { text: " Dashboard", path: "/admin-dashboard" },
    { text: " My Shifts", path: "/employee-jobs" },
    { text: " Request Leave", path: "/employee-roster" },
    { text: " Shift History", path: "/employee-request" },
    { text: " Profile", path: "/employee-profile" },
  ];
  const adminPath = [
    { text: " Overview", path: "/admin-dashboard" },
    { text: " Jobs", path: "/events" },
    { text: " Roster", path: "/roster" },
    { text: " Leave Request", path: "/leave-request" },
    { text: " Employee", path: "/employee" },
  ];

  const handleDrawerOpen = () => setOpen(true);
  const handleDrawerClose = () => setOpen(false);
  const handleProfile = () => {
    navigate("/events");
  };
  const handleLogout = () => {
    navigate("/");
    ToastMesssage("success", "logout Successfully!");
    localStorage.clear();
  };
  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        open={open}
        sx={{
          backgroundColor: "#fff",
          boxShadow: "none",
          minHeight: "64px",
          width: open ? `calc(100% - ${drawerWidth}px)` : "100%", // Adjust width when drawer is closed
          transition: "width 0.3s ease", // Smooth transition for AppBar width
        }}
      >
        <Toolbar
          sx={{
            display: "flex",
            justifyContent: "space-between", // Ensure items are spaced properly
            padding: theme.spacing(0, 2), // Add some padding
            [theme.breakpoints.down("sm")]: {
              justifyContent: "flex-start", // Adjust for smaller screens (sm)
            },
          }}
        >
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={[
              { marginRight: 5 },
              open && { display: "none" }, // Hide the menu icon when the drawer is open
            ]}
          >
            <MenuIcon sx={{ color: "#ddd" }} />
          </IconButton>
          <div
            className="sideHeader"
            style={{
              display: "flex",
              alignItems: "center",
              color: "var(--greyColor)",
              width: "100%",
              justifyContent: "flex-end", // Adjust layout when open or closed
              paddingRight: open ? "10px" : "0", // Reduce padding when closed
            }}
          >
            <NotificationsNoneOutlinedIcon
              sx={{ color: "var(--greyColor)", fontWeight: "600" }}
            />
            &nbsp; &nbsp; &nbsp;
            <ClickableTextMenu
              text="John Doe"
              items={[
                { label: "My Profile", onClick: handleProfile },
                { label: "Logout", onClick: handleLogout },
              ]}
            />
          </div>
        </Toolbar>
      </AppBar>

      <Drawer variant="permanent" open={open}>
        <DrawerHeader
          sx={{
            paddingLeft: open ? theme.spacing(2) : theme.spacing(1),
            background: "#fff",
          }}
        >
          <Typography
            variant="h5"
            style={{
              color: "var(--primaryColor)",
              fontWSize: "24px",
              fontWeight: "600",
              width: "100%",
              padding: theme.spacing(0, 1),
              textAlign: "left", // Center the text for better alignment
              visibility: open ? "visible" : "hidden", // Hide the text when the drawer is closed
            }}
          >
            BoostUp
          </Typography>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === "rtl" ? (
              <ChevronRightIcon />
            ) : (
              <ChevronLeftIcon />
            )}
          </IconButton>
        </DrawerHeader>
        <Divider />
        {isAuth && role == "SuperAdmin" ? (
          <List>
            {adminPath.map((item, index) => (
              <ListItem
                key={item.text}
                disablePadding
                sx={{ display: "block" }}
              >
                <ListItemButton
                  onClick={() => navigate(item.path)}
                  sx={{
                    minHeight: 48,
                    px: 2.5,
                    backgroundColor:
                      location.pathname === item.path ? "#64ECAC24" : "inherit", // Active background color
                    display: "flex",
                    alignItems: "center", // Align icon and text properly
                  }}
                >
                  <ListItemIcon
                    sx={{
                      minWidth: 0,
                      justifyContent: "center",
                      marginRight: open ? theme.spacing(2) : 0, // Add gap between icon and text when open
                    }}
                  >
                    {adminIcons[index % 5]}
                  </ListItemIcon>
                  <ListItemText
                    primary={item.text}
                    sx={{
                      display: open ? "block" : "none", // Hide text when the drawer is closed
                      marginLeft: open ? theme.spacing(2) : 0, // Add space between icon and text
                    }}
                  />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        ) : isAuth && role == "Employee" ? (
          <List>
            {employeePath.map((item, index) => (
              <ListItem
                key={item.text}
                disablePadding
                sx={{ display: "block" }}
              >
                <ListItemButton
                  onClick={() => navigate(item.path)}
                  sx={{
                    minHeight: 48,
                    px: 2.5,
                    backgroundColor:
                      location.pathname === item.path ? "#64ECAC24" : "inherit", // Active background color
                    display: "flex",
                    alignItems: "center", // Align icon and text properly
                  }}
                >
                  <ListItemIcon
                    sx={{
                      minWidth: 0,
                      justifyContent: "center",
                      marginRight: open ? theme.spacing(2) : 0, // Add gap between icon and text when open
                    }}
                  >
                    {employeeIcons[index % 5]}
                  </ListItemIcon>
                  <ListItemText
                    primary={item.text}
                    sx={{
                      display: open ? "block" : "none", // Hide text when the drawer is closed
                      marginLeft: open ? theme.spacing(2) : 0, // Add space between icon and text
                    }}
                  />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        ) : null}
      </Drawer>
    </Box>
  );
}
