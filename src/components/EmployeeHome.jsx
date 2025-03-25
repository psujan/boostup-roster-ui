import React from "react";
import {
  Container,
  Typography,
  Button,
  Card,
  CardContent,
  Grid,
  Box,
  Divider,
  IconButton,
  Stack,
} from "@mui/material";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";

const shifts = [
  {
    day: "Sun",
    date: "03",
    time: "6:00 AM - 2:00 PM",
    location: "Strata Cleaning - 2 Avona St, Glebe",
  },
  {
    day: "Tue",
    date: "05",
    time: "3:00 PM - 6:00 PM",
    location: "Office Cleaning - 11 Monley St, Lakemba",
  },
  {
    day: "Fri",
    date: "07",
    time: "6:00 AM - 2:00 PM",
    location: "Strata Cleaning - 2 Avona St, Glebe",
  },
];

const EmployeeHome = () => {
  return (
    <Container maxWidth="sm" sx={{ py: 3 , backgroundColor : 'white'}}>
      {/* Greeting */}
      <Typography variant="h6" sx={{ mb: 2 }}>
        Good Morning <span style={{ color: "green" }}>Jonathan</span>!
      </Typography>
      <Typography variant="body2" sx={{ mb: 2 }}>
        Working Hrs : 8hrs 2 min
      </Typography>

      {/* Clock In / Clock Out */}
      <Grid container spacing={2} sx={{ mb: 3 }}>
        <Grid item xs={6}>
          <Button
            variant="contained"
            sx={{
              py: 1.5,
              textTransform: "none",
              width: "150px",
              height: "38px",
              backgroundColor: "#1E7E51",
              borderRadius: "8px",
            }}
          >
            Clock In
          </Button>
        </Grid>
        <Grid item xs={6}>
          <Button
            variant="outlined"
            sx={{
              py: 1.5,
              textTransform: "none",
              borderColor: "#d3d3d3",
              color: "#333",
              width: "150px",
              height: "38px",
              borderRadius: "8px",
              backgroundColor: "#F3CB5F",
              border: "1px solid lightgrey",
            }}
          >
            Clock Out
          </Button>
        </Grid>
      </Grid>

      {/* Weekly Summary */}
      <Box sx={{ mb: 3, p: 2, backgroundColor: "#f8f8f8", mt: 10, border :'0px solid red' }}>
        <Typography variant="body1" sx={{ fontWeight: 500 }}>
          This Week (01 Jan - 07 Jan)
        </Typography>
        <Divider sx={{ my: 1 }} />
        <Grid container>
          <Grid item xs={6} sx={{ textAlign: "center" }}>
            <Typography variant="body2" color="text.secondary">
              No Of Shift
            </Typography>
            <Typography variant="h6" sx={{ fontWeight: 500 }}>
              3
            </Typography>
          </Grid>
          <Divider orientation="vertical" flexItem />
          <Grid item xs={5} sx={{ textAlign: "center" }}>
            <Typography variant="body2" color="text.secondary">
              Worked Hours
            </Typography>
            <Typography variant="h6" sx={{ fontWeight: 500 }}>
              48
            </Typography>
          </Grid>
        </Grid>
      </Box>

      {/* My Shifts Section */}

      <Stack
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        mb={2}
      >
        <Typography variant="h6" sx={{ fontWeight: 500 }}>
          My Shifts
        </Typography>
        <Typography variant="body2" color="text.secondary">
          01 Jan - 07 Jan
        </Typography>
      </Stack>


      {/* Shift List - Perfectly Matched UI */}
      {shifts.map((shift, index) => (
        <Box
          key={index}
          sx={{ mb: 2, backgroundColor: "#f8f8f8", borderRadius: 2, p: 1 }}
        >
          <CardContent
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              padding: "10px 15px",
            }}
          >
            {/* Left Section - Date */}
            <Box sx={{ minWidth: "60px", textAlign: "center" }}>
              <Typography variant="body2" sx={{ fontWeight: 500 }}>
                {shift.day}
              </Typography>
              <Typography variant="h6" sx={{ fontWeight: 500 }}>
                {shift.date}
              </Typography>
            </Box>

            {/* Middle Section - Time & Location */}
            <Box>
              <Typography variant="body1" sx={{ fontWeight: 500 }}>
                {shift.time}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {shift.location}
              </Typography>
            </Box>
          

            {/* Right Section - Arrow Icon */}
            <IconButton color="success">
              <ArrowOutwardIcon />
            </IconButton>
          </CardContent>
        
        </Box>
     
       
      ))}
    </Container>
  );
};

export default EmployeeHome;
