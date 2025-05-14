import React from "react";
import { Grid2 as Grid, Box, Typography } from "@mui/material";

const LeaveCard = ({ title, status, date, rosterIds }) => {
  // Function to decide color based on status
  const getStatusColor = (status) => {
    switch (status.toLowerCase()) {
      case "approved":
        return "var(--primaryColor)";
      case "pending":
        return "var(--secondaryColor)";
      case "rejected":
        return "#F6331A";
      default:
        return "text.primary";
    }
  };

  return (
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="space-between"
      bgcolor="#fff"
      p={2}
      borderRadius={2}
      boxShadow={1}
      marginBottom={5}
    >
      {/* Top Row: Title and Status */}
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Typography
          variant="body1"
          fontWeight="600"
          sx={{
            // textDecoration: "underline",
            textDecorationThickness: "2px",
            textUnderlineOffset: "4px",
            color: "black",
          }}
        >
          {title}
        </Typography>

        <Typography
          variant="body1"
          fontWeight="500"
          color={getStatusColor(status)}
        >
          {status}
        </Typography>
      </Box>

      {/* Date and Roster Ids */}
      <Box mt={2}>
        <Typography variant="body1" fontWeight="500" mb={0.5}>
          Date :{" "}
          <Typography component="span" color="text.secondary">
            {date}
          </Typography>
        </Typography>

        <Typography variant="body1" fontWeight="500">
          Unattended Roster Ids:{" "}
          <Typography component="span" color="text.secondary">
            {rosterIds.join(", ")}
          </Typography>
        </Typography>
      </Box>
    </Box>
  );
};

const LeaveSchedule = () => {
  const leaves = [
    {
      id: 1,
      title: "Sick Leave",
      status: "Approved",
      date: "03/02/2025",
      rosterIds: [556, 789],
    },
    {
      id: 2,
      title: "Sick Leave",
      status: "Pending",
      date: "04/02/2025",
      rosterIds: [123, 456],
    },
    {
      id: 3,
      title: "Sick Leave",
      status: "Rejected",
      date: "05/02/2025",
      rosterIds: [789, 101],
    },
    {
      id: 4,
      title: "Annual Leave",
      status: "Rejected",
      date: "05/02/2025",
      rosterIds: [789, 101],
    },
    {
      id: 5,
      title: "Annual Leave",
      status: "Approved",
      date: "05/02/2025",
      rosterIds: [789, 101],
    },
    {
      id: 6,
      title: "Sick Leave",
      status: "Approved",
      date: "05/02/2025",
      rosterIds: [789, 101],
    },
  ];

  return (
    <Grid container spacing={2} sx={{ paddingTop: "35px" }}>
      {leaves.map((leave) => (
        <Grid item xs={12} sm={6} md={4} key={leave.id}>
          <LeaveCard
            title={leave.title}
            status={leave.status}
            date={leave.date}
            rosterIds={leave.rosterIds}
          />
        </Grid>
      ))}
    </Grid>
  );
};

export default LeaveSchedule;
