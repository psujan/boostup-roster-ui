import {
  Box,
  Button,
  InputLabel,
  TextField,
  FormControl,
  FormControlLabel,
  Radio,
  Checkbox,
  RadioGroup,
} from "@mui/material";
import Grid from "@mui/material/Grid2";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import EmployeeSelectDropdown from "../../../../components/features/EmployeeSelectDropdown";
import { TimePicker } from "@mui/x-date-pickers/TimePicker";
import dayjs from "dayjs";
import { useState, useEffect, useRef } from "react";
import Helper from "../../../../utils/helper";
import { useLoader } from "../../../../utils/context/LoaderContext";
import api from "../../../../services/api";
import { ToastMessage } from "../../../../components/common/ToastNotification";
import { useNavigate } from "react-router-dom";

const ROSTER_TYPES = {
  REGULAR: "regular",
  RANDOM: "random",
};

export default function RosterAddForm({ jobs = [], employeeList = [] }) {
  const navigate = useNavigate();
  const { showLoader, hideLoader } = useLoader();
  const [rosterType, setRosterType] = useState("regular");
  const [date, setDate] = useState(dayjs());
  const [from, setFrom] = useState();
  const [to, setTo] = useState();
  const [jobId, setJobId] = useState();
  const [hours, setHours] = useState("");
  const [startTime, setStartTime] = useState(null);
  const [endTime, setEndTime] = useState(null);
  const [selectedDays, setSelectedDays] = useState([]);
  const employeeSelectRef = useRef();

  const DAYS = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  // ui event handlers
  const handleJobchange = (id) => {
    console.log(id);
    if (!id) {
      return;
    }

    const job = jobs.find((job) => job.id == id);
    if (!job) {
      return;
    }
    setStartTime(() => dayjs(job.startTime, "h:mm A"));
    setEndTime(() => dayjs(job.endTime, "h:mm A"));
    //set starttime, endtime and job hours based on job id
    getDuration(job.startTime, job.endTime);
    setJobId(job.id);
  };

  const getDuration = (start, end) => {
    const duration = Helper.getDurationInHrs(start, end);
    setHours(duration);
  };

  const handleDayChange = (e) => {
    const { value, checked } = e.target;
    if (checked) {
      setSelectedDays((prevDays) => {
        return [...prevDays, value];
      });
    } else {
      setSelectedDays((prevDays) => {
        return prevDays.filter((x) => x != value);
      });
    }
  };

  const handleRosterTypeChange = (event) => {
    console.log(event.target.value);
    setRosterType(event.target.value);
  };

  const setRosterPayload = () => {
    const employeeIds = employeeSelectRef.current?.getValue();
    let rosterPayload = [];
    if (rosterType == ROSTER_TYPES.REGULAR) {
      const dateRange = Helper.getDateRange(from, to);
      let filteredDates = [...dateRange];
      if (selectedDays.length) {
        filteredDates = dateRange.filter((dt) => selectedDays.includes(dt.day));
      }
      employeeIds.forEach((id) => {
        filteredDates.forEach((date) => {
          rosterPayload.push({
            employeeId: id,
            jobId: jobId,
            startTime: dayjs(startTime).format("h:mm A"),
            endTime: dayjs(endTime).format("h:mm A"),
            workHours: hours.toString(),
            date: date.date,
          });
        });
      });
    } else {
      employeeIds.forEach((id) => {
        rosterPayload.push({
          employeeId: id,
          jobId: jobId,
          startTime: dayjs(startTime).format("h:mm A"),
          endTime: dayjs(endTime).format("h:mm A"),
          workHours: hours.toString(),
          date: dayjs(date).format("YYYY-MM-DD"),
        });
      });
    }

    return rosterPayload;
  };

  const handleSubmit = () => {
    //validate form inputs firs
    showLoader();
    api
      .post("/api/v1/roster", setRosterPayload())
      .then((res) => {
        if (res?.data?.success) {
          navigate("/roster");
          ToastMessage("success", res?.data?.message || "Roster Added");
        } else {
          ToastMessage("error", res?.data?.message || "Something Went Wrong");
        }
      })
      .catch((err) => {
        console.error(err);
        ToastMessage(
          "error",
          err?.response?.data?.message || "Something Went Wrong"
        );
      })
      .finally(() => {
        hideLoader();
      });
  };

  useEffect(() => {
    getDuration(startTime, endTime);
  }, [startTime, endTime]);

  return (
    <>
      <Box className="content-box">
        <div className="roster-date">
          <div className="flex flex-between">
            <h5>Please Select Roster Period</h5>
            <FormControl>
              {/* <FormLabel id="roster-type-radio">Gender</FormLabel> */}
              <RadioGroup
                aria-labelledby="roster-type-radio"
                name="roster-type"
                value={rosterType}
                onChange={handleRosterTypeChange}
                className="flex flex-between flex-row"
              >
                <FormControlLabel
                  value={ROSTER_TYPES.REGULAR}
                  control={<Radio />}
                  label="For Multiple Days"
                />
                <FormControlLabel
                  value={ROSTER_TYPES.RANDOM}
                  control={<Radio />}
                  label="One Day"
                />
              </RadioGroup>
            </FormControl>
          </div>
        </div>
        {rosterType == ROSTER_TYPES.REGULAR ? (
          <div>
            <Grid
              container
              columnSpacing={2}
              columns={12}
              sx={{
                alignItems: "baseline",
                justifyContent: "flex-start",
                marginBottom: "20px",
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
                  value={to}
                  sx={{ padding: "4px", height: "20px" }}
                  onChange={(v) => setTo(v)}
                  placeholder="From"
                />
              </Grid>
            </Grid>
            <h5 className="heading-5" style={{ marginTop: "48px" }}>
              Shift Repeats On
            </h5>
            <Grid
              container
              spacing={3}
              columnSpacing={2}
              columns={12}
              sx={{
                padding: "16px",
                alignItems: "baseline",
                justifyContent: "flex-start",
              }}
            >
              {DAYS.map((d) => (
                <Grid size={{ sm: 6, md: 2 }} key={d}>
                  <FormControlLabel
                    control={
                      <Checkbox
                        value={d}
                        onChange={(e) => handleDayChange(e)}
                      />
                    }
                    label={d}
                  />
                </Grid>
              ))}
            </Grid>
          </div>
        ) : (
          <Grid
            container
            columnSpacing={2}
            columns={12}
            sx={{
              alignItems: "baseline",
              justifyContent: "flex-start",
              marginBottom: "20px",
            }}
          >
            <Grid size={{ sm: 12, md: 6 }}>
              <InputLabel className="base-input-label">Date</InputLabel>
              <DatePicker
                className="base-input"
                value={date}
                sx={{ padding: "4px", height: "20px" }}
                onChange={(v) => setDate(v)}
                placeholder="From"
              />
            </Grid>
          </Grid>
        )}
      </Box>
      <Box className="content-box">
        <div className="roster-date">
          <div>
            <h5>Please Provide Shift Details</h5>
          </div>
        </div>
        <div style={{ marginBottom: "30px" }}>
          <Grid
            container
            columnSpacing={3}
            rowSpacing={3}
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
              <InputLabel className="base-input-label" id="roster-start-time">
                Start Time
              </InputLabel>
              <TimePicker
                className="base-input"
                labelId="roster-start-time"
                value={startTime}
                onChange={(newValue) => setStartTime(dayjs(newValue, "h:mm A"))}
              />
            </Grid>
            <Grid size={{ sm: 12, md: 4 }}>
              <InputLabel className="base-input-label" id="roster-end-time">
                End Time
              </InputLabel>
              <TimePicker
                className="base-input"
                labelId="roster-end-time"
                value={endTime}
                onChange={(v) => setEndTime(dayjs(v, "h:mm A"))}
              />
            </Grid>
            <Grid size={{ sm: 12, md: 4 }}>
              <InputLabel className="base-input-label" id="roster-hours">
                Total Hours
              </InputLabel>
              <TextField
                type="number"
                labelId="roster-hours"
                variant="outlined"
                className="base-input"
                value={hours}
                onChange={(e) => setHours(e.target.value, e.target)}
              />
            </Grid>
            <Grid size={{ sm: 12, md: 12 }}>
              <InputLabel className="base-input-label">Staff</InputLabel>
              <EmployeeSelectDropdown
                employeeList={employeeList}
                style={{ marginTop: "13px" }}
                customClass="base-select-dropdown"
                ref={employeeSelectRef}
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
                sx={{ backgroundColor: "#1E7E51", height: 48 }}
                onClick={() => handleSubmit()}
              >
                Submit
              </Button>
            </Grid>
          </Grid>
        </div>
      </Box>
    </>
  );
}
