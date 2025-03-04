import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import Employees from "./components/Employees";
import Schedule from "./components/Schedule";
import { CssBaseline, Box } from "@mui/material";
import Drawer from "./components/Drawer";
import Overview from "./pages/admin/Overview";

const App = () => {
  const [open, setOpen] = React.useState(true); //  drawer open state

  return (
    <Router>
      <CssBaseline />
      <Box sx={{}}>
        <Drawer open={open} setOpen={setOpen} />{" "}
        {/* Pass open state to Drawer */}
        <Box
          component="main"
          sx={{
            flexGrow: 1,
            bgcolor: "background.default",
            p: 3,
            transition: "margin-left 0.3s ease",
            marginLeft: open ? "200px" : "30px",
          }}
        >
          <Routes>
            <Route path="/" element={<Overview />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/employees" element={<Employees />} />
            <Route path="/schedule" element={<Schedule />} />
          </Routes>
        </Box>
      </Box>
    </Router>
  );
};

export default App;
