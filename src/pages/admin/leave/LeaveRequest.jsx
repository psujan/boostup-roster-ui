import React, { useEffect, useState } from "react";
import {
  Box,
  Typography,
  Paper,
  Button,
  TextField,
  Divider,
  InputLabel,
} from "@mui/material";
import ErrorIcon from "@mui/icons-material/Error";
import BaseLayout from "../../../components/common/BaseLayout";
import Heading from "../../../components/common/Heading";
import { useNavigate, useParams } from "react-router-dom";
import api from "../../../services/api";
import { ToastMessage } from "../../../components/common/ToastNotification";
import { useLoader } from "../../../utils/context/LoaderContext";

const LeaveRequest = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [leave, setLeave] = useState({});
  const [reject, setReject] = useState(false);
  const { showLoader, hideLoader } = useLoader();
  const [reason, setReason] = useState("");

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

  // accepring or rejecting leave requests
  const handleApprove = (decision) => {
    console.log("nanana", decision);
    let approveData;
    decision === "approve"
      ? (approveData = {
          ...leave,
          status: "Approved",
          rejectReason: "",
        })
      : decision === "reject"
      ? (approveData = {
          ...leave,
          status: "Rejected",
          rejectReason: reason,
        })
      : null;
    showLoader();
    api
      .put(`/api/v1/leave/${id}`, approveData)
      .then((res) => {
        ToastMessage(
          "success",
          res?.data?.message || "Leave Aproved Successfully"
        );
        hideLoader();
        navigate("/leaves");
      })
      .catch((err) => {
        ToastMessage("error", err?.response?.data?.message);
      });
  };
  const handleAccept = () => {
    handleApprove("approve");
  };
  const handleReject = () => {
    if (reason == "") {
      setReject(true);
      ToastMessage("error", "Enter Reject Reason");
    } else {
      handleApprove("reject");
    }
  };

  return (
    <BaseLayout>
      <Box className="content-top">
        <Heading title="Leave Request" />
      </Box>
      <Box className="content-box">
        <Box>
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: "auto 1fr",
              rowGap: 1.5, // Adds space between rows
              columnGap: 25, // Adds space between columns
              //   border: "1px solid red",
              margin: "0 30px",
            }}
          >
            <Typography sx={{ fontWeight: "500", fontSize: "14px" }}>
              Requested By
            </Typography>
            <Typography sx={{ fontWeight: "500", fontSize: "14px" }}>
              {leave?.employee?.employeeName}
            </Typography>
            <Typography sx={{ fontWeight: "500", fontSize: "14px" }}>
              Leave Type
            </Typography>
            <Typography sx={{ fontWeight: "500", fontSize: "14px" }}>
              {leave?.leaveType?.title}
            </Typography>
            <Typography sx={{ fontWeight: "500", fontSize: "14px" }}>
              Date
            </Typography>
            <Typography sx={{ fontWeight: "500", fontSize: "14px" }}>
              {leave?.forSingleDay
                ? leave.from
                : leave?.from + " to " + leave?.to}
            </Typography>
            <Typography sx={{ fontWeight: "500", fontSize: "14px" }}>
              Status
            </Typography>
            <Typography
              sx={{ color: "green", fontWeight: "500", fontSize: "14px" }}
            >
              {leave?.status}
            </Typography>
            <Typography sx={{ fontWeight: "500", fontSize: "14px" }}>
              Notes
            </Typography>
            <Typography sx={{ fontWeight: "500", fontSize: "14px" }}>
              {leave?.notes ? leave.notes : " N / A"}
            </Typography>{" "}
            {leave?.status !== "Approved" || reject ? (
              <Typography sx={{ fontWeight: "500", fontSize: "14px" }}>
                Reject Reason
              </Typography>
            ) : (
              ""
            )}
            {leave?.status == "Rejected" || reject ? (
              <div style={{ display: "flex", columnGap: "5" }}>
                <TextField
                  // className="base-input"
                  sx={{ fontWeight: "500", fontSize: "14px", width: "50%" }}
                  onChange={(e) => setReason(e.target.value)}
                  defaultValue={leave?.rejectReason}
                ></TextField>
              </div>
            ) : (
              ""
            )}
          </Box>

          <br />
          <Box sx={{ display: "flex", gap: 3, margin: "0px, 30px !important" }}>
            <Button
              sx={{
                backgroundColor: "#1E7E51",
                width: "244px",
                color: "white",
                textTransform: "none",
              }}
              onClick={handleAccept}
            >
              Approve Leave Request
            </Button>
            <Button
              sx={{
                backgroundColor: "#ff0000",
                width: "244px",
                color: "#fff",
                textTransform: "none",
              }}
              onClick={handleReject}
            >
              Reject Request
            </Button>
          </Box>
        </Box>
      </Box>
    </BaseLayout>
  );
};

export default LeaveRequest;
