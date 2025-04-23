// import SwapHorizOutlinedIcon from "@mui/icons-material/SwapHorizOutlined";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import { Drawer, Divider, Box, Button } from "@mui/material";
import Heading from "../../common/Heading";
import { Link } from "react-router-dom";

export default function RosterDrawer({
  drawer,
  toggleDrawer,
  roster = null,
  handleDelete = ()=>{}
}) {
  const leave = roster?.leaves[0] || null;
  return (
    <Drawer
      open={drawer}
      anchor="right"
      sx={{ zIndex: 1202 }}
      onClose={() => toggleDrawer(false)}
    >
      <Box sx={{ width: 350 }} role="presentation">
        {roster ? (
          <Box sx={{ padding: "20px 10px" }}>
            <h5 className="heading-5">Shift Detail</h5>
            <Divider sx={{ margin: "10px 0" }}></Divider>
            <div className="shift-items-wrap">
              <div className="shift-detail flex flex-center flex-between">
                <span className="text-muted">Roster Id</span>
                <span>#{roster.id}</span>
              </div>
              <div className="shift-detail flex flex-center flex-between">
                <span className="text-muted">Employee</span>
                <span className="clr-primary">
                  <Link
                    to={{ pathname: "/employee/" + roster.employee.employeeId }}
                  >
                    {roster.employee?.employeeName}
                  </Link>
                </span>
              </div>
              <div className="shift-detail flex flex-center flex-between">
                <span className="text-muted">Roster Date</span>
                <span>{roster.date}</span>
              </div>
              <div className="shift-detail flex flex-center flex-between">
                <span className="text-muted">Job Title</span>
                <span
                  style={{ flexBasis: "70%", textAlign: "right" }}
                  title={roster.job.title}
                >
                  {roster.job.title.substring(0, 25)}
                  {roster.job.title.length > 25 ? "..." : ""}
                </span>
              </div>
              <div className="shift-detail flex flex-center flex-between">
                <span className="text-muted">Shift Period</span>
                <span>
                  {roster?.startTime}- {roster?.endTime}
                </span>
              </div>
              <div className="shift-detail flex flex-center flex-between">
                <span className="text-muted">Work Hours</span>
                <span>{roster.workHours} hrs</span>
              </div>
              <div className="shift-detail flex flex-center flex-between">
                <span className="text-muted">Is Leave Requested</span>
                <span>{leave ? "Yes" : "No"}</span>
              </div>
              <div
                className="flex flex-center flex-end"
                style={{ marginTop: "16px" }}
              >
                {/* <button>
              <SwapHorizOutlinedIcon sx={{ fontSize: "14px" }} />
              Swap
            </button> */}
                <Button
                  variant="outlined"
                  color="error"
                  size="sm"
                  onClick={() => handleDelete(roster.id)}
                >
                  <DeleteOutlineOutlinedIcon sx={{ fontSize: "14px" }} /> Delete
                </Button>
              </div>
            </div>
            {leave ? (
              <div className="shift-items-wrap">
                <h5
                  className="heading-5 text-muted"
                  style={{ marginBottom: "16px" }}
                >
                  Leave is requested for this shift
                </h5>
                <div className="shift-detail flex flex-center flex-between">
                  <span className="text-muted">Leave Id</span>
                  <span>#{leave.id}</span>
                </div>
                <div className="shift-detail flex flex-center flex-between">
                  <span className="text-muted">Leave Type</span>
                  <span>{leave.leaveType.title}</span>
                </div>
                <div className="shift-detail flex flex-center flex-between">
                  <span className="text-muted">Leave Status</span>
                  <span>{leave.status}</span>
                </div>
              </div>
            ) : (
              ""
            )}
            {/* <div className="shift-items-wrap">
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
        </div> */}
          </Box>
        ) : (
          "No Data Found"
        )}
      </Box>
    </Drawer>
  );
}
