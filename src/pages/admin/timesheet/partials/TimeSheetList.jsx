import { useEffect, useState } from "react";
import { Box } from "@mui/material";
import api from "../../../../services/api";
import { useLoader } from "../../../../utils/context/LoaderContext";
import { ToastMessage } from "../../../../components/common/ToastNotification";
import Paginate from "../../../../components/common/Paginate";

export default function TimeSheetList() {
  const { showLoader, hideLoader } = useLoader();
  const [timeSheet, setTimeSheet] = useState([]);
  const [page, setPage] = useState(1);
  const [count, setCount] = useState(1);
  const [pageInfo, setPageInfo] = useState({ from: 1, to: null });
  const pageSize = 20;

  const getTimeSheet = () => {
    showLoader();
    api
      .get(
        `/api/v1/timesheet/get-paginated?pageNumber=${page}&pageSize=${pageSize}`
      )
      .then((res) => {
        if (res?.data?.data) {
          setTimeSheet(res?.data?.data?.data);
          setCount(res?.data?.data?.totalCount);
          const resultCount = res?.data?.data?.resultCount || pageSize;
          setPageInfo(() => {
            return {
              from: page * pageSize - pageSize + 1,
              to: page * pageSize - pageSize + resultCount,
            };
          });
        }
      })
      .catch((err) => {
        ToastMessage(
          "error",
          err?.response?.data?.message || "Something Went Wrong"
        );
      })
      .finally(() => {
        hideLoader();
      });
  };

  const onPageChange = (p) => setPage(p);

  useEffect(() => {
    getTimeSheet()
  }, [page]);
  
  return (
    <Box className="content-box">
      {timeSheet.length ? (
        <div>
          <p className="text-muted" style={{ marginBottom: "15px" }}>
            Showing {pageInfo.from} - {pageInfo.to} of {count} records
          </p>
        </div>
      ) : undefined}
      <div className="base-table-wrap">
        <table className="base-table">
          <thead>
            <tr>
              <th>Id</th>
              <th>Employee</th>
              <th>Job</th>
              <th>Date</th>
              <th>ClockIn</th>
              <th>ClockOut</th>
              <th>Total Hours</th>
            </tr>
          </thead>
          <tbody>
            {timeSheet.length ? (
              timeSheet.map((row) => (
                <tr key={row.id}>
                  <td>{row.id}</td>
                  <td>{row?.employee?.employeeName}</td>
                  <td>{row?.job?.title}</td>
                  <td>{row?.date}</td>
                  <td>{row?.clockIn}</td>
                  <td>{row?.clockIn}</td>
                  <td>{row.totalHours}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={7}>No Record Found</td>
              </tr>
            )}
            <tr></tr>
          </tbody>
        </table>
      </div>
      {timeSheet.length ? (
        <Paginate count={count} page={page} onPageChange={onPageChange} />
      ) : undefined}
    </Box>
  );
}
