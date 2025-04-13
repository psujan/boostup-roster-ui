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
    <Box
      bgcolor="#fafafa"
      p={4}
      borderRadius={2}
      maxWidth="80%"
      mx="auto"
      my={4}
    >
      <Typography variant="h6" mb={3}>
        Other Details
      </Typography>

      <DetailRow
        label="Claim Tax Free Threshold"
        value={employee?.taxFreeThreshold}
      />
      <DetailRow label="Employment Type" value={employee?.employmentType} />
      <DetailRow label="Roster Event" value={employee?.rosterEvent} />
      <DetailRow label="Birth Country" value={employee?.birthCountry} />
      <DetailRow
        label="Prev Year Leave Days"
        value={employee?.previousYearLeaveDays}
      />
    </Box>
  );
};

export default OtherDetails;
