import React from "react";
import {
  Card,
  CardContent,
  Typography,
  Button,
  Avatar,
  Stack,
  Box,
} from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import BackButton from "../commonComponents/BackButton";
import "../index.css";

const EmployeeProfile = () => {
  return (
    <>
      <Box
        style={{
          display: "flex",
          justifyContent: "flex-start",
          alignItems: "center",
          marginTop: "20px",
        }}
      >
        <BackButton />
        {/* <Typography  >Back</Typography> */}
      </Box>
      <Box
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Typography
          style={{ fontSize: "20px", fontWeight: "bold", margin: "30px 0px" }}
        >
          Employee
        </Typography>
        <Button
          variant="contained"
          sx={{
            background: "var(--primaryColor)",
            fontSize: "16px",
            fontWeight: "600",
          }}
        >
          Add
        </Button>
      </Box>
      <Card
        sx={{
          maxWidth: 300,
          textAlign: "center",
          p: 2,
          borderRadius: "10px",
          boxShadow: 3,
        }}
      >
        <Avatar
          src="https://via.placeholder.com/150"
          alt="James Wilson"
          sx={{ width: 80, height: 80, margin: "auto", mb: 2 }}
        />
        <CardContent>
          <Typography variant="h6" fontWeight="bold">
            James Wilson
          </Typography>
          <Typography variant="body2" color="text.secondary">
            jameswilsom@gmail.com
          </Typography>
          <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
            +61 417 456 789
          </Typography>
          <Stack direction="row" spacing={2} justifyContent="center">
            <Button
              variant="contained"
              sx={{
                backgroundColor: "var(--primaryColor)",
                width: "105px",
                height: "35px",
                padding: "10px",
              }}
            >
              <Typography
                sx={{
                  fontSize: "12px",
                  fontWeight: "500",
                  textTransform: "none",
                }}
              >
                Plan Schedule
              </Typography>
            </Button>
            <Button
              variant="contained"
              sx={{
                backgroundColor: "var(--secondaryColor)",
                color: "black",
                width: "105px",
                height: "35px",
              }}
            >
              <Typography
                sx={{
                  fontSize: "12px",
                  fontWeight: "500",
                  textTransform: "none",
                }}
              >
                View Profile
              </Typography>
            </Button>
          </Stack>
        </CardContent>
      </Card>
    </>
  );
};

export default EmployeeProfile;
