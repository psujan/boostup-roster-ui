import {
  Avatar,
  Box,
  Button,
  CardContent,
  IconButton,
  Stack,
  Typography,
} from "@mui/material";
import Tooltip, { tooltipClasses } from "@mui/material/Tooltip";
import { styled } from "@mui/material/styles";
import { useNavigate } from "react-router-dom";
import React, { useEffect, useState } from "react";
import AvailabilityModal from "./features/AvailabilityModal";
import EventAvailableOutlinedIcon from "@mui/icons-material/EventAvailableOutlined";

const ECard = ({ emp }) => {
  const [showAvailability, setShowAvailability] = useState(false);
  const navigate = useNavigate();

  const HtmlTooltip = styled(({ className, ...props }) => (
    <Tooltip {...props} classes={{ popper: className }} />
  ))(({ theme }) => ({
    [`& .${tooltipClasses.tooltip}`]: {
      backgroundColor: "#000",
      color: "#fff",
      maxWidth: 270,
      fontSize: theme.typography.pxToRem(12),
      border: "1px solid transparent",
      borderRadius: "6px",
    },
  }));

  const transformAvailability = (rows) => {
    if (!rows || !rows.length) return null;

    // Filter out null entries and create a map of days
    const dayMap = {};

    // Sort days in week order
    const dayOrder = {
      Sun: 0,
      Mon: 1,
      Tue: 2,
      Wed: 3,
      Thu: 4,
      Fri: 5,
      Sat: 6,
    };

    // Process the availability data
    rows.forEach((item) => {
      if (!item) return; // Skip null entries

      const { day, from, to, forFullDay } = item;

      if (!dayMap[day]) {
        dayMap[day] = {
          day,
          data: [],
        };
      }

      // Handle full day availability differently if needed
      if (forFullDay) {
        dayMap[day].fullDay = true;
      } else if (from.trim() && to.trim()) {
        // Only add time slots that have valid from/to values
        dayMap[day].data.push({
          from,
          to,
          id: item.id, // Keep the id for reference
        });
      }
    });

    // Convert the map to array and sort by day of week
    return Object.values(dayMap).sort((a, b) => {
      return dayOrder[a.day] - dayOrder[b.day];
    });
  };

  const AvailabilityList = () => {
    const availabilities = transformAvailability(emp.availabilities);
    return availabilities.map((row, i) => (
      <Box key={i} sx={{ fontSize: "10px", marginBottom: "3px" }}>
        {row.day}:{" "}
        {row.fullDay
          ? "Full Day ✅"
          : row.data.map(
              (x, i) =>
                x.from + "-" + x.to + (row.data.length != i + 1 ? " | " : "")
            )}
      </Box>
    ));
  };

  useEffect(() => {
    const a = transformAvailability(emp.availabilities);
    console.log(a);
  }, [emp]);

  return (
    <div>
      <Box
        className="employee-box"
        sx={{
          width: "100%",
          textAlign: "center",
          p: 2,
          minHeight: "300px",
          borderRadius: "8px",
          // boxShadow: 3,
          backgroundColor: "#FCFBFB",
          border: "none",
          position: "relative",
        }}
      >
        <HtmlTooltip
          title={
            <React.Fragment>
              <Box>
                <AvailabilityList />
              </Box>
            </React.Fragment>
          }
        >
          <IconButton
            color="#666"
            size="small"
            className="emp-availability-btn"
          >
            <EventAvailableOutlinedIcon />
          </IconButton>
        </HtmlTooltip>

        <Avatar
          src="./src/assets/images/default_user.jpg"
          alt="James Wilson"
          sx={{ width: 140, height: 140, margin: "auto", mb: 2 }}
        />
        <CardContent>
          <div style={{ minHeight: "120px" }}>
            <Typography sx={{ fontFamily: "Inter", fontWeight: "500", mb: 1 }}>
              {emp?.user?.fullName}
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
              {emp?.user?.email}
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
              {emp?.contact || "Contact : N/A"}
            </Typography>
          </div>
          <Stack
            direction="row"
            spacing={2}
            sx={{ width: "100%" }}
            justifyContent="center"
          >
            <Button
              variant="contained"
              sx={{
                background: "var(--primaryColor)",
                fontSize: "13px",
                fontWeight: "500",
                textTransform: "none",
                boxShadow: "none",
              }}
              onClick={() => navigate("/roster/add?employeeId=" + emp.id)}
            >
              Add Roster
            </Button>
            <Button
              variant="contained"
              sx={{
                background: "var(--secondaryColor)",
                color: "rgba(0, 0, 0, 0.6)",
                fontSize: "13px",
                fontWeight: "500",
                textTransform: "none",
                boxShadow: "none",
              }}
              onClick={() => navigate(`/employee/${emp.id}`)}
            >
              View Profile
            </Button>
          </Stack>
        </CardContent>
      </Box>
      <AvailabilityModal
        open={showAvailability}
        setOpen={(s) => setShowAvailability(s)}
      />
    </div>
  );
};

export default ECard;
