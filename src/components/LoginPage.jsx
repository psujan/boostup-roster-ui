import React, { useState } from "react";
import {
  Container,
  TextField,
  Button,
  Typography,
  Box,
  Paper,
} from "@mui/material";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    console.log("Logging in with", email, password);
  };

  return (
    <Container
      component="main"
      maxWidth="xs"
      sx={{
        display: "flex",
        height: "100vh",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Paper
        elevation={3}
        sx={{ padding: 4, width: "100%", textAlign: "center" }}
      >
        <Typography variant="h5" sx={{ marginBottom: 2, fontWeight: "bold" }}>
          BoostUp Login
        </Typography>
        <Box
          component="form"
          sx={{ display: "flex", flexDirection: "column", gap: 2 }}
        >
          <TextField
            label="Email"
            variant="outlined"
            fullWidth
            value={email}
            onChange={(e) => setEmail(e.target.value)}
           
          />
          <TextField
            label="Password"
            type="password"
            variant="outlined"
            fullWidth
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button
            variant="contained"
            fullWidth
            onClick={handleLogin}
            sx={{backgroundColor:'#1E7E51'}}
          >
            Login
          </Button>
        </Box>
        {/* <Typography variant="body2" sx={{ marginTop: 2 }}>
          Don't have an account?{" "}
          <a
            href="/signup"
            style={{ textDecoration: "none", color: "#1976d2" }}
          >
            Sign up
          </a>
        </Typography> */}
      </Paper>
    </Container>
  );
};

export default LoginPage;
