import React from "react";
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button, IconButton, Box } from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import AddIcon from "@mui/icons-material/Add";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

const eventsData = [
  { id: 1, title: "Bar Cleaning", status: "Active", rosterPlan: "Scheduled : 4 Member" },
  { id: 2, title: "Office Cleaning : Campsie", status: "Inactive", rosterPlan: "Unscheduled" },
  { id: 3, title: "Office Cleaning : Paramatta", status: "Inactive", rosterPlan: "Scheduled : 1 Member" },
  { id: 4, title: "House Cleaning : Hornsby", status: "Active", rosterPlan: "Scheduled : 1 Member" },
  { id: 5, title: "Office Cleaning : Campsie", status: "Inactive", rosterPlan: "Unscheduled" },
  { id: 6, title: "Office Cleaning : Paramatta", status: "Inactive", rosterPlan: "Scheduled : 1 Member" },
  { id: 7, title: "House Cleaning : Hornsby", status: "Active", rosterPlan: "Scheduled : 1 Member" },
];

const EventsTable = () => {
  return (
    <Box sx={{ padding: 3 }}>
    
      <h2>Events</h2>
      <Box display="flex" justifyContent="flex-end" sx={{ mb: 2 }}>
      
      </Box>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell># Event Id</TableCell>
              <TableCell>Title</TableCell>
              <TableCell>Status</TableCell>
              <TableCell>Roster Plan</TableCell>
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {eventsData.map((event) => (
              <TableRow key={event.id}>
                <TableCell>{event.id}</TableCell>
                <TableCell>{event.title}</TableCell>
                <TableCell style={{ color: event.status === "Active" ? "green" : "red" }}>{event.status}</TableCell>
                <TableCell style={{ color: event.rosterPlan.includes("Unscheduled") ? "red" : "green" }}>{event.rosterPlan}</TableCell>
                <TableCell>
                  <IconButton>
                    <MoreVertIcon />
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

export default EventsTable;