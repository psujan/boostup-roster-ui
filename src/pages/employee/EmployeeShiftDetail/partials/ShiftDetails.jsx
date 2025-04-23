import { Box } from "@mui/material";
export default function ShiftDetails() {
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
          boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px"
        }}
      >
        <Box className="flex flex-between" sx={{ mb: 2 }}>
          <span className="text-muted">Job Title</span>
          <span>Strata cleaning</span>
        </Box>
        <Box className="flex flex-between" sx={{ mb: 2 }}>
          <span className="text-muted">Address</span>
          <span>Unit 2-24, Mooney Street , South Strathfield</span>
        </Box>
        <Box className="flex flex-between" sx={{ mb: 2 }}>
          <span className="text-muted">Date</span>
          <span>2025-03-04</span>
        </Box>
        <Box className="flex flex-between" sx={{ mb: 2 }}>
          <span className="text-muted">Start Time</span>
          <span>7: 00 AM</span>
        </Box>
        <Box className="flex flex-between" sx={{ mb: 2 }}>
          <span className="text-muted">End Time</span>
          <span>2: 00 PM</span>
        </Box>
        <Box className="flex flex-between" sx={{ mb: 2 }}>
          <span className="text-muted">Work Hours</span>
          <span>7 hrs</span>
        </Box>
      </Box>
      <Box>
        <h5 className="heading-5" style={{ marginBottom: "10px" }}>
          Job Notes
        </h5>
        <p>Cleaning Equipments on Site</p>
      </Box>
    </>
  );
}
