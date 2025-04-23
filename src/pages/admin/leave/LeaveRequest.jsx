import React, { useEffect, useState } from "react";
import { Box, Typography, Paper, Button, TextField } from "@mui/material";
import ErrorIcon from "@mui/icons-material/Error";
import BaseLayout from "../../../components/common/BaseLayout";
import Heading from "../../../components/common/Heading";
import { useParams } from "react-router-dom";
import api from "../../../services/api";
import { ToastMessage } from "../../../components/common/ToastNotification";
import { useLoader } from "../../../utils/context/LoaderContext";

const LeaveRequest = () => {
  const { id } = useParams();
  const [leave, setLeave] = useState();
  const { showLoader, hideLoader } = useLoader();

  const getLeaveByID = () => {
    showLoader();
    api
      .get(`/api/v1/leave/${id}`)
      .then((res) => {
        setLeave(res?.data?.data);
        console.log("aleave datya", leave);
      })
      .catch((err) => {
        ToastMessage("error", err?.response?.data?.message);
      })
      .finally(() => hideLoader());
  };
  useEffect(() => {
    getLeaveByID();
  }, [id]);

  return (
    <BaseLayout>
      <Box className="content-top">
        <Heading title="Leave Request" />
      </Box>
      <Box>
        <Box className="content-box">
          <Box
            sx={{
              margin: "0 30px",
              height: "776px",
              backgroundColor: "#FBFBFB",
            }}
          >
            <Box>
              <Box
                sx={{
                  padding: "50px",
                  display: "grid",
                  gridTemplateColumns: "auto 1fr",
                  rowGap: 1.5, // Adds space between rows
                  columnGap: 25, // Adds space between columns
                  //   border: "1px solid red",
                  margin: "0 30px",
                }}
              >
                <Typography sx={{ fontWeight: "500", fontSize: "14px" }}>
                  Requested By:
                </Typography>
                <Typography sx={{ fontWeight: "500", fontSize: "14px" }}>
                  {leave?.employee?.employeeName}
                </Typography>

                <Typography sx={{ fontWeight: "500", fontSize: "14px" }}>
                  Leave Type:
                </Typography>
                <Typography sx={{ fontWeight: "500", fontSize: "14px" }}>
                  {leave?.leaveType?.title}
                </Typography>

                <Typography sx={{ fontWeight: "500", fontSize: "14px" }}>
                  Date:
                </Typography>
                <Typography sx={{ fontWeight: "500", fontSize: "14px" }}>
                  Dec 15, 2024
                </Typography>

                <Typography sx={{ fontWeight: "500", fontSize: "14px" }}>
                  Status:
                </Typography>
                <Typography
                  sx={{ color: "green", fontWeight: "500", fontSize: "14px" }}
                >
                  {leave?.status}
                </Typography>
                <Typography sx={{ fontWeight: "500", fontSize: "14px" }}>
                  Notes:
                </Typography>
                <Typography sx={{ fontWeight: "500", fontSize: "14px" }}>
                  {leave?.notes ? leave.notes : " N / A"}
                </Typography>

                {leave?.status == "Rejected" ? (
                  <Box>
                    <Typography sx={{ fontWeight: "500", fontSize: "14px" }}>
                      Reject Reason:
                    </Typography>
                    <Typography sx={{ fontWeight: "500", fontSize: "14px" }}>
                      {leave?.rejectReason}
                    </Typography>
                  </Box>
                ) : (
                  ""
                )}
              </Box>

              {/* <Box
                sx={{
                  backgroundColor: "#ffe6e6",
                  color: "black",
                  p: 3, // Adjust padding for better spacing
                  margin: "30px 80px",
                  borderRadius: 2,
                  display: "flex",
                  alignItems: "center", // Ensures vertical centering
                  justifyContent: "center", // Centers content horizontally
                  gap: 2, // Adds space between icon & text
                }}
              >
                <ErrorIcon sx={{ color: "red", fontSize: 80 }} />
                <Typography textAlign="center">
                  The request creates a roster conflict for{" "}
                  <span style={{ color: "green", fontWeight: "bold" }}>
                    Office Cleaning At Lakemba
                  </span>{" "}
                  on the date requested.
                </Typography>
              </Box> */}

              <Box sx={{ display: "flex", gap: 3, margin: "10px 80px" }}>
                <Button sx={{ backgroundColor: "#1E7E51", width: "244px" }}>
                  <Typography sx={{ color: "white", textTransform: "none" }}>
                    Approve Leave Request
                  </Typography>
                </Button>
                <Button sx={{ backgroundColor: "#ff0000", width: "244px" }}>
                  <Typography sx={{ color: "#fff", textTransform: "none" }}>
                    {" "}
                    Reject Request
                  </Typography>
                </Button>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </BaseLayout>
  );
};

export default LeaveRequest;
