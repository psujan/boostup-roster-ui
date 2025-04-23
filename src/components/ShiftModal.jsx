import {
  Modal,
  Box,
  Button,
  Typography,
  Stack,
  CardContent,
  Container,
} from "@mui/material";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import SwapHorizIcon from "@mui/icons-material/SwapHoriz";
import DeleteIcon from "@mui/icons-material/Delete";

const ShiftModal = ({ open, setOpen, shifts }) => {
  return (
    <Modal
      open={open}
      onClose={() => setOpen(false)}
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "200px 0px",
      }}
    >
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          bgcolor: "background.paper",
          boxShadow: 24,
          borderRadius: 2,
          width: 500,
          p: 2,
          border: "3px solid #747e79",
          outline: "none",
        }}
      >
        {shifts?.map((shift, index) => (
          <Box key={index}>
            <h3>{shift.name} Shifts</h3>

            <CardContent
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                padding: "10px 15px",
                width: "100%",
                mb: 2,
                backgroundColor: "#f8f8f8",
                borderRadius: 2,
                p: 2,
                boxShadow: 2,
              }}
            >
              <Box sx={{ textAlign: "center" }}>
                <Typography variant="body2" sx={{ fontWeight: 500 }}>
                  {shift.day}
                </Typography>
                <Typography variant="h6" sx={{ fontWeight: 500 }}>
                  {shift.date}
                </Typography>
              </Box>
              <Box>
                <Typography variant="body1" sx={{ fontWeight: 500 }}>
                  {shift.time}
                </Typography>
                <Box sx={{ display: "flex", alignItems: "center", mt: 1 }}>
                  <LocationOnIcon sx={{ fontSize: 18, color: "gray", mr: 1 }} />
                  <Typography
                    variant="caption"
                    color="text.secondary"
                    sx={{ wordWrap: "break-word" }}
                  >
                    {shift.location}
                  </Typography>
                </Box>
              </Box>
            </CardContent>
          </Box>
        ))}

        <Stack
          direction="row"
          spacing={2}
          justifyContent="space-between"
          mt={2}
        >
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
      </Box>
    </Modal>
  );
};

export default ShiftModal;
