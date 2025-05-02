import {
  Box,
  InputLabel,
  Grid2,
  Checkbox,
  FormControlLabel,
  Button,
} from "@mui/material";

import { TimePicker } from "@mui/x-date-pickers";
import { useState } from "react";
import { ToastMessage } from "../../../../components/common/ToastNotification";
import api from "../../../../services/api";
import dayjs from "dayjs";
import { useNavigate } from "react-router-dom";
import { useLoader } from "../../../../utils/context/LoaderContext";
import Helper from "../../../../utils/helper";

const DAYS = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
export default function AvailabilityForm() {
  const { showLoader, hideLoader } = useLoader();
  const navigate = useNavigate();
  const [day, setDay] = useState();
  const [forFullDay, setForFullDay] = useState(false);
  const [from, setFrom] = useState();
  const [to, setTo] = useState();

  const validate = () => {
    if (!day) {
      ToastMessage("error", "Please Select Day");
      return false;
    }

    if (!forFullDay && !from) {
      ToastMessage("error", "Please Select From Time");
      return false;
    }

    if (!forFullDay && !to) {
      ToastMessage("error", "Please Select To Time");
      return false;
    }

    return true;
  };

  const handleSubmit = () => {
    if (!validate()) {
      return;
    }
    showLoader();
    const payload = {
      day: day,
      forFullDay: forFullDay,
      from: forFullDay ? " " : dayjs(from).format("h:mm A"),
      to: forFullDay ? " " : dayjs(to).format("h:mm A"),
      employeeId: Helper.getCurrentEmployeeId(),
    };

    api
      .post("/api/v1/availability", payload)
      .then((res) => {
        if (res?.data?.success) {
          ToastMessage("success", res?.data?.message || "Successful");
          navigate("/my-availability");
        }
      })
      .catch((err) => {
        console.error(err);

        // handle Server Error
        if (err?.response?.data?.message != null) {
          ToastMessage("error", err?.response?.data.message);
          return;
        }

        ToastMessage("error", "Something Went Wrong");
      })
      .finally(() => {
        hideLoader();
      });
  };

  return (
    <>
      <Box
        sx={{
          margin: "30px 0",
          padding: "16px 10px",
          backgroundColor: "#fff",
          borderRadius: "8px",
        }}
      >
        <Box
          sx={{
            p: 1,
            backgroundColor: "#f4f4f4",
            mb: 1,
            borderRadius: "6px",
            marginBottom: "20px",
          }}
        >
          <p className="text-muted text-sm">
            You can have maximum 3 availabilities for a single day. Please remove
            existing record first if you wish to modify based on your need.
          </p>
        </Box>
        <Grid2 container spacing={4} columns={12} alignItems="center">
          <Grid2 size={{ xs: 12, md: 6 }}>
            <InputLabel className="base-input-label" id="leave-type">
              Day
            </InputLabel>
            <select
              id="leave-type"
              className="base-input-select"
              onChange={(e) => {
                setDay(e.target.value);
              }}
            >
              <option value=""></option>
              {DAYS.length
                ? DAYS.map((row) => {
                    return (
                      <option value={row} key={row}>
                        {row}
                      </option>
                    );
                  })
                : ""}
            </select>
          </Grid2>
          <Grid2 size={{ xs: 12, md: 6 }}>
            <FormControlLabel
              control={
                <Checkbox
                  onChange={(e) => {
                    setForFullDay(e.target.checked);
                  }}
                />
              }
              label="Available For Whole Day"
            />
            <p className="text-muted" style={{ fontSize: "12px" }}>
              Full day can vary depending on your work conditions (eg: for full
              day, for full night or whole 24 hrs). Please contact employer to
              get more information about it.
            </p>
          </Grid2>
          <Grid2 size={{ xs: 12, md: 6 }}>
            <InputLabel className="base-input-label" id="available-from">
              From
            </InputLabel>
            <TimePicker
              onChange={(v) => setFrom(v)}
              sx={{ width: "100%", height: "46px" }}
              className="base-input"
            />
          </Grid2>
          <Grid2 size={{ xs: 12, md: 6 }}>
            <InputLabel className="base-input-label" id="available-to">
              To
            </InputLabel>
            <TimePicker
              onChange={(v) => setTo(v)}
              sx={{ width: "100%", height: "46px" }}
              className="base-input"
            />
          </Grid2>
          <Grid2 size={{ xs: 12, md: 6 }}>
            <Button
              variant="contained"
              color="primary"
              sx={{ width: "100%" }}
              onClick={() => handleSubmit()}
            >
              Submit
            </Button>
          </Grid2>
        </Grid2>
      </Box>
    </>
  );
}
