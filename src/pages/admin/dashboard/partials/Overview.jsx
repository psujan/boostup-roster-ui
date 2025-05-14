import { Box } from "@mui/material";
import Grid from "@mui/material/Grid2";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import UpdateOutlinedIcon from "@mui/icons-material/UpdateOutlined";
import ChecklistOutlinedIcon from "@mui/icons-material/ChecklistOutlined";
import WorkspacesOutlinedIcon from "@mui/icons-material/WorkspacesOutlined";
import WorkOutlineIcon from '@mui/icons-material/WorkOutline';
import Heading from "../../../../components/common/Heading";
import { useEffect, useState } from "react";
import api from "../../../../services/api";
import { useLoader } from "../../../../utils/context/LoaderContext";

export default function Overview() {
  const { showLoader, hideLoader } = useLoader();
  const [overview, setOverview] = useState({});

  const getAdminOverview = () => {
    showLoader();
    api
      .get("/api/v1/overview/admin")
      .then((res) => {
        setOverview(res?.data?.data);
      })
      .catch((err) => {
        console.error(err);
      })
      .finally(() => {
        hideLoader();
      });
  };

  useEffect(() => {
    getAdminOverview();
  }, []);
  return (
    <Box>
      <Heading title="Overview"></Heading>
      <Grid container spacing={4} className="grid-overview">
        <Grid item xs={12} sm={12} md={4} className="overview-item">
          <div className="flex flex-column">
            <span className="icon">
              <PersonOutlineIcon sx={{ fontSize: "42px" }} />
            </span>
            <h2 className="count-highlight">
              {overview?.totalEmployee || "0"}
            </h2>
          </div>
          <div className="flex flex-between flex-center">
            <h6 className="text-muted">Employee</h6>
          </div>
        </Grid>
        <Grid item xs={12} sm={12} md={4} className="overview-item">
          <div className="flex flex-column">
            <span className="icon">
              <ChecklistOutlinedIcon sx={{ fontSize: "42px" }} />
            </span>
            <h2 className="count-highlight">{overview?.totalShift || "0"}</h2>
          </div>
          <div className="flex flex-between flex-center">
            <h6 className="text-muted">Shifts </h6>
          </div>
        </Grid>
        <Grid item xs={12} sm={12} md={4} className="overview-item">
          <div className="flex flex-column">
            <span className="icon">
              <UpdateOutlinedIcon sx={{ fontSize: "42px" }} />
            </span>
            <h2 className="count-highlight">
              {overview?.totalClockIns || "0"}
            </h2>
          </div>
          <div className="flex flex-between flex-center">
            <h6 className="text-muted">ClockIns</h6>
          </div>
        </Grid>
        <Grid item xs={12} sm={12} md={4} className="overview-item">
          <div className="flex flex-column">
            <span className="icon">
              <WorkOutlineIcon sx={{ fontSize: "42px" }} />
            </span>
            <h2 className="count-highlight">{overview?.totalJobs}</h2>
          </div>
          <div className="flex flex-between flex-center">
            <h6 className="text-muted">Jobs</h6>
          </div>
        </Grid>
        <Grid item xs={12} sm={12} md={4} className="overview-item">
          <div className="flex flex-column">
            <span className="icon">
              <WorkspacesOutlinedIcon sx={{ fontSize: "42px" }} />
            </span>
            <h2 className="count-highlight">{overview?.totalLeaves}</h2>
          </div>
          <div className="flex flex-between flex-center">
            <h6 className="text-muted">Leave</h6>
          </div>
        </Grid>
      </Grid>
    </Box>
  );
}
