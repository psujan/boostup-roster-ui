import React from "react";
import { Box, Typography, Paper, Button, TextField } from "@mui/material";
import BackButton from "../commonComponents/BackButton";
import ErrorIcon from "@mui/icons-material/Error";

const LeaveRequest = () => {
  return (
    <Box sx={{ p: 3 }}>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "flex-start",
        }}
      >
        <BackButton />
        <Typography sx={{ ml: 1, mt: 1.5 }}>Back</Typography>
      </Box>
      <Typography
        variant="h6"
        fontWeight="500"
        mb={2}
        style={{ padding: "15px 0" }}
      >
        Leave Request
      </Typography>

      <Paper sx={{ p: 3 }}>
        <TextField
          //   label="Requested By"
          size="small"
          value="Robert Johnson"
          disabled
          sx={{ mb: 1 }}
        />

        <Box
          sx={{
            padding: "50px",
            display: "grid",
            gridTemplateColumns: "auto 1fr",
            rowGap: 1.5, // Adds space between rows
            columnGap: 25, // Adds space between columns
          }}
        >
          <Typography sx={{ fontWeight: "500", fontSize: "14px" }}>
            Requested By:
          </Typography>
          <Typography sx={{ fontWeight: "500", fontSize: "14px" }}>
            Robert Johnson
          </Typography>

          <Typography sx={{ fontWeight: "500", fontSize: "14px" }}>
            Leave Type:
          </Typography>
          <Typography sx={{ fontWeight: "500", fontSize: "14px" }}>
            Sick Leave
          </Typography>

          <Typography sx={{ fontWeight: "500", fontSize: "14px" }}>
            Date:
          </Typography>
          <Typography sx={{ fontWeight: "500", fontSize: "14px" }}>
            Dec 15, 2024
          </Typography>

          <Typography sx={{ fontWeight: "500", fontSize: "14px" }}>
            Status:
          </Typography>
          <Typography
            sx={{ color: "green", fontWeight: "500", fontSize: "14px" }}
          >
            Unverified
          </Typography>
        </Box>

        <Box
          sx={{
            backgroundColor: "#ffe6e6",
            color: "black",
            p: 3, // Adjust padding for better spacing
            mt: 3,
            borderRadius: 2,
            display: "flex",
            alignItems: "center", // Ensures vertical centering
            justifyContent: "center", // Centers content horizontally
            gap: 2, // Adds space between icon & text
          }}
        >
          <ErrorIcon sx={{ color: "red", fontSize: 80 }} />
          <Typography textAlign="center">
            The request creates a roster conflict for{" "}
            <span style={{ color: "green", fontWeight: "bold" }}>
              Office Cleaning At Lakemba
            </span>{" "}
            on the date requested.
          </Typography>
        </Box>

        <Box sx={{ display: "flex", gap: 2, mt: 3 }}>
          <Button variant="contained" color="success">
            <Typography sx={{ color: "white" }}>
              Approve Leave Request
            </Typography>
          </Button>
          <Button variant="contained" sx={{ backgroundColor: "#F3CB5F" }}>
            <Typography sx={{ color: "black" }}> Manage Conflict</Typography>
          </Button>
        </Box>
      </Paper>
    </Box>
  );
};

export default LeaveRequest;
