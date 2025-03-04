import { Typography } from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import React from "react";
import { Grid2 } from "@mui/material";

const RosterTable = () => {
  const rows = [
    {
      name: "Employee 1",
      schedule: [
        "9 AM - 5 PM",
        "off",
        "9 AM - 5 PM",
        "9 AM - 5 PM",
        "9 AM - 5 PM",
        "9 AM - 5 PM",
        "Annual Leave",
      ],
    },
    {
      name: "Employee 2",
      schedule: [
        "10 AM - 6 PM",
        "10 AM - 6 PM",
        "Annual Leave",
        "10 AM - 6 PM",
        "10 AM - 6 PM",
        "10 AM - 6 PM",
        "Annual Leave",
      ],
    },
    {
      name: "Employee 3",
      schedule: [
        "11 AM - 7 PM",
        "11 AM - 7 PM",
        "11 AM - 7 PM",
        "Annual Leave",
        "11 AM - 7 PM",
        "11 AM - 7 PM",
        "Annual Leave",
      ],
    },
    {
      name: "Employee 4",
      schedule: [
        "Annual Leave",
        "8 AM - 4 PM",
        "8 AM - 4 PM",
        "8 AM - 4 PM",
        "Annual Leave",
        "8 AM - 4 PM",
        "8 AM - 4 PM",
      ],
    },
    {
      name: "Employee 5",
      schedule: [
        "9 AM - 5 PM",
        "9 AM - 5 PM",
        "Off",
        "Off",
        "9 AM - 5 PM",
        "9 AM - 5 PM",
        "9 AM - 5 PM",
      ],
    },
    {
      name: "Employee 6",
      schedule: [
        "Off",
        "10 AM - 6 PM",
        "10 AM - 6 PM",
        "10 AM - 6 PM",
        "Off",
        "Off",
        "10 AM - 6 PM",
      ],
    },
    {
      name: "Employee 7",
      schedule: [
        "8 AM - 4 PM",
        "8 AM - 4 PM",
        "8 AM - 4 PM",
        "Off",
        "Annual Leave",
        "8 AM - 4 PM",
        "8 AM - 4 PM",
      ],
    },
    {
      name: "Employee 8",
      schedule: [
        "9 AM - 5 PM",
        "9 AM - 5 PM",
        "9 AM - 5 PM",
        "9 AM - 5 PM",
        "Annual Leave",
        "Off",
        "9 AM - 5 PM",
      ],
    },
  ];

  return (
    <Grid2>
      <div className="roster-container">
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <h1>Roster Plan</h1>
          <Typography
            style={{
              border: "1px solid black",
              borderRadius: "5px",
              padding: "5px",
              borderColor: "grey",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            This Week <ExpandMoreIcon />
          </Typography>
          <Typography>Dec1-Dec7</Typography>
          <MoreVertIcon />
        </div>

        <hr />
        <table className="roster-table">
          <thead>
            <tr>
              <th>View by Employees</th>
              <th>Sun</th>
              <th>Mon</th>
              <th>Tue</th>
              <th>Wed</th>
              <th>Thu</th>
              <th>Fri</th>
              <th>Sat</th>
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
      </div>
    </Grid2>
  );
};

export default RosterTable;
