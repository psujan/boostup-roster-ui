import React from "react";
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button, IconButton, Box, Typography } from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import AddIcon from "@mui/icons-material/Add";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
// import AddIcon from '@mui/icons-material/Add';
import BackButton from "../commonComponents/BackButton";

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
    <Box >
    <Box sx={{display:'flex', alignItems : 'center', justifyContent:'flex-start'}}>
<BackButton />
{/* <Typography sx={{ ml: 1, mt: 1.5 }}>Back</Typography> */}
 </Box>
    <Box style={{display:'flex', justifyContent : 'space-between', alignItems :'center', marginBottom: '15px', marginTop: "-20px"}}>
      <Typography style ={{fontWeight : '500', fontSize : '20px'}}>Jobs</Typography>
  <Button
            variant="contained"
            sx={{
              background: "var(--primaryColor)",
              fontSize: "16px",
              fontWeight: "600",
              width :'106px',
              height : '40px',
              textTransform:'none'


            }}
          >
            <AddIcon sx={{marginRight : '10px'}}/> Add
          </Button>
          </Box>
          
      <Box display="flex" justifyContent="flex-end" sx={{ mb: 1 }}>
      
      </Box>
      <Box sx={{ padding : '50px 15px', borderRadius:'8px', backgroundColor:'white',  height : '659px' }}>
      

<TableContainer component={Paper} sx={{margin : '0 15px', paddingRight : '10px'}}>
  <Table>
    <TableHead>
      <TableRow sx={{ backgroundColor: "lightgrey", height: "30px" }}> 
        <TableCell sx={{ border: "1px solid lightgrey", padding: "15px 10px", textAlign: "center" }}># Event Id</TableCell>
        <TableCell sx={{ border: "1px solid lightgrey", padding: "15px 10px", textAlign: "center" }}>Title</TableCell>
        <TableCell sx={{ border: "1px solid lightgrey", padding: "15px 10px", textAlign: "center" }}>Status</TableCell>
        <TableCell sx={{ border: "1px solid lightgrey", padding: "15px 10px", textAlign: "center" }}>Roster Plan</TableCell>
        <TableCell sx={{ border: "1px solid lightgrey", padding: "15px 10px", textAlign: "center" }}>Actions</TableCell>
      </TableRow>
    </TableHead>
    <TableBody>
      {eventsData.map((event) => (
        <TableRow key={event.id} sx={{ height: "30px" }}> 
          <TableCell sx={{ border: "1px solid lightgrey", padding: "15px 8px", textAlign: "center" }}>{event.id}</TableCell>
          <TableCell sx={{ border: "1px solid lightgrey", padding: "15px 8px", textAlign: "center" }}>{event.title}</TableCell>
          <TableCell sx={{ color: event.status === "Active" ? "green" : "red", border: "1px solid lightgrey", padding: "4px 8px", textAlign: "center" }}>
            {event.status}
          </TableCell>
          <TableCell sx={{ color: event.rosterPlan.includes("Unscheduled") ? "red" : "green", border: "1px solid lightgrey", padding: "4px 8px", textAlign: "center" }}>
            {event.rosterPlan}
          </TableCell>
          <TableCell sx={{ border: "1px solid lightgrey", padding: "4px 8px", textAlign: "center" }}>
            <IconButton size="small"> 
              <MoreVertIcon fontSize="small" /> 
            </IconButton>
          </TableCell>
        </TableRow>
      ))}
    </TableBody>
  </Table>
</TableContainer>



      </Box>
    </Box>
  );
};

export default EventsTable;