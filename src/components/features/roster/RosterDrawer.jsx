import SwapHorizOutlinedIcon from "@mui/icons-material/SwapHorizOutlined";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import { Drawer, Divider, Box } from "@mui/material";
import Heading from "../../common/Heading";

export default function RosterDrawer({ drawer, toggleDrawer }) {
  return (
    <Drawer
      open={drawer}
      anchor="right"
      sx={{ zIndex: 1202 }}
      onClose={() => toggleDrawer(false)}
    >
      <Box
        sx={{ width: 350 }}
        role="presentation"
        onClick={() => toggleDrawer(false)}
      >
        <Box sx={{ padding: "20px 10px" }}>
          <Heading title="Shift Details"></Heading>
          <Divider sx={{ margin: "10px 0" }}></Divider>
          <ul className="drawer-shift-details">
            <li>
              <div className="flex flex-between flex-center">
                <h6>Employee Name</h6>
                <p>Sujan Poudel</p>
              </div>
            </li>
            <li>
              <div className="flex flex-between flex-center">
                <h6>Roster Date</h6>
                <p>2025-03-01 (Mon)</p>
              </div>
            </li>
          </ul>
          <Heading title="Assigned Shifts (2)"></Heading>
          <Divider sx={{ margin: "10px 0" }}></Divider>
          <div className="shift-items-wrap">
            <div className="shift-detail flex flex-center flex-between">
              <span className="text-muted">Roster Id</span>
              <span>#43</span>
            </div>

            <div className="shift-detail flex flex-center flex-between">
              <span className="text-muted">Job Title</span>
              <span>Bar Cleaning</span>
            </div>
            <div className="shift-detail flex flex-center flex-between">
              <span className="text-muted">Shift Period</span>
              <span>6:00AM- 2:00PM (8hrs)</span>
            </div>
            <div className="shift-action flex flex-center flex-between">
              <button>
                <SwapHorizOutlinedIcon sx={{ fontSize: "14px" }} />
                Swap
              </button>
              <button className="btn-remove">
                <DeleteOutlineOutlinedIcon sx={{ fontSize: "14px" }} /> Remove
              </button>
            </div>
          </div>
          <div className="shift-items-wrap">
            <div className="shift-detail flex flex-center flex-between">
              <span className="text-muted">Roster Id</span>
              <span>#43</span>
            </div>

            <div className="shift-detail flex flex-center flex-between">
              <span className="text-muted">Job Title</span>
              <span>Bar Cleaning</span>
            </div>
            <div className="shift-detail flex flex-center flex-between">
              <span className="text-muted">Shift Period</span>
              <span>6:00AM- 2:00PM (8hrs)</span>
            </div>
            <div className="shift-action flex flex-center flex-between">
              <button>
                <SwapHorizOutlinedIcon sx={{ fontSize: "14px" }} />
                Swap
              </button>
              <button className="btn-remove">
                <DeleteOutlineOutlinedIcon sx={{ fontSize: "14px" }} /> Remove
              </button>
            </div>
          </div>
        </Box>
      </Box>
    </Drawer>
  );
}
