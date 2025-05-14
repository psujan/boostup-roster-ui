import { Box } from "@mui/material";
export default function ShiftDetails({ shift }) {
  //const navigate = useNavigate();
  return (
    <>
      <Box
        // onClick={() => navigate("/shift-detail/3")}
        sx={{
          position: "relative",
          p: 2,
          mb: 3,
          backgroundColor: "#fff",
          border: "1px solid transparent",
          borderRadius: "8px",
          fontSize: "14px",
          boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px",
        }}
      >
        <Box className="flex flex-between" sx={{ mb: 2 }}>
          <span className="text-muted">Job Title</span>
          <span>{shift?.job?.title}</span>
        </Box>
        <Box className="flex flex-between" sx={{ mb: 2 }}>
          <span className="text-muted">Address</span>
          <span>{shift?.job?.jobAddress || "N/A"}</span>
        </Box>
        <Box className="flex flex-between" sx={{ mb: 2 }}>
          <span className="text-muted">Date</span>
          <span>{shift?.date}</span>
        </Box>
        <Box className="flex flex-between" sx={{ mb: 2 }}>
          <span className="text-muted">Start Time</span>
          <span>{shift?.startTime}</span>
        </Box>
        <Box className="flex flex-between" sx={{ mb: 2 }}>
          <span className="text-muted">End Time</span>
          <span>{shift?.endTime}</span>
        </Box>
        <Box className="flex flex-between" sx={{ mb: 2 }}>
          <span className="text-muted">Work Hours</span>
          <span>{shift?.workHours} hrs</span>
        </Box>
      </Box>
      <Box>
        <h5 className="heading-5" style={{ marginBottom: "10px" }}>
          Job Notes
        </h5>
        <p>{shift?.job?.notes || "N/A"}</p>
      </Box>
    </>
  );
}
