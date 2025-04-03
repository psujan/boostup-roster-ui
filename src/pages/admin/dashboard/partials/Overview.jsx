import { Box } from "@mui/material";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import UpdateOutlinedIcon from "@mui/icons-material/UpdateOutlined";
import ChecklistOutlinedIcon from "@mui/icons-material/ChecklistOutlined";
import WorkspacesOutlinedIcon from "@mui/icons-material/WorkspacesOutlined";
import Heading from "../../../../commonComponents/Heading";

export default function Overview() {
  return (
    <Box>
      <Heading title="Overview"></Heading>
      <Box className="flex flex-overview">
        <Box className="overview-item">
          <div className="flex flex-column">
            <span className="icon">
              <PersonOutlineIcon sx={{ fontSize: "42px" }} />
            </span>
            <h2 className="count-highlight">43</h2>
          </div>
          <div className="flex flex-between flex-center">
            <h6 className="text-muted">Total Employee</h6>
          </div>
        </Box>
        <Box className="overview-item">
          <div className="flex flex-column">
            <span className="icon">
              <ChecklistOutlinedIcon sx={{ fontSize: "42px" }} />
            </span>
            <h2 className="count-highlight">43</h2>
          </div>
          <div className="flex flex-between flex-center">
            <h6 className="text-muted">Assigned Shifts - 2024</h6>
          </div>
        </Box>
        <Box className="overview-item">
          <div className="flex flex-column">
            <span className="icon">
              <UpdateOutlinedIcon sx={{ fontSize: "42px" }} />
            </span>
            <h2 className="count-highlight">953</h2>
          </div>
          <div className="flex flex-between flex-center">
            <h6 className="text-muted">Hours Worked - 2024</h6>
          </div>
        </Box>
        <Box className="overview-item">
          <div className="flex flex-column">
            <span className="icon">
              <WorkspacesOutlinedIcon sx={{ fontSize: "42px" }} />
            </span>
            <h2 className="count-highlight">6</h2>
          </div>
          <div className="flex flex-between flex-center">
            <h6 className="text-muted">Active Clock Ins - Today</h6>
          </div>
        </Box>
      </Box>
    </Box>
  );
}
