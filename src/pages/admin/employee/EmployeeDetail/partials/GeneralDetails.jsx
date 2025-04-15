import { Box, Typography, IconButton } from "@mui/material";
import VisibilityIcon from "@mui/icons-material/Visibility";

const GeneralDetails = ({ employee }) => {
  const DetailRow = ({ label, value, showIcon }) => (
    <Box
      display="flex"
      justifyContent="space-between"
      alignItems="center"
      my={1.5}
    >
      <Typography fontWeight={500}>{label}</Typography>
      <Box display="flex" alignItems="center">
        <Typography>{value || "N/A"}</Typography>
        {showIcon && (
          <IconButton size="small" sx={{ ml: 1, color: "text.secondary" }}>
            <VisibilityIcon fontSize="small" />
          </IconButton>
        )}
      </Box>
    </Box>
  );

  return (
    <Box
      bgcolor="#fafafa"
      p={4}
      borderRadius={2}
      maxWidth="80%"
      mx="auto"
      my={4}
    >
      <Typography variant="h6" mb={3}>
        General Details
      </Typography>

      <DetailRow label="Address" value={employee?.address} />
      <DetailRow label="Emergency Contact" value={employee?.contact} />
      <DetailRow
        label="Emergency Contact"
        value={employee?.emergencyContact2}
      />
      <DetailRow label="Joined Date" value={employee?.joinedDate} />
      <DetailRow
        label="Verification Document"
        value={
          <Typography component="span" color="success.main">
            {employee?.verificationDocument || "N/A"}
          </Typography>
        }
      />
      <DetailRow
        label="TFN"
        value={employee?.tfn ? "**********" : "N/A"}
        showIcon
      />
      <DetailRow
        label="Bank Account"
        value={employee?.bankAccount ? "**********" : "N/A"}
        showIcon
      />
    </Box>
  );
};

export default GeneralDetails;
