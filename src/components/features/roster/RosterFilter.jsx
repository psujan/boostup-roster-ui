/* eslint-disable react/prop-types */
import { InputLabel, Button } from "@mui/material";
import FilterAltOutlinedIcon from "@mui/icons-material/FilterAltOutlined";
import Grid from "@mui/material/Grid2";
import { useState, useRef } from "react";
import EmployeeSelectDropdown from "../EmployeeSelectDropdown";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import dayjs from "dayjs";
import { ToastMessage } from "../../common/ToastNotification";
import Helper from "../../../utils/helper";

export default function RosterFilter({
  onFilter = () => {},
  setDateRange = () => {},
  employeeList,
}) {
  const employeeSelectRef = useRef();
  const [from, setFrom] = useState();
  const [to, setTo] = useState();
  const [employeeIds, setEmployeeIds] = useState([]);
  const { startOfWeek, endOfWeek } = Helper.getWeekRange();

  //Event Handlers
  const handleCancelFilter = () => {
    setFrom(null);
    setTo(null);
    // clear selected employee ids
    employeeSelectRef.current?.setValue([]);
    setDateRange(Helper.getDateRange(startOfWeek, endOfWeek));
    onFilter("");
  };

  const handleFilter = () => {
    let filterQuery = "";
    if (from && !to) {
      ToastMessage("warning", "Please also choose Roster To Date For Filter");
      return;
    }

    if (to && !from) {
      ToastMessage("warning", "Please also choose Roster From Date For Filter");
      return;
    }

    if (from && to) {
      if (to < from) {
        ToastMessage("error", "Roster To Date Is Less Than From.");
        return;
      }
    }

    if (!from && !to) {
      filterQuery = `&From=${startOfWeek}&To=${endOfWeek}`;
      setDateRange(Helper.getDateRange(startOfWeek, endOfWeek));
    } else {
      setDateRange(
        Helper.getDateRange(
          dayjs(from).format("YYYY-MM-DD"),
          dayjs(to).format("YYYY-MM-DD")
        )
      );
    }

    const employeeIds = employeeSelectRef.current?.getValue();

    if (employeeIds.length) {
      employeeIds.forEach((id, i) => {
        filterQuery += `&EmployeeIds[${i}]=${id}`;
      });
    }

    // Update New Date Range For Roster List

    console.log(filterQuery);
    onFilter(filterQuery);
  };

  return (
    <div
      style={{
        marginTop: "24px",
        padding: "16px 10px",
        backgroundColor: "#fafafa",
        borderRadius: "8px",
      }}
    >
      <form action="">
        <Grid
          container
          columnSpacing={2}
          columns={12}
          sx={{
            alignItems: "baseline",
            justifyContent: "flex-start",
          }}
        >
          <Grid size={{ sm: 6, md: 2 }}>
            <InputLabel className="base-input-label"> From</InputLabel>
            <DatePicker
              className="datepicker-roster-filter"
              value={from}
              sx={{ padding: "4px", height: "20px" }}
              onChange={(v) => setFrom(v)}
              placeholder="From"
            />
          </Grid>
          <Grid size={{ sm: 6, md: 2 }}>
            <InputLabel className="base-input-label">To</InputLabel>
            <DatePicker
              className="datepicker-roster-filter"
              value={to}
              sx={{ padding: "4px", height: "20px" }}
              onChange={(v) => setTo(v)}
            />
          </Grid>
          <Grid size={{ sm: 6, md: 3 }}>
            <InputLabel className="base-input-label">Employee</InputLabel>
            <EmployeeSelectDropdown
              employeeList={employeeList}
              style={{ marginTop: "13px" }}
              customClass="employee-select-field"
              ref={employeeSelectRef}
            />
          </Grid>
          <Grid size={{ sm: 6, md: 2 }}>
            <InputLabel
              className="base-input-label"
              style={{ visibility: "hidden" }}
            >
              Employee
            </InputLabel>
            <Button
              variant="contained"
              color="primary"
              disableElevation
              sx={{ textTransform: "capitalize", width: "100%" }}
              onClick={() => handleFilter()}
            >
              <FilterAltOutlinedIcon />
              Filter
            </Button>
          </Grid>
          <Grid size={{ sm: 6, md: 2 }}>
            <InputLabel
              className="base-input-label"
              style={{ visibility: "hidden" }}
            >
              Reset
            </InputLabel>
            <Button
              variant="outlined"
              disableElevation
              color="error"
              sx={{
                textTransform: "capitalize",
              }}
              onClick={() => handleCancelFilter()}
            >
              Cancel
            </Button>
          </Grid>
        </Grid>
        <Grid
          container
          spacing={2}
          columns={12}
          sx={{
            alignItems: "center",
            justifyContent: "flex-end",
          }}
        ></Grid>
      </form>
    </div>
  );
}
