import {
  Grid2,
  InputLabel,
  TextField,
  Button,
  FormControlLabel,
  Checkbox,
} from "@mui/material";
import { DatePicker } from "@mui/x-date-pickers";
import dayjs from "dayjs";
import api from "../../../../services/api";
import { useState, useEffect } from "react";
import { useLoader } from "../../../../utils/context/LoaderContext";
import { ToastMessage } from "../../../../components/common/ToastNotification";
import Helper from "../../../../utils/helper";
import { useSearchParams, useNavigate } from "react-router-dom";

export default function EmployeeLeaveForm() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const { showLoader, hideLoader } = useLoader();

  const [leaveTypes, setLeaveTypes] = useState([]);

  //form state
  const [from, setFrom] = useState(null);
  const [to, setTo] = useState(null);
  const [leaveTypeId, setLeaveTypeId] = useState();
  const [notes, setNotes] = useState();
  const [date, setDate] = useState(undefined);
  const [singleDay, setSingleDay] = useState(true);

  const getLeaveTypes = () => {
    showLoader();
    api
      .get("/api/v1/leavetype")
      .then((res) => {
        if (res?.data?.success) {
          setLeaveTypes(() => res?.data?.data);
        }
      })
      .catch((err) => {
        console.error(err);
      })
      .finally(() => {
        hideLoader();
      });
  };

  const handleSingleDayChange = (e) => {
    setSingleDay(e.target.checked);
  };

  const validate = () => {
    if (!leaveTypeId) {
      ToastMessage("error", "Please select leave type");
      return false;
    }

    if (!notes) {
      ToastMessage("error", "Please provide reason");
      return false;
    }

    if (singleDay && !date) {
      ToastMessage("error", "Please select leave date");
      return false;
    }

    if (!singleDay && !from) {
      ToastMessage("error", "Please select leave from date");
      return false;
    }

    if (!singleDay && !to) {
      ToastMessage("error", "Please select leave to date");
      return false;
    }

    return true;
  };
  const formatDate = (d) => dayjs(d).format("YYYY-MM-DD");

  const handleFormSubmit = async () => {
    if (!validate()) {
      return;
    }

    const payload = {
      employeeId: Helper.getCurrentEmployeeId(),
      from: singleDay ? formatDate(date) : formatDate(from),
      to: singleDay ? formatDate(date) : formatDate(to),
      forSingleDay: singleDay,
      rosterId: searchParams.get("roster_id"),
      notes: notes,
      leaveTypeId: leaveTypeId,
      isPaidLeave: false, // deal with this if client wants to create payroll from roster: for now not meaningful
    };

    showLoader();
    api
      .post("/api/v1/leave", payload)
      .then((res) => {
        if (res?.data?.success) {
          ToastMessage("success", res?.data?.message || "Successful");
          navigate("/employee-leaves");
        }
      })
      .catch((err) => {
        console.error(err);
        ToastMessage("error", "Something Went Wrong");
      })
      .finally(() => {
        hideLoader();
      });
  };

  useEffect(() => {
    getLeaveTypes();
  }, []);

  return (
    <Grid2 container spacing={4} columns={12} alignItems="center">
      <Grid2 size={{ xs: 12, md: 6 }}>
        <InputLabel
          className="base-input-label"
          id="for-single-day"
          style={{ visibility: "hidden" }}
        >
          For Single Day ?
        </InputLabel>
        <FormControlLabel
          control={
            <Checkbox
              checked={singleDay}
              onChange={(e) => handleSingleDayChange(e)}
            />
          }
          label="For Single Day"
        />
      </Grid2>
      <Grid2 size={{ xs: 12, md: 6 }}>
        <InputLabel className="base-input-label" id="leave-type">
          Leave Type
        </InputLabel>
        <select
          id="leave-type"
          className="base-input-select"
          onChange={(e) => setLeaveTypeId(e.target.value)}
        >
          <option value=""></option>
          {leaveTypes.length
            ? leaveTypes.map((row) => {
                return (
                  <option value={row.id} key={row.id}>
                    {row.title}
                  </option>
                );
              })
            : ""}
        </select>
      </Grid2>

      <Grid2 size={{ xs: 12, md: 12 }}>
        <InputLabel className="base-input-label" htmlFor="leave-apply-reason">
          Reason<span className="is-required">*</span>
        </InputLabel>
        <TextField
          onChange={(e) => setNotes(e.target.value)}
          id="leave-apply-reason"
          variant="outlined"
          className="base-input"
          fullWidth
          placeholder="I am feeling unwell ..."
        />
      </Grid2>
      {!singleDay ? (
        <>
          <Grid2 size={{ xs: 12, md: 6 }}>
            <InputLabel className="base-input-label" htmlFor="leave-from">
              From<span className="is-required">*</span>
            </InputLabel>
            <DatePicker
              id="leave-from"
              className="base-input"
              value={from}
              onChange={(v) => setFrom(v)}
              placeholder="From"
              minDate={dayjs()}
            />
          </Grid2>
          <Grid2 size={{ xs: 12, md: 6 }}>
            <InputLabel className="base-input-label" htmlFor="leave-to">
              To<span className="is-required">*</span>
            </InputLabel>
            <DatePicker
              id="leave-to"
              className="base-input"
              value={to}
              onChange={(v) => setTo(v)}
              placeholder="From"
              minDate={dayjs()}
            />
          </Grid2>
        </>
      ) : (
        <Grid2 size={{ xs: 12, md: 6 }}>
          <InputLabel className="base-input-label" htmlFor="leave-from">
            Date<span className="is-required">*</span>
          </InputLabel>
          <DatePicker
            onChange={(v) => {
              setDate(v);
            }}
            id="leave-from"
            className="base-input"
            placeholder="Leave Date"
            minDate={dayjs()}
          />
        </Grid2>
      )}
      <Grid2 size={{ xs: 12, md: 6 }}>
        <Button
          color="primary"
          variant="contained"
          sx={{ width: "100%" }}
          onClick={() => handleFormSubmit()}
        >
          Submit
        </Button>
      </Grid2>
    </Grid2>
  );
}
