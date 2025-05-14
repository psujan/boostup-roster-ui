import { Box, Typography, IconButton } from "@mui/material";
import VisibilityIcon from "@mui/icons-material/Visibility";
import dayjs from "dayjs";

const GeneralDetails = ({ employee }) => {
  const DetailRow = ({ label, value, showIcon }) => (
    <Box display="flex" justifyContent="space-between" alignItems="center">
      <Typography
        fontWeight={400}
        fontSize={14}
        sx={{ margin: "8px 0" }}
        color="#666"
      >
        {label}
      </Typography>
      <Box display="flex" alignItems="center">
        <Typography fontWeight={400} fontSize={14}>
          {value || "N/A"}
        </Typography>
        {showIcon && (
          <IconButton size="small" sx={{ ml: 1, color: "text.secondary" }}>
            <VisibilityIcon fontSize="small" />
          </IconButton>
        )}
      </Box>
    </Box>
  );

  return (
    <Box bgcolor="#fafafa" p={4} borderRadius={2}>
      <h5
        className="heading-5"
        style={{ marginBottom: "16px", fontSize: "15px" }}
      >
        General Details
      </h5>

      <DetailRow label="Address" value={employee?.address} />
      <DetailRow label="Gender" value={employee?.gender} />
      <DetailRow label="Contact" value={employee?.contact} />
      <DetailRow label="Date of Birth" value={employee?.address} />
      <DetailRow
        label="Emergency Contact Name"
        value={employee?.emergencyContactName}
      />
      <DetailRow
        label="Joined Date"
        value={dayjs(employee?.joinedDate).format("YYYY-MM-DD")}
      />
      <DetailRow label="Birth Country" value={employee?.birthCountry} />
      <DetailRow label="Employment Type" value={employee?.employmentType} />
      <DetailRow label="Status" value={employee?.status} />
    </Box>
  );
};

export default GeneralDetails;
