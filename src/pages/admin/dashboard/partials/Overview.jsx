import { Box } from "@mui/material";
import Grid from "@mui/material/Grid2";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import UpdateOutlinedIcon from "@mui/icons-material/UpdateOutlined";
import ChecklistOutlinedIcon from "@mui/icons-material/ChecklistOutlined";
import WorkspacesOutlinedIcon from "@mui/icons-material/WorkspacesOutlined";
import Heading from "../../../../components/common/Heading";

export default function Overview() {
  return (
    <Box>
      <Heading title="Overview"></Heading>
      <Grid container spacing={4} className="grid-overview">
        <Grid item xs={12} sm={12} md={4} className="overview-item">
          <div className="flex flex-column">
            <span className="icon">
              <PersonOutlineIcon sx={{ fontSize: "42px" }} />
            </span>
            <h2 className="count-highlight">43</h2>
          </div>
          <div className="flex flex-between flex-center">
            <h6 className="text-muted">Total Employee</h6>
          </div>
        </Grid>
        <Grid item xs={12} sm={12} md={4} className="overview-item">
          <div className="flex flex-column">
            <span className="icon">
              <ChecklistOutlinedIcon sx={{ fontSize: "42px" }} />
            </span>
            <h2 className="count-highlight">43</h2>
          </div>
          <div className="flex flex-between flex-center">
            <h6 className="text-muted">Assigned Shifts - 2024</h6>
          </div>
        </Grid>
        <Grid item xs={12} sm={12} md={4} className="overview-item">
          <div className="flex flex-column">
            <span className="icon">
              <UpdateOutlinedIcon sx={{ fontSize: "42px" }} />
            </span>
            <h2 className="count-highlight">953</h2>
          </div>
          <div className="flex flex-between flex-center">
            <h6 className="text-muted">Hours Worked - 2024</h6>
          </div>
        </Grid>
        <Grid item xs={12} sm={12} md={4} className="overview-item">
          <div className="flex flex-column">
            <span className="icon">
              <WorkspacesOutlinedIcon sx={{ fontSize: "42px" }} />
            </span>
            <h2 className="count-highlight">6</h2>
          </div>
          <div className="flex flex-between flex-center">
            <h6 className="text-muted">Active Clock Ins - Today</h6>
          </div>
        </Grid>
        <Grid item xs={12} sm={12} md={4} className="overview-item">
          <div className="flex flex-column">
            <span className="icon">
              <WorkspacesOutlinedIcon sx={{ fontSize: "42px" }} />
            </span>
            <h2 className="count-highlight">6</h2>
          </div>
          <div className="flex flex-between flex-center">
            <h6 className="text-muted">Leave Request - This Week</h6>
          </div>
        </Grid>
      </Grid>
    </Box>
  );
}
