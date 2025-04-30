import React, { useEffect, useState } from "react";
import { Typography, Box } from "@mui/material";
import api from "../../../../services/api";
import Helper from "../../../../utils/helper";
import { useLoader } from "../../../../utils/context/LoaderContext";

const WeeklyStatsCard = () => {
  const { showLoader, hideLoader } = useLoader();
  const[count, setCount] = useState({});

  const getOverview = () => {
    showLoader();
    api
      .get("/api/v1/overview/employee/" + Helper.getCurrentEmployeeId())
      .then((res) => {
        setCount(res?.data?.data);
      })
      .catch((err) => {
        console.error(err);
      })
      .finally(() => {
        hideLoader();
      });
  };

  useEffect(()=>{
    getOverview()
  },[])
  return (
    <Box>
      <Box sx={{ mb: 2 }}>
        <h5 className="heading-5">My Overview</h5>
      </Box>
      <Box
        sx={{
          p: 3,
          backgroundColor: "#fff",
          borderRadius: "8px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          fontSize: "14px",
        }}
      >
        <Box sx={{ textAlign: "center" }}>
          <p className="text-muted" style={{ marginBottom: "10px" }}>
            No Of Shifts
          </p>
          <p style={{ fontWeight: "500" }}>{count?.totalShifts}</p>
        </Box>
        <Box
          sx={{
            backgroundColor: "#ccc",
            width: "60px",
            height: "100%",
            border: "1px solid #ccc",
            transform: "rotate(90deg)",
          }}
        ></Box>
        <Box sx={{ textAlign: "center" }}>
          <p className="text-muted" style={{ marginBottom: "10px" }}>
            Worked Hours
          </p>
          <p style={{ fontWeight: "500" }}>{count?.totalHours}</p>
        </Box>
      </Box>
    </Box>
  );
};

export default WeeklyStatsCard;
