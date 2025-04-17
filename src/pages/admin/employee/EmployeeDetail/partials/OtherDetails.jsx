import { Box, Typography } from "@mui/material";

const OtherDetails = ({ employee }) => {
  const DetailRow = ({ label, value }) => (
    <Box
      display="flex"
      justifyContent="space-between"
      alignItems="center"
      my={1.5}
    >
      <Typography fontWeight={500}>{label}</Typography>
      <Typography>{value || "N/A"}</Typography>
    </Box>
  );

  return (
    <Box bgcolor="#fafafa" p={4} borderRadius={2}>
      <Typography variant="h6" mb={3}>
        Other Details
      </Typography>
      <DetailRow
        label="TFN"
        value={employee?.tfn ? "**********" : "N/A"}
        showIcon
      />
      <DetailRow
        label="ABN"
        value={employee?.abn ? "**********" : "N/A"}
        showIcon
      />
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
      <DetailRow label="Employee Type" value={employee?.employmentType} />
      <DetailRow label="Status" value={employee?.Status} />
      <DetailRow label="Notes" value={employee?.notes} />
    </Box>
  );
};

export default OtherDetails;
