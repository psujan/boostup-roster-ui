import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  IconButton,
  Box,
} from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import ModeEditOutlineIcon from "@mui/icons-material/ModeEditOutline";
import { useNavigate } from "react-router-dom";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
const eventsData = [
  {
    id: 1,
    title: "Bar Cleaning",
    status: "Active",
    rosterPlan: "Scheduled : 4 Member",
  },
  {
    id: 2,
    title: "Office Cleaning : Campsie",
    status: "Inactive",
    rosterPlan: "Unscheduled",
  },
  {
    id: 3,
    title: "Office Cleaning : Paramatta",
    status: "Inactive",
    rosterPlan: "Scheduled : 1 Member",
  },
  {
    id: 4,
    title: "House Cleaning : Hornsby",
    status: "Active",
    rosterPlan: "Scheduled : 1 Member",
  },
  {
    id: 5,
    title: "Office Cleaning : Campsie",
    status: "Inactive",
    rosterPlan: "Unscheduled",
  },
  {
    id: 6,
    title: "Office Cleaning : Paramatta",
    status: "Inactive",
    rosterPlan: "Scheduled : 1 Member",
  },
  {
    id: 7,
    title: "House Cleaning : Hornsby",
    status: "Active",
    rosterPlan: "Scheduled : 1 Member",
  },
];

const JobTable = () => {
  const navigate = useNavigate();
  return (
    <Box
      sx={{
        padding: "50px 15px",
        borderRadius: "8px",
        backgroundColor: "white",
        height: "659px",
      }}
    >
      <TableContainer
        component={Paper}
        sx={{ margin: "0 15px", paddingRight: "10px" }}
      >
        <Table>
          <TableHead>
            <TableRow sx={{ backgroundColor: "lightgrey", height: "30px" }}>
              <TableCell
                sx={{
                  border: "1px solid lightgrey",
                  padding: "15px 10px",
                  textAlign: "center",
                }}
              >
                # Event Id
              </TableCell>
              <TableCell
                sx={{
                  border: "1px solid lightgrey",
                  padding: "15px 10px",
                  textAlign: "center",
                }}
              >
                Title
              </TableCell>
              <TableCell
                sx={{
                  border: "1px solid lightgrey",
                  padding: "15px 10px",
                  textAlign: "center",
                }}
              >
                Status
              </TableCell>
              <TableCell
                sx={{
                  border: "1px solid lightgrey",
                  padding: "15px 10px",
                  textAlign: "center",
                }}
              >
                Roster Plan
              </TableCell>
              <TableCell
                sx={{
                  border: "1px solid lightgrey",
                  padding: "15px 10px",
                  textAlign: "center",
                }}
              >
                Actions
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {eventsData.map((event) => (
              <TableRow key={event.id} sx={{ height: "30px" }}>
                <TableCell
                  sx={{
                    border: "1px solid lightgrey",
                    padding: "15px 8px",
                    textAlign: "center",
                  }}
                >
                  {event.id}
                </TableCell>
                <TableCell
                  sx={{
                    border: "1px solid lightgrey",
                    padding: "15px 8px",
                    textAlign: "center",
                  }}
                >
                  {event.title}
                </TableCell>
                <TableCell
                  sx={{
                    color: event.status === "Active" ? "green" : "red",
                    border: "1px solid lightgrey",
                    padding: "4px 8px",
                    textAlign: "center",
                  }}
                >
                  {event.status}
                </TableCell>
                <TableCell
                  sx={{
                    color: event.rosterPlan.includes("Unscheduled")
                      ? "red"
                      : "green",
                    border: "1px solid lightgrey",
                    padding: "4px 8px",
                    textAlign: "center",
                  }}
                >
                  {event.rosterPlan}
                </TableCell>
                <TableCell
                  sx={{
                    border: "1px solid lightgrey",
                    padding: "4px 8px",
                    textAlign: "center",
                  }}
                >
                  <IconButton
                    size="small"
                    onClick={() => navigate("/admin-dashboard")}
                    sx={{ color: "var(--primaryColor)", fontSize: "14px" }}
                  >
                    <ModeEditOutlineIcon />
                    Edit
                  </IconButton>
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  <IconButton
                    size="8px"
                    onClick={() => navigate("/admin-dashboard")}
                    sx={{ color: "#FF0000", fontSize: "14px" }}
                  >
                    <DeleteForeverIcon />
                    Delete
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default JobTable;
