import { Box } from "@mui/material";
import api from "../../../../services/api";
import { useLoader } from "../../../../utils/context/LoaderContext";
import { useEffect, useState } from "react";
import Helper from "../../../../utils/helper";
import Paginate from "../../../../components/common/Paginate";
import dayjs from "dayjs";

export default function ShiftLists() {
  const { showLoader, hideLoader } = useLoader();

  const [shifts, setShifts] = useState([]);
  const [page, setPage] = useState(1);
  const [count, setCount] = useState(1);

  const ShiftBox = ({ shift }) => {
    return (
      <Box
        sx={{
          margin: "30px 0",
          padding: "16px 10px",
          backgroundColor: "#fff",
          borderRadius: "8px",
          fontSize: "14px",
        }}
      >
        <Box className="flex flex-between" mb={2}>
          <span className="text-muted">Roster Id</span>
          <span>#{shift.id}</span>
        </Box>
        <Box className="flex flex-between" mb={2}>
          <span className="text-muted">Job</span>
          <span>{shift?.job?.title}</span>
        </Box>
        <Box className="flex flex-between" mb={2}>
          <span className="text-muted">Date</span>
          <span>{shift?.date}</span>
        </Box>
        <Box className="flex flex-between" mb={2}>
          <span className="text-muted">Time</span>
          <span>
            {shift?.startTime} to {shift?.endTime}
          </span>
        </Box>
        <Box className="flex flex-between" mb={2}>
          <span className="text-muted">Hours</span>
          <span>{shift?.workHours} hrs</span>
        </Box>
      </Box>
    );
  };

  const PAGE_SIZE = 10;
  const yearStart = dayjs().startOf("year").format("YYYY-MM-DD");
  const yearEnd = dayjs().endOf("year").format("YYYY-MM-DD");

  // yearly shift history
  const getShiftHistory = () => {
    showLoader();
    const empId = Helper.getCurrentEmployeeId();
    const filterQuery = `?pageNumber=${page}&pageSize=${PAGE_SIZE}&from=${yearStart}&to=${yearEnd} `;
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
    getShiftHistory();
  }, [page]);
  
  return (
    <>
      {shifts.length ? (
        shifts.map((shift, i) => <ShiftBox shift={shift} key={i} />)
      ) : (
        <Box p={3} borderRadius={2} backgroundColor="#fff">
          <p className="text-muted">No Shift Record Available</p>
        </Box>
      )}
      {shifts.length ? (
        <Paginate count={count} page={page} onPageChange={(p) => setPage(p)} />
      ) : undefined}
    </>
  );
}
