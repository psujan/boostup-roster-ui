import {
  Box,
  Button,
  IconButton,
  MenuItem,
  Select,
  Typography,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import React from "react";
import { Grid2 } from "@mui/material";
import ArrowCircleRightIcon from "@mui/icons-material/ArrowCircleRight";
import ArrowCircleUpIcon from "@mui/icons-material/ArrowCircleUp";
import { Toys } from "@mui/icons-material";
import BackButton from "../commonComponents/BackButton";
import DateRangeSelector from "../commonComponents/DatePicker";
// import BackButton from "../commonComponents/BackButton";

const RosterTable = ({ addRoster }) => {
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
      schedule: ["", "9 am - 5 pm", "", "", "9 am - 5 pm", "9 am - 5 pm"],
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
                   marginBottom : '20px',
                   marginTop: '-20px'
            }}
          >
            <Typography style={{ fontWeight: "500", fontSize: "20px" , }}>
              Roster
            </Typography>
            <Button
              variant="contained"
              sx={{
                background: "var(--primaryColor)",
                fontSize: "16px",
                fontWeight: "600",
                textTransform : 'none',
                width : '106px'
              }}
            >
              <AddIcon sx={{ marginRight: "10px" }} /> Add
            </Button>
          </Box>
        </div>
      )}
      {/* <Box
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
          }}
        >
          <AddIcon sx={{ marginRight: "10px" }} /> Add
        </Button>
      </Box> */}

      <Box  style={{ height: "675px", borderRadius : '8px', backgroundColor : 'white' }}>
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
            {/* <Typography sx={{ color: "grey", fontSize: "14px" }}>
              Dec 1 - Dec 7
            </Typography> */}
            <DateRangeSelector />
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
              <th style={{ borderRadius: "5px 0 0 0" }}>View by Employee</th>
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
                  >
                    {time}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </Box>
    </Grid2>
  );
};

export default RosterTable;
