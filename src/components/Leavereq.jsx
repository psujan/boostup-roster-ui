import React from "react";
import { Box, Typography, Paper, Button, TextField } from "@mui/material";

const LeaveRequest = () => {
  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h5" fontWeight="bold" mb={2}>
        Leave Request
      </Typography>

      <Paper sx={{ p: 3 }}>
        <TextField
          fullWidth
          label="Requested By"
          value="Robert Johnson"
          disabled
          sx={{ mb: 2 }}
        />

        <Box sx={{ display: "grid", gap: 2 }}>
          <Typography>
            <strong>Requested By:</strong> Robert Johnson
          </Typography>
          <Typography>
            <strong>Leave Type:</strong> Sick Leave
          </Typography>
          <Typography>
            <strong>Date:</strong> Dec 15, 2024
          </Typography>
          <Typography>
            <strong>Status:</strong>{" "}
            <span style={{ color: "green" }}>Unverified</span>
          </Typography>
        </Box>

        <Box
          sx={{
            backgroundColor: "#ffe6e6",
            color: "black",
            p: 2,
            mt: 3,
            borderRadius: 2,
            display: "flex",
            alignItems: "center",
          }}
        >
          <Typography>
            ⚠️ The request creates a roster conflict for{" "}
            <span style={{ color: "green", fontWeight: "bold" }}>
              Office Cleaning At Lakemba
            </span>{" "}
            on the date requested.
          </Typography>
        </Box>

        <Box sx={{ display: "flex", gap: 2, mt: 3 }}>
          <Button variant="contained" color="success" fullWidth>
            Approve Leave Request
          </Button>
          <Button variant="contained" color="warning" fullWidth>
            Manage Conflict
          </Button>
        </Box>
      </Paper>
    </Box>
  );
};

export default LeaveRequest;
