import { Box } from "@mui/material";
import CallMadeOutlinedIcon from "@mui/icons-material/CallMadeOutlined";
import { useNavigate } from "react-router-dom";
import api from "../../../../services/api";
import { useLoader } from "../../../../utils/context/LoaderContext";
import { useEffect, useState } from "react";
import Helper from "../../../../utils/helper";
import dayjs from "dayjs";
import Paginate from "../../../../components/common/Paginate";
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

  useEffect(() => {
    getRosterList();
  }, [page]);

  const ShiftBox = ({ shift }) => {
    return (
      <Box
        onClick={() => navigate("/shift-detail/" + shift.id)}
        sx={{
          position: "relative",
          p: 2,
          mb: 3,
          backgroundColor: "#fff",
          border: "1px solid transparent",
          borderRadius: "8px",
          display: "flex",
          alignItems: "flex-start",
          fontSize: "14px",
          boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px",
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
      {shifts.length ? (
        shifts.map((row, i) => <ShiftBox shift={row} key={i} />)
      ) : (
        <Box p={3} borderRadius={2} backgroundColor="#fff">
          <p className="text-muted">No Shift Record Available For This Week</p>
        </Box>
      )}
      {shifts.length ? (
        <Paginate count={count} page={page} onPageChange={onPageChange} />
      ) : undefined}
    </Box>
  );
}
