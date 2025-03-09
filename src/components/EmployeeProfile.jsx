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

const EmployeeProfile = () => {
  return (
    <>
      <Box style={{display: "flex",
          justifyContent: 'flex-start',
          alignItems: "center",
          marginTop: '20px'}}>
        <ArrowBackIcon />
        <Typography  >Back</Typography>
      </Box>
      <Box
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Typography style={{fontSize : '20px', fontWeight: 'bold', margin : '30px 0px'}}>Employee</Typography>
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
            <Button variant="contained" color="success">
              Plan Schedule
            </Button>
            <Button variant="contained" color="warning">
              View Profile
            </Button>
          </Stack>
        </CardContent>
      </Card>
      
    </>
  );
};

export default EmployeeProfile;
