/* eslint-disable react/prop-types */
import { Box } from "@mui/material";
import { useState, useEffect } from "react";
import api from "../../../../services/api";
import Helper from "../../../../utils/helper";
import Paginate from "../../../../components/common/Paginate";
import { useLoader } from "../../../../utils/context/LoaderContext";
import dayjs from "dayjs";
export default function EmployeeLeaveLists({ status = "All" }) {
  const { showLoader, hideLoader } = useLoader();
  const [page, setPage] = useState(1);
  const [count, setCount] = useState(1);
  const [leaves, setLeaves] = useState([]);
  const PAGE_SIZE = 10;
  const getLeaveList = () => {
    showLoader();
    const year = dayjs().year();
    let filterQuery = `?pageNumber=${page}&pageSize=${PAGE_SIZE}&year=${year}&EmployeeIds[0]=${Helper.getCurrentEmployeeId()}`;
    if (status != "All") {
      filterQuery += `&status=${status}`;
    }
    api
      .get("api/v1/leave/get-paginated/" + filterQuery)
      .then((res) => {
        setLeaves(res?.data?.data?.data);
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
    getLeaveList();
  }, [page, status]);

  return (
    <>
      {leaves.length
        ? leaves.map((row, i) => (
            <Box
              key={i}
              sx={{
                margin: "30px 0",
                padding: "16px 10px",
                backgroundColor: "#fff",
                borderRadius: "8px",
                fontSize: "14px",
              }}
            >
              <Box className="flex flex-between" mb={2}>
                <span className="text-muted">Leave Id</span>
                <span>#{row.id}</span>
              </Box>
              <Box className="flex flex-between" mb={2}>
                <span className="text-muted">Leave Type</span>
                <span>{row?.leaveType?.title}</span>
              </Box>
              <Box className="flex flex-between" mb={2}>
                <span className="text-muted">Date</span>
                <span>
                  {row.forSingleDay ? row.from : row.form + " to " + row.to}
                </span>
              </Box>
              <Box className="flex flex-between" mb={2}>
                <span className="text-muted">Status</span>
                <span>{row.status}</span>
              </Box>
            </Box>
          ))
        : <p className="text-muted">No record found</p>}
      {leaves.length ? (
        <Paginate count={count} page={page} onPageChange={(p) => setPage(p)} />
      ) : undefined}
    </>
  );
}
