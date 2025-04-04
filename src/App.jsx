import React, { useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { ToastContainer } from "react-toastify";
import { theme } from "./theme/theme";
import { AppContentRoute } from "./services/AppContentRoute";

const App = () => {
  return (
    <Router>
      <ToastContainer />
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <AppContentRoute />
      </ThemeProvider>
    </Router>
  );
};

export default App;
