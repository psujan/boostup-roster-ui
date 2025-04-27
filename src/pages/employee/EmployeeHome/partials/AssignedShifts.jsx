import { Box, Button, Grid2 } from "@mui/material";
import CallMadeOutlinedIcon from "@mui/icons-material/CallMadeOutlined";
import { useNavigate } from "react-router-dom";
import api from "../../../../services/api";
import { useLoader } from "../../../../utils/context/LoaderContext";
import { useEffect, useState } from "react";
import Helper from "../../../../utils/helper";
import dayjs from "dayjs";
import Paginate from "../../../../components/common/Paginate";
import { ToastMessage } from "../../../../components/common/ToastNotification";
export default function AssignedShifts() {
  const navigate = useNavigate();
  const { showLoader, hideLoader } = useLoader();
  const [shifts, setShifts] = useState([]);
  const [page, setPage] = useState(1);
  const [count, setCount] = useState(1);
  const { startOfWeek, endOfWeek } = Helper.getWeekRange();
  const PAGE_SIZE = 10;
  //ui handlers
  const onPageChange = (value) => {
    setPage(value);
  };
  //api call
  const getRosterList = () => {
    showLoader();
    const empId = Helper.getCurrentEmployeeId();
    const filterQuery = `?pageNumber=${page}&pageSize=${PAGE_SIZE}&from=${startOfWeek}&to=${endOfWeek} `;
    api
      .get("/api/v1/roster/employee/" + empId + filterQuery)
      .then((res) => {
        setShifts(() => []);
        setShifts(() => res?.data?.data?.data);
        setCount(res?.data?.data?.totalCount);
      })
      .catch((err) => {
        console.error(err);
      })
      .finally(() => {
        hideLoader();
      });
  };

  const handleClockIn = (shiftId) => {
    const shift = shifts.find((r) => r.id == shiftId);
    if (!shift) {
      return;
    }
    showLoader();
    console.log(shift);
    const payload = {
      jobId: shift?.job?.id,
      date: dayjs().format("YYYY-MM-DD"),
      clockIn: dayjs().format("h:mm A"),
      employeeId: Helper.getCurrentEmployeeId(),
      rosterId: shiftId,
    };

    api
      .post("/api/v1/timesheet/clock-in", payload)
      .then((res) => {
        ToastMessage("success", res?.data?.message);
        getRosterList();
      })
      .catch((err) => {
        console.error(err);
        ToastMessage("error", "Something Went Wrong");
      })
      .finally(() => {
        hideLoader();
      });
  };

  const getTotalHours = (clockIn, clockOut, date) => {
    const start = dayjs(`${date} ${clockIn}`, "YYYY-MM-DD h:mm A");
    const end = dayjs(`${date} ${clockOut}`, "YYYY-MM-DD h:mm A");

    let diff = end.diff(start, "minute") / 60;
    return diff.toFixed(2); // returns total hours as string like "2.50"
  };

  const handleClockOut = (shiftId) => {
    const shift = shifts.find((r) => r.id == shiftId);
    if (!shift) {
      return;
    }

    if (!shift?.timeSheets?.length) {
      ToastMessage("error", "No Clock In Record Found");
    }

    showLoader();
    console.log(shift);
    const payload = {
      timeSheetId: shift.timeSheets[0].id,
      clockOut: dayjs().format("h:mm A"),
      totalHours: getTotalHours(
        shift.timeSheets[0].clockIn,
        dayjs().format("h:mm A"),
        shift.timeSheets[0].date
      ),
    };
    api
      .post("/api/v1/timesheet/clock-out", payload)
      .then((res) => {
        ToastMessage("success", res?.data?.message);
        getRosterList();
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
    getRosterList();
  }, [page]);

  const ShiftBox = ({ shift }) => {
    return (
      <Grid2
        size={{ md: 5, sm: 12, xs: 12, lg: 5 }}
        sx={{ alignSelf: "stretch" }}
      >
        <Box
          sx={{
            position: "relative",
            p: 2,
            mb: 2,
            backgroundColor: "#fff",
            border: "1px solid transparent",
            borderRadius: "8px",
            boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px",
            cursor: "pointer",
          }}
        >
          <Box
            onClick={() => navigate("/shift-detail/" + shift.id)}
            sx={{
              display: "flex",
              alignItems: "flex-start",
              fontSize: "14px",
              cursor: "pointer",
            }}
          >
            <span className="roster-detail-arrow">
              <CallMadeOutlinedIcon color="primary" />
            </span>
            <Box>
              <p className="text-muted" style={{ marginBottom: "10px" }}>
                {dayjs(shift.date).format("ddd[\n] D")}
              </p>
            </Box>
            <Box sx={{ marginLeft: "35px" }}>
              <h6
                style={{
                  fontSize: "14px",
                  fontWeight: "500",
                  marginBottom: "14px",
                }}
              >
                {shift.startTime} - {shift.endTime} | {shift?.workHours} hrs
              </h6>
              <p className="text-muted">{shift?.job?.title}</p>
            </Box>
          </Box>
          {new Date(shift.date).toDateString() === new Date().toDateString() ? (
            <Box
              sx={{
                mt: 2,
                display: "flex",
                justifyContent: "space-between",
                gap: 2,
                fontSize: "12px",
              }}
            >
              <Button
                disabled={
                  shift.timeSheets.length && shift.timeSheets[0].clockIn
                }
                variant="contained"
                sx={{ width: "100%", fontSize: "12px" }}
                onClick={() => handleClockIn(shift.id)}
              >
                <span>
                  Clock In{" "}
                  {shift.timeSheets.length && shift.timeSheets[0].clockIn
                    ? shift.timeSheets[0].clockIn
                    : ""}
                </span>
              </Button>
              <Button
                disabled={
                  shift.timeSheets.length && shift.timeSheets[0].clockOut
                }
                variant="text"
                color="primary"
                sx={{
                  width: "100%",
                  fontSize: "12px",
                  backgroundColor: "rgba(30, 126, 81, 0.04)",
                }}
                onClick={() => handleClockOut(shift.id)}
              >
                <span>
                  Clock Out{" "}
                  {shift.timeSheets.length && shift.timeSheets[0].clockIn
                    ? shift.timeSheets[0].clockOut
                    : ""}
                </span>
              </Button>
            </Box>
          ) : undefined}
        </Box>
      </Grid2>
    );
  };

  return (
    <Box sx={{ marginTop: "40px" }}>
      <Box sx={{ mb: 2, display: "flex", justifyContent: "space-between" }}>
        <h5 className="heading-5">My Shifts</h5>
        <span className="text-muted">
          This Week{" "}
          <span className="clr-primary">
            {dayjs(startOfWeek).format("MM-DD") +
              " to " +
              dayjs(endOfWeek).format("MM-DD")}
          </span>
        </span>
      </Box>
      <Grid2
        container
        rowGap={2}
        columnGap={1}
        columns={12}
        alignItems="center"
      >
        {shifts.length ? (
          shifts.map((row, i) => <ShiftBox shift={row} key={i} />)
        ) : (
          <Box p={3} borderRadius={2} backgroundColor="#fff">
            <p className="text-muted">
              No Shift Record Available For This Week
            </p>
          </Box>
        )}
      </Grid2>
      {shifts.length ? (
        <Paginate count={count} page={page} onPageChange={onPageChange} />
      ) : undefined}
    </Box>
  );
}
