import React from "react";
import {
  Container,
  Typography,
  Button,
  CardContent,
  Box,
  Stack,
} from "@mui/material";
import SwapHorizIcon from "@mui/icons-material/SwapHoriz";
import DeleteIcon from "@mui/icons-material/Delete";
import LocationOnIcon from "@mui/icons-material/LocationOn";

const shifts = [
  {
    day: "Sun",
    date: "03",
    month: "March",
    time: "6:00 AM - 2:00 PM",
    location: "Strata Cleaning - 2 Avona St, Glebe",
  },
];

const Modal = () => {
  return (
    <Container sx={{ py: 3, backgroundColor: "white", width: "350px" }}>
      {shifts.map((shift, index) => (
        <Box
          key={index}
          sx={{
            mb: 2,
            backgroundColor: "#f8f8f8",
            borderRadius: 2,
            p: 2,
            boxShadow: 2,
          }}
        >
          <CardContent
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              padding: "10px 15px",
            }}
          >
            <Box sx={{ minWidth: "60px", textAlign: "center" }}>
              <Typography variant="body2" sx={{ fontWeight: 500 }}>
                {shift.day}
              </Typography>
              <Typography variant="h6" sx={{ fontWeight: 500 }}>
                {shift.date}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {shift.month}
              </Typography>
            </Box>
            <Box>
              <Typography variant="body1" sx={{ fontWeight: 500 }}>
                {shift.time}
              </Typography>
              <Box sx={{ display: "flex", alignItems: "center", mt: 1 }}>
                <LocationOnIcon sx={{ fontSize: 18, color: "gray", mr: 1 }} />
                <Typography variant="caption" color="text.secondary" sx={{ wordWrap: 'break-word', maxWidth: '200px' }}>
                  {shift.location}
                </Typography>
              </Box>
            </Box>
          </CardContent>
        </Box>
      ))}

      <Stack direction="row" spacing={2} justifyContent="space-between" mt={2}>
        <Button
          variant="contained"
          sx={{ backgroundColor: "#1E7E51", width: "48%" }}
          startIcon={<SwapHorizIcon />}
        >
          Swap
        </Button>
        <Button
          variant="contained"
          sx={{ backgroundColor: "#F3CB5F", color: "black", width: "48%" }}
          startIcon={<DeleteIcon />}
        >
          Remove
        </Button>
      </Stack>
    </Container>
  );
};

export default Modal;
