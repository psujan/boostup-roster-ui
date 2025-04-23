import React, { useEffect, useState } from "react";
import Paginate from "../../../../components/common/Paginate";
import DeleteModal from "../../../../components/common/Deletemodal";
import { Box, Button, Divider } from "@mui/material";
import { useLoader } from "../../../../utils/context/LoaderContext";
import api from "../../../../services/api";
import { useNavigate, useParams } from "react-router-dom";
import { ToastMessage } from "../../../../components/common/ToastNotification";

const AllLeaveTable = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [page, setPage] = useState(1);
  const [count, setCount] = useState(1);
  const [open, setOpen] = useState();
  const [deleteId, setDeleteId] = useState();
  const [leaveData, setLeavedata] = useState();
  const { showLoader, hideLoader } = useLoader();

  const pageSize = 10;
  const [pageInfo, setPageInfo] = useState({
    from: 1,
    to: null,
  });
  const onPageChange = (value) => {
    setPage(value);
  };

  const getLeaveList = () => {
    showLoader();
    api
      .get(
        `/api/v1/leave/get-paginated?pageNumber=${page}&pageSize=${pageSize}`
      )
      .then((res) => {
        // Ensure data exists and is in the expected format
        if (res?.data?.data) {
          setLeavedata(res?.data?.data?.data); // Update leaveData state
          setCount(res?.data?.data?.totalCount);
          console.log("chjedk", leaveData);
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
        ToastMessage("error", err?.response?.data?.message);
      })
      .finally(() => {
        hideLoader();
      });
  };

  // Fetch data on page change
  useEffect(() => {
    getLeaveList();
  }, [page]);

  // vieew single leave
  const handleView = (id) => {
    navigate(`/leave-request/${id}`);
  };

  // delete leave data item
  const handleDeleteModal = (id) => {
    setDeleteId(id);
    setOpen(true);
    console.log("Delhanlp", deleteId);
  };
  const confirmDelete = (del) => {
    setOpen(false);
    if (!del) {
      setDeleteId(undefined);
      return;
    }
    console.log("first", del);
    handleDelete(deleteId);
  };

  const handleDelete = (id) => {
    showLoader();
    api
      .delete(`/api/v1/leave/delete/${id}`)
      .then((res) => {
        const message = res?.data?.message;
        ToastMessage("success", message);
        getLeaveList();
      })
      .catch((err) => {
        ToastMessage("error", err?.response?.data?.message);
      })
      .finally(() => {
        hideLoader();
      });
  };

  return (
    <Box className="content-box">
      {leaveData?.length ? (
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
              <th>Leave Id</th>
              <th>Employee</th>
              <th>Leave Type</th>
              <th>No. of Days</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {leaveData?.length ? (
              leaveData?.map((leave) => (
                <tr key={leave?.id}>
                  <td>{leave?.id}</td>
                  <td>{leave?.employee?.employeeName}</td>
                  <td>{leave?.leaveType?.title}</td>
                  <td>{leave?.leaveType?.days}</td>
                  <td>{leave.status}</td>
                  <td>
                    <Box display="flex" alignItems="center">
                      <Button onClick={() => handleView(leave?.id)}>
                        View
                      </Button>
                      <Divider orientation="vertical" flexItem sx={{ mx: 2 }} />
                      <Button
                        sx={{ color: "red" }}
                        onClick={() => handleDeleteModal(leave?.id)}
                      >
                        Delete
                      </Button>
                    </Box>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={6}>No Record Found</td>
              </tr>
            )}
            <tr></tr>
          </tbody>
        </table>
      </div>
      {leaveData?.length ? (
        <Paginate count={count} page={page} onPageChange={onPageChange} />
      ) : undefined}
      <DeleteModal
        open={open}
        setOpen={setOpen}
        confirmDelete={confirmDelete}
      />
    </Box>
  );
};

export default AllLeaveTable;
