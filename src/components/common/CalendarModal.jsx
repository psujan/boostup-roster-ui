import { Modal, Box, } from "@mui/material";
import { DateCalendar } from "@mui/x-date-pickers";

const CalendarModal = ({ open, setOpen }) => {
  const handleClose = () => setOpen(false);

  return (
    <Modal
      open={open}
      size="sm"
      onClose={handleClose}
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
      BackdropProps={{
        invisible: true, // Removes the backdrop (black background)
      }}
    >
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          bgcolor: "#fff",
          borderRadius: 3,
          border:'1px solid transparent',
          width: 480, // Increased size
          padding: 4, // More padding for better spacing
          outline: "none",
          boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px"
        }}
      >
        <DateCalendar />
      </Box>
    </Modal>
  );
};

export default CalendarModal;
