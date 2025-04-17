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
import AddIcon from "@mui/icons-material/Add";

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
    <div style={{ padding: "2rem" }}>
      <BaseLayout>
        <Box
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: "15px",
          }}
        >
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
            <AddIcon sx={{ marginRight: "10px" }} /> Update profile
          </Button>
        </Box>
        <Grid className="content-box" container>
          <Grid size={{ md: 4 }}>
            <ProfileCard employee={employee} />
          </Grid>
          <Grid size={{ md: 8 }}>
            <GeneralDetails employee={employee} />
            <Divider sx={{ margin: "0px 24px" }} />
            <OtherDetails employee={employee} />
          </Grid>
        </Grid>
      </BaseLayout>
    </div>
  );
};

export default EmployeeDetail;
