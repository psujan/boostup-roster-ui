import React, { useEffect, useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  IconButton,
  Box,
} from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import ModeEditOutlineIcon from "@mui/icons-material/ModeEditOutline";
import { useNavigate } from "react-router-dom";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import api from "../../../../services/api";
import DeleteModal from "../../../../components/common/Deletemodal";
import { ToastMessage } from "../../../../components/common/ToastNotification";
import Paginate from "../../../../components/common/Paginate";
import { useLoader } from "../../../../utils/context/LoaderContext";

export const JobTable = () => {
  const navigate = useNavigate();
  const { showLoader, hideLoader } = useLoader();

  const [jobData, setJobData] = useState([]);
  const [open, setOpen] = useState(false);
  const [idDelete, setIdDelete] = useState(null);
  const [page, setPage] = useState(1);
  const [count, setCount] = useState(10);

  const handleDeleteModal = (id) => {
    setIdDelete(id);
    setOpen(true);
  };

  const handleDelete = (id) => {
    api
      .delete(`/api/v1/job/${id}`)
      .then((res) => {
        const message = res?.data?.message;
        setOpen(false);
        ToastMessage("success", message);
      })
      .catch((err) => {
        ToastMessage("error", err?.response?.data?.message);
      });
  };

  const onPageChange = (value) => {
    setPage(value);
  };

  // Fetch data on page change
  useEffect(() => {
    showLoader();
    const pageSize = 10;

    api
      .get(`/api/v1/job/get-paginated?pageNumber=${page}&pageSize=${pageSize}`)
      .then((res) => {
        // Ensure data exists and is in the expected format
        console.log("data main", res?.data?.data?.data);
        if (res?.data?.data) {
          setJobData(res?.data?.data?.data); // Update jobData state
        }
        hideLoader();
      })
      .catch((err) => {
        console.log("Error:", err);
        ToastMessage("error", err?.response?.data?.message);
        hideLoader();
      });
  }, [page, open]);

  // Log jobData after it changes
  useEffect(() => {
    console.log("Updated jobData:", jobData);
  }, [jobData, page]);

  return (
    <Box
      sx={{
        padding: "50px 15px",
        borderRadius: "8px",
        backgroundColor: "white",
        height: "659px",
      }}
    >
      <TableContainer
        component={Paper}
        sx={{ margin: "0 15px", paddingRight: "10px" }}
      >
        <Table>
          <TableHead>
            <TableRow sx={{ backgroundColor: "lightgrey", height: "30px" }}>
              <TableCell
                sx={{
                  border: "1px solid lightgrey",
                  padding: "15px 10px",
                  textAlign: "center",
                }}
              >
                # Event Id
              </TableCell>
              <TableCell
                sx={{
                  border: "1px solid lightgrey",
                  padding: "15px 10px",
                  textAlign: "center",
                }}
              >
                Title
              </TableCell>
              <TableCell
                sx={{
                  border: "1px solid lightgrey",
                  padding: "15px 10px",
                  textAlign: "center",
                }}
              >
                Start Time
              </TableCell>
              <TableCell
                sx={{
                  border: "1px solid lightgrey",
                  padding: "15px 10px",
                  textAlign: "center",
                }}
              >
                End Time
              </TableCell>
              <TableCell
                sx={{
                  border: "1px solid lightgrey",
                  padding: "15px 10px",
                  textAlign: "center",
                }}
              >
                Job Address
              </TableCell>
              <TableCell
                sx={{
                  border: "1px solid lightgrey",
                  padding: "15px 10px",
                  textAlign: "center",
                }}
              >
                Notes
              </TableCell>
              <TableCell
                sx={{
                  border: "1px solid lightgrey",
                  padding: "15px 10px",
                  textAlign: "center",
                }}
              >
                Actions
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {jobData?.length !== 0 ? (
              jobData?.map((event) => (
                <TableRow key={event.id} sx={{ height: "30px" }}>
                  <TableCell
                    sx={{
                      border: "1px solid lightgrey",
                      padding: "15px 8px",
                      textAlign: "center",
                    }}
                  >
                    {event.id}
                  </TableCell>
                  <TableCell
                    sx={{
                      border: "1px solid lightgrey",
                      padding: "15px 8px",
                      textAlign: "center",
                    }}
                  >
                    {event.title}
                  </TableCell>
                  <TableCell
                    sx={{
                      border: "1px solid lightgrey",
                      padding: "4px 8px",
                      textAlign: "center",
                    }}
                  >
                    {event?.startTime}
                  </TableCell>
                  <TableCell
                    sx={{
                      // color: event.rosterPlan.includes("Unscheduled")
                      //   ? "red"
                      //   : "green",
                      border: "1px solid lightgrey",
                      padding: "4px 8px",
                      textAlign: "center",
                    }}
                  >
                    {event?.endTime}
                  </TableCell>
                  <TableCell
                    sx={{
                      border: "1px solid lightgrey",
                      padding: "4px 8px",
                      textAlign: "center",
                    }}
                  >
                    {event?.jobAddress}
                  </TableCell>
                  <TableCell
                    sx={{
                      border: "1px solid lightgrey",
                      padding: "4px 8px",
                      textAlign: "center",
                    }}
                  >
                    {event?.notes}
                  </TableCell>
                  <TableCell
                    sx={{
                      border: "1px solid lightgrey",
                      padding: "4px 8px",
                      textAlign: "center",
                    }}
                  >
                    <IconButton
                      size="small"
                      onClick={() => navigate(`/jobs/update-jobs/${event?.id}`)}
                      sx={{ color: "var(--primaryColor)", fontSize: "14px" }}
                    >
                      <ModeEditOutlineIcon />
                      Edit
                    </IconButton>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <IconButton
                      size="small"
                      onClick={() => handleDeleteModal(event.id)}
                      sx={{ color: "#FF0000", fontSize: "14px" }}
                    >
                      <DeleteForeverIcon />
                      Delete
                    </IconButton>
                  </TableCell>
                </TableRow>
              ))
            ) : (
              <TableRow
                sx={{
                  height: "30px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  color: "grey",
                }}
              >
                No Table Data Found
              </TableRow>
            )}
          </TableBody>
        </Table>
      </TableContainer>
      <DeleteModal
        open={open}
        setOpen={setOpen}
        idDelete={idDelete}
        handleDelete={handleDelete}
      />
      <Paginate count={count} page={page} onPageChange={onPageChange} />
    </Box>
  );
};

export default JobTable;
