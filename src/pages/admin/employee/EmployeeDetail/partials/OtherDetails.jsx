import { Box, Typography } from "@mui/material";

const OtherDetails = ({ employee }) => {
  const DetailRow = ({ label, value }) => (
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
        {/* {showIcon && (
          <IconButton size="small" sx={{ ml: 1, color: "text.secondary" }}>
            <VisibilityIcon fontSize="small" />
          </IconButton>
        )} */}
      </Box>
    </Box>
  );

  return (
    <Box bgcolor="#fafafa" p={4} borderRadius={2}>
      <h5
        className="heading-5"
        style={{ marginBottom: "16px", fontSize: "15px" }}
      >
        Additional Details
      </h5>
      <DetailRow label="TFN" value={employee?.tfn} />
      <DetailRow label="ABN" value={employee?.abn} />
      <DetailRow label="Bank Name" value={employee?.bankName} />
      <DetailRow
        label="Bank Account"
        value={employee?.accountNumber}
        showIcon
      />
      <DetailRow
        label="Claim Tax Free Threshold"
        value={employee?.isTaxFree ? "Yes" : "No"}
      />
      <DetailRow label="Notes" value={employee?.notes} />
    </Box>
  );
};

export default OtherDetails;
