import {
  Box,
  Button,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import Heading from "../../../components/common/Heading.jsx";
import BaseLayout from "../../../components/common/BaseLayout.jsx";
import ListIcon from "@mui/icons-material/NorthEast";
import { useNavigate } from "react-router-dom";
import Grid from "@mui/material/Grid2";
import { useEffect, useState } from "react";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import EmployeeSelectDropdown from "../../../components/features/EmployeeSelectDropdown.jsx";
import { useLoader } from "../../../utils/context/LoaderContext.jsx";
import api from "../../../services/api.jsx";

export default function RosterAdd() {
  const navigate = useNavigate();
  const { showLoader, hideLoader } = useLoader();
  const [from, setFrom] = useState();
  const [jobId, setJobId] = useState();
  const [jobs, setJobs] = useState([]);

  const [employeeList, setEmployeeList] = useState([]);

  // ui event handlers
  const handleJobchange = (id) => {
    console.log(id);
    if (!id) {
      return;
    }

    //set starttime, endtime and job hours based on job id
  };
  
  //api call
  // Get All Employee List without pagination for dropdown select
  const getEmployeeList = () => {
    showLoader();
    api
      .get("api/v1/employee/get-all")
      .then((res) => {
        const rows = res?.data?.data;
        setEmployeeList(rows);
      })
      .catch((err) => {
        console.error("Error in Fetching Employee List", err);
      })
      .finally(() => {
        hideLoader();
      });
  };

  const getJobList = () => {
    showLoader();
    api
      .get("api/v1/job/get-all")
      .then((res) => {
        const rows = res?.data?.data;
        setJobs(rows);
      })
      .catch((err) => {
        console.error("Error in Fetching Employee List", err);
      })
      .finally(() => {
        hideLoader();
      });
  };

  useEffect(() => {
    getEmployeeList();
    getJobList();
  }, []);

  return (
    <BaseLayout>
      <Box className="content-top flex flex-between flex-center">
        <Heading title="Add Roster" />
        <Button
          variant="outlined"
          color="primary"
          size="sm"
          sx={{
            fontSize: "14px",
            fontWeight: "500",
            textTransform: "none",
          }}
          onClick={() => navigate("/roster")}
        >
          View All
          <ListIcon sx={{ marginLeft: "10px" }} />
        </Button>
      </Box>
      <Box className="content-box">
        <div className="roster-date">
          <div>
            <h5>Please Select Roster Date</h5>
          </div>
        </div>
        <div style={{ marginBottom: "30px" }}>
          <Grid
            container
            columnSpacing={2}
            columns={12}
            sx={{
              alignItems: "baseline",
              justifyContent: "flex-start",
            }}
          >
            <Grid size={{ sm: 12, md: 6 }}>
              <InputLabel className="base-input-label"> From</InputLabel>
              <DatePicker
                className="base-input"
                value={from}
                sx={{ padding: "4px", height: "20px" }}
                onChange={(v) => setFrom(v)}
                placeholder="From"
              />
            </Grid>
            <Grid size={{ sm: 12, md: 6 }}>
              <InputLabel className="base-input-label"> To</InputLabel>
              <DatePicker
                className="base-input"
                value={from}
                sx={{ padding: "4px", height: "20px" }}
                onChange={(v) => setFrom(v)}
                placeholder="From"
              />
            </Grid>
          </Grid>
        </div>
      </Box>
      <Box className="content-box">
        <div className="roster-date">
          <div>
            <h5>Your are adding roster from -- to --</h5>
          </div>
        </div>
        <div style={{ marginBottom: "30px" }}>
          <Grid
            container
            columnSpacing={3}
            rowSpacing={2}
            columns={12}
            sx={{
              alignItems: "baseline",
              justifyContent: "flex-start",
            }}
          >
            <Grid size={{ sm: 12, md: 12 }}>
              <InputLabel className="base-input-label" id="roster-job-label">
                Job
              </InputLabel>
              <select
                id="roster-job-label"
                className="base-input-select"
                onChange={(e) => handleJobchange(e.target.value)}
              >
                <option value=""></option>
                {jobs.length
                  ? jobs.map((job) => {
                      return (
                        <option value={job.id} key={job.id}>
                          {job.title}
                        </option>
                      );
                    })
                  : ""}
              </select>
            </Grid>
            <Grid size={{ sm: 12, md: 4 }}>
              <InputLabel className="base-input-label">Start Time</InputLabel>
              <TextField
                type="email"
                id="login-email"
                variant="outlined"
                className="base-input"
                onChange={(e) => setFrom(e.target.value)}
              />
            </Grid>
            <Grid size={{ sm: 12, md: 4 }}>
              <InputLabel className="base-input-label">End Time</InputLabel>
              <TextField
                type="email"
                id="login-email"
                variant="outlined"
                className="base-input"
                onChange={(e) => setFrom(e.target.value)}
              />
            </Grid>
            <Grid size={{ sm: 12, md: 4 }}>
              <InputLabel className="base-input-label">Total Hours</InputLabel>
              <TextField
                type="email"
                id="login-email"
                variant="outlined"
                className="base-input"
                onChange={(e) => setFrom(e.target.value)}
              />
            </Grid>
            <Grid size={{ sm: 12, md: 12 }}>
              <InputLabel className="base-input-label">Staff</InputLabel>
              <EmployeeSelectDropdown
                employeeList={employeeList}
                style={{ marginTop: "13px" }}
                customClass="base-select-dropdown"
              />
            </Grid>
          </Grid>
          <Grid
            container
            columnSpacing={3}
            rowSpacing={2}
            columns={12}
            sx={{
              marginTop: "24px",
              alignItems: "baseline",
              justifyContent: "flex-end",
            }}
          >
            <Grid size={{ sm: 8, md: 3 }}>
              <Button
                variant="contained"
                fullWidth
                onClick={() => {}}
                sx={{ backgroundColor: "#1E7E51", height: 48 }}
              >
                Submit
              </Button>
            </Grid>
          </Grid>
        </div>
      </Box>
    </BaseLayout>
  );
}
