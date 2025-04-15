import {
  Avatar,
  Box,
  Button,
  Card,
  CardContent,
  Stack,
  Typography,
} from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";

const ECard = ({ emp }) => {
  const navigate = useNavigate();
  return (
    <div>
      <Box
        sx={{
          width: "100%",
          textAlign: "center",
          p: 2,
          borderRadius: "6px",
          // boxShadow: 3,
          backgroundColor: "#FCFBFB",
          border: "none",
        }}
      >
        <Avatar
          src="./src/assets/images/1.png"
          alt="James Wilson"
          sx={{ width: 80, height: 80, margin: "auto", mb: 2 }}
        />
        <CardContent>
          <Typography sx={{ fontFamily: "Inter", fontWeight: "500" }}>
            {emp?.user?.fullName}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {emp?.user?.email}
          </Typography>
          <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
            {emp?.contact}
          </Typography>
          <Stack
            direction="row"
            spacing={2}
            sx={{ width: "100%" }}
            justifyContent="center"
          >
            <Button
              variant="contained"
              sx={{
                background: "var(--primaryColor)",
                fontSize: "12px",
                fontWeight: "500",
                textTransform: "none",
                boxShadow: "none",
              }}
            >
              Plan Schedule
            </Button>
            <Button
              variant="contained"
              sx={{
                background: "var(--secondaryColor)",
                color: "rgba(0, 0, 0, 0.6)",
                fontSize: "12px",
                fontWeight: "500",
                textTransform: "none",
                boxShadow: "none",
              }}
              onClick={() => navigate(`/employee/${emp.id}`)}
            >
              View Profile
            </Button>
          </Stack>
        </CardContent>
      </Box>
    </div>
  );
};

export default ECard;
