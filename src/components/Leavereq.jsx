import React from "react";
import { Box, Typography, Paper, Button, TextField } from "@mui/material";
import BackButton from "./common/BackButton";
import ErrorIcon from "@mui/icons-material/Error";

const LeaveRequest = () => {
  return (
    <Box>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "flex-start",
        }}
      >
        <BackButton />
        {/* <Typography sx={{ ml: 1, mt: 1.5 }}>Back</Typography> */}
      </Box>
      <Typography
        variant="h6"
        fontWeight="500"
        sx={{ marginTop: "-15px", marginBottom: "25px" }}
      >
        Leave Request
      </Typography>

      <Box sx={{ borderRadius: "8px", border: "none", height: "968px", backgroundColor:'white' }}>
        <TextField
          //   label="Requested By"
          size="small"
          value="Robert Johnson"
          disabled
          sx={{ margin: "30px 30px" }}
        />
        <Box
          sx={{ margin: "0 30px", height: "776px", backgroundColor: "#FBFBFB" }}
        >
          <Box>
            <Box
              sx={{
                padding: "50px",
                display: "grid",
                gridTemplateColumns: "auto 1fr",
                rowGap: 1.5, // Adds space between rows
                columnGap: 25, // Adds space between columns
                //   border: "1px solid red",
                margin: "0 30px",
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
                margin: "30px 80px",
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

            <Box sx={{ display: "flex", gap: 3, margin: "10px 80px" }}>
              <Button sx={{ backgroundColor: "#1E7E51", width: "244px" }}>
                <Typography sx={{ color: "white", textTransform: "none" }}>
                  Approve Leave Request
                </Typography>
              </Button>
              <Button sx={{ backgroundColor: "#F3CB5F", width: "244px" }}>
                <Typography sx={{ color: "black", textTransform: "none" }}>
                  {" "}
                  Manage Conflict
                </Typography>
              </Button>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default LeaveRequest;
