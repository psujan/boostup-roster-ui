import { Grid2, InputLabel, TextField, Button } from "@mui/material";
import { DatePicker } from "@mui/x-date-pickers";
import dayjs from "dayjs";
import { useState } from "react";
export default function EmployeeLeaveForm() {
  const [from, setFrom] = useState(dayjs());
  const [to, setTo] = useState(dayjs());
  return (
    <Grid2 container spacing={4} columns={12} alignItems="center">
      <Grid2 size={{ xs: 12, md: 6 }}>
        <InputLabel className="base-input-label" htmlFor="leave-type">
          Leave Type<span className="is-required">*</span>
        </InputLabel>
        <TextField
          id="leave-type"
          variant="outlined"
          className="base-input"
          fullWidth
        />
      </Grid2>
      <Grid2 size={{ xs: 12, md: 6 }}>
        <InputLabel className="base-input-label" htmlFor="leave-apply-reason">
          Reason<span className="is-required">*</span>
        </InputLabel>
        <TextField
          id="leave-apply-reason"
          variant="outlined"
          className="base-input"
          fullWidth
        />
      </Grid2>
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
        />
      </Grid2>
      <Grid2 size={{ xs: 12, md: 6 }}>
        <Button color="primary" variant="contained" sx={{ width: "100%" }}>
          Submit
        </Button>
      </Grid2>
    </Grid2>
  );
}
