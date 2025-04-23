import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import api from "../../../../services/api";

import ProfileCard from "./partials/ProfileCard";
import GeneralDetails from "./partials/GeneralDetails";
import OtherDetails from "./partials/OtherDetails";
import BaseLayout from "../../../../components/common/BaseLayout";
import { ToastMessage } from "../../../../components/common/ToastNotification";
import { useLoader } from "../../../../utils/context/LoaderContext";
import Heading from "../../../../components/common/Heading";
import { Box, Button, Divider, Grid2 as Grid } from "@mui/material";
import AddIcon from "@mui/icons-material/EditOutlined";

const EmployeeDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [employee, setEmployee] = useState(null);
  const { showLoader, hideLoader } = useLoader();

  // const handlePreofileUpdate = () => {
  //   navigate(`/update-employee-profile/${id}`);
  // };

  useEffect(() => {
    showLoader();
    api
      .get(`/api/v1/employee/${id}`)
      .then((res) => {
        setEmployee(res?.data?.data);
        hideLoader();
      })
      .catch((err) => {
        ToastMessage("error", err?.response?.data?.message);
        hideLoader();
      });
  }, [id]);

  return (
    <BaseLayout>
      <Box className="content-top flex flex-between flex-center">
        <Heading title="Employee Detail" />
        <Button
          variant="outlined"
          color="primary"
          size="sm"
          sx={{
            fontSize: "14px",
            fontWeight: "500",
            textTransform: "none",
          }}
          onClick={() => navigate(`/update-employee-profile/${id}`)}
        >
          <AddIcon sx={{ marginRight: "10px" }} /> Update Profile
        </Button>
      </Box>
      <Box className="content-box">
        <Grid container columns={12} spacing={1}>
          <Grid size={{ md: 4, sm: 12 }} sx={{ mb: 2 }}>
            <ProfileCard employee={employee} className="profile-card" />
          </Grid>
          <Grid size={{ md: 8, sm: 12 }} sx={{ mb: 2 }}>
            <Box
              sx={{ p: 0, background: "#fafafa", borderRadius: "8px" }}
              className="detail-box"
            >
              <GeneralDetails employee={employee} />
              <Divider sx={{ margin: "0px 24px" }} />
              <OtherDetails employee={employee} />
            </Box>
          </Grid>
        </Grid>
      </Box>
    </BaseLayout>
  );
};

export default EmployeeDetail;
