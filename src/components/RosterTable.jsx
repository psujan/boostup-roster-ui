import {
  Box,
  Button,
  IconButton,
  MenuItem,
  Modal,
  Select,
  Typography,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import React, { useState } from "react";
import { Grid2 } from "@mui/material";
import ArrowCircleRightIcon from "@mui/icons-material/ArrowCircleRight";
import ArrowCircleUpIcon from "@mui/icons-material/ArrowCircleUp";
import { Toys } from "@mui/icons-material";
import BackButton from "../commonComponents/BackButton";
import DateRangeSelector from "../commonComponents/DatePicker";
import ShiftModal from "./ShiftModal";
// import BackButton from "../commonComponents/BackButton";

const RosterTable = ({ addRoster }) => {
  const [open, setOpen] = useState(false);
  const [viewBy, setViewBy] = useState("employee");
  const rows = [
    {
      name: "David Jones",
      schedule: ["9 am - 5 pm", "", "", "9 am - 5 pm", "", ""],
    },
    {
      name: "Luis Rood",
      schedule: ["", "", "", "", "", "10 am - 6 pm"],
    },
    {
      name: "Mike Davis",
      schedule: ["11 am - 7 pm", "", "11 am - 7 pm", "", "11 am - 7 pm", ""],
    },
    {
      name: "Brian Horn",
      schedule: ["", "", "", "", "", ""],
    },
    {
      name: "Luis Smith",
      schedule: [
        "",
        "9 am - 5 pm + 1 more",
        "",
        "",
        "9 am - 5 pm",
        "9 am - 5 pm",
      ],
    },
    {
      name: "Mike Johnson",
      schedule: ["", "", "", "10 am - 6 pm", "Annual Leave", "Annual Leave"],
    },
    {
      name: "Jessica Brown",
      schedule: ["8 am - 4 pm", "", "8 am - 4 pm", "", "", "8 am - 4 pm"],
    },
  ];
  const shifts = [
    {
      name: "James Rodriguez",
      day: "Sun",
      date: "03 Mar",
      time: "6:00 AM - 2:00 PM",
      location: "Strata Cleaning - 2 Avona St, Glebe",
    },
  ];

  const handleViewChange = (event) => {
    setViewBy(event.target.value);
  };

  const handleTableClick = () => {
    setOpen(true);
  };
  return (
    <Grid2>
      {addRoster && (
        <div>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "flex-start",
            }}
          >
            <BackButton />
          </Box>
          <Box
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              marginBottom: "20px",
              marginTop: "-20px",
            }}
          >
            <Typography style={{ fontWeight: "500", fontSize: "20px" }}>
              Roster
            </Typography>
            <Button
              variant="contained"
              sx={{
                background: "var(--primaryColor)",
                fontSize: "16px",
                fontWeight: "600",
                textTransform: "none",
                width: "106px",
              }}
            >
              <AddIcon sx={{ marginRight: "10px" }} /> Add
            </Button>
          </Box>
        </div>
      )}

      <Box
        style={{
          height: "675px",
          borderRadius: "8px",
          backgroundColor: "white",
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            padding: "12px 20px",
            borderBottom: "1px solid #ddd",
            backgroundColor: "--greyColor",
          }}
        >
          {/* Left: Title */}
          <Typography
            sx={{ fontSize: "20px", fontWeight: "500", marginRight: "20px" }}
          >
            Roster Plan
          </Typography>

          {/* Center: Dropdown and Date */}
          <Box
            sx={{ display: "flex", alignItems: "center", gap: 1, flexGrow: 1 }}
          >
            <Select
              defaultValue="This Week"
              variant="outlined"
              size="small"
              sx={{
                color: "#666666",
                fontSize: "14px",
                borderRadius: "8px",
                border: "1px solid lightgrey",
                // backgroundColor: "#f5f5f5",
                "& .MuiOutlinedInput-notchedOutline": { border: "none" },
              }}
            >
              <MenuItem value="This Week">This Week</MenuItem>
              <MenuItem value="Next Week">Next Week</MenuItem>
            </Select>
          </Box>

          {/* Right: Three-dot Menu Icon */}
          <IconButton>
            <MoreVertIcon />
          </IconButton>
        </Box>
        <br />
        <ArrowCircleUpIcon
          sx={{ marginLeft: "95%", transform: "rotate(90deg)", color: "green" }}
        />
        <table
          className="roster-table"
          style={{ width: "90%", margin: "0 20px" }}
        >
          <thead>
            <tr>
              <th style={{ borderRadius: "5px 0 0 0" }}>
                <Select
                  value={viewBy}
                  onChange={handleViewChange}
                  size="small"
                  sx={{
                    borderRadius: "5px",
                    minWidth: "150px",
                    padding: "5px 12px",
                    border: "1px solid #d7d7d7",
                    "&:hover": {
                      border: "1px solid var(--primaryColor)",
                      backgroundColor: "#f0f0f0",
                      cursor: "pointer",
                      transition: "0.2s ease",
                    },
                  }}
                >
                  <MenuItem value="employee">View by Employee</MenuItem>
                  <MenuItem value="job">View by Job</MenuItem>
                </Select>
              </th>
              <th>Sun</th>
              <th>Mon</th>
              <th>Tue</th>
              <th>Wed</th>
              <th>Thu</th>
              <th>Fri</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row, index) => (
              <tr key={index}>
                <td>{row.name}</td>
                {row.schedule.map((time, idx) => (
                  <td
                    key={idx}
                    className={time === "Annual Leave" ? "off-schedule" : ""}
                    onClick={() => handleTableClick()}
                  >
                    {time}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
        <ShiftModal open={open} setOpen={setOpen} shifts={shifts} />
      </Box>
    </Grid2>
  );
};

export default RosterTable;
