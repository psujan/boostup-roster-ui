import { Box } from "@mui/material";
import CallMadeOutlinedIcon from '@mui/icons-material/CallMadeOutlined';
export default function AssignedShifts() {
  return (
    <Box sx={{ marginTop: "40px" }}>
      <Box sx={{ mb: 2, display: "flex", justifyContent: "space-between" }}>
        <h5 className="heading-5">My Shifts</h5>
        <span className="text-muted">This Week</span>
      </Box>
      <Box
        sx={{
          position: "relative",
          p: 2,
          mb: 3,
          backgroundColor: "#fff",
          border: "1px solid #d9d9d9",
          borderRadius: "8px",
          display: "flex",
          alignItems: "flex-start",
          fontSize: "14px",
        }}
      >
        <span className="roster-detail-arrow">
            <CallMadeOutlinedIcon color="primary"/>
        </span>
        <Box>
          <p className="text-muted" style={{ marginBottom: "10px" }}>
            Sun
          </p>
          <p className="text-muted">03</p>
        </Box>
        <Box sx={{ marginLeft: "35px" }}>
          <h6
            style={{
              fontSize: "14px",
              fontWeight: "500",
              marginBottom: "14px",
            }}
          >
            6:00 AM - 10: 00 AM
          </h6>
          <p className="text-muted">Strata Cleaning</p>
        </Box>
      </Box>
      <Box
        sx={{
          p: 2,
          mb: 3,
          backgroundColor: "#fff",
          border: "1px solid #d9d9d9",
          borderRadius: "8px",
          display: "flex",
          alignItems: "flex-start",
          fontSize: "14px",
        }}
      >
        <Box>
          <p className="text-muted" style={{ marginBottom: "10px" }}>
            Sun
          </p>
          <p className="text-muted">03</p>
        </Box>
        <Box sx={{ marginLeft: "35px" }}>
          <h6
            style={{
              fontSize: "14px",
              fontWeight: "500",
              marginBottom: "14px",
            }}
          >
            6:00 AM - 10: 00 AM
          </h6>
          <p className="text-muted">Strata Cleaning</p>
        </Box>
      </Box>
    </Box>
  );
}
