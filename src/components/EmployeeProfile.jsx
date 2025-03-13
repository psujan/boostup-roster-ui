import React from "react";
import {
  Card,
  CardContent,
  Typography,
  Button,
  Avatar,
  Stack,
  Box,
  TextField,
} from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import BackButton from "../commonComponents/BackButton";
import "../index.css";
import ECard from "./ECard";

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
          width : '80%'
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
           <Typography sx={{fontSize : "16px", textTransform : "none"}}>+ Add</Typography>
        </Button>
      </Box>
      <Box sx={{height : '916px', width : '916px' ,borderRadius: '8px', backgroundColor : 'white', padding : '40px 40px'}}>
      <TextField 
  id="outlined-basic" 
  label="Search..." 
  variant="outlined" 
  sx={{ width: "200px" }}
  inputProps={{ style: { height: "15px", padding: "10px" } }} 
/>
      <ECard/>
     

      </Box>
    </>
  );
};

export default EmployeeProfile;
