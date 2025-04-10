import React, { useEffect, useState } from "react";
import { Box } from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import ModeEditOutlineIcon from "@mui/icons-material/ModeEditOutline";
import { useNavigate } from "react-router-dom";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import api from "../../../../services/api";
import DeleteModal from "../../../../components/common/Deletemodal";
import { ToastMessage } from "../../../../components/common/ToastNotification";
import Paginate from "../../../../components/common/Paginate";
import { useLoader } from "../../../../utils/context/LoaderContext";
import BasicActions from "../../../../components/common/BasicActions";

export const JobTable = () => {
  const navigate = useNavigate();
  const { showLoader, hideLoader } = useLoader();
  const [jobData, setJobData] = useState([]);
  const [open, setOpen] = useState(false);
  const [idDelete, setIdDelete] = useState(null);
  const [page, setPage] = useState(1);
  const [count, setCount] = useState(1);
  const pageSize = 10;
  const [pageInfo, setPageInfo] = useState({
    from: 1,
    to: null,
  });

  const handleDeleteModal = (id) => {
    setIdDelete(id);
    setOpen(true);
  };

  const handleEdit = (id) => {
    navigate(`/jobs/update-jobs/${id}`);
  };

  const handleDelete = (id) => {
    showLoader();
    api
      .delete(`/api/v1/job/${id}`)
      .then((res) => {
        const message = res?.data?.message;
        setOpen(false);
        ToastMessage("success", message);
      })
      .catch((err) => {
        ToastMessage("error", err?.response?.data?.message);
      })
      .finally(() => {
        hideLoader();
      });
  };

  const onPageChange = (value) => {
    setPage(value);
  };

  // Fetch data on page change
  useEffect(() => {
    showLoader();
    api
      .get(`/api/v1/job/get-paginated?pageNumber=${page}&pageSize=${pageSize}`)
      .then((res) => {
        // Ensure data exists and is in the expected format
        if (res?.data?.data) {
          setJobData(res?.data?.data?.data); // Update jobData state
          setCount(res?.data?.data?.totalCount);
          const resultCount = res?.data?.data?.resultCount || pageSize;
          setPageInfo(() => {
            return {
              from: page * pageSize - pageSize + 1,
              to: page * pageSize - pageSize + resultCount,
            };
          });
        }
        hideLoader();
      })
      .catch((err) => {
        ToastMessage("error", err?.response?.data?.message);
        hideLoader();
      });
  }, [page, open]);

  return (
    <Box className="content-box">
      {jobData.length ? (
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
              <th>Job Id</th>
              <th>Title</th>
              <th>Start Time</th>
              <th>End time</th>
              <th>Address</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {jobData.length ? (
              jobData.map((job) => (
                <tr key={job.id}>
                  <td>{job.id}</td>
                  <td>{job.title}</td>
                  <td>{job.startTime}</td>
                  <td>{job.endTime}</td>
                  <td>{job.jobAddress}</td>
                  <td>
                    <BasicActions
                      onEdit={() => {
                        handleEdit(job.id);
                      }}
                      onDelete={() => handleDeleteModal(job.id)}
                    />
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
      {jobData.length ? (
        <Paginate count={count} page={page} onPageChange={onPageChange} />
      ) : undefined}
      <DeleteModal
        open={open}
        setOpen={setOpen}
        idDelete={idDelete}
        handleDelete={handleDelete}
      />
    </Box>
  );
};

export default JobTable;
