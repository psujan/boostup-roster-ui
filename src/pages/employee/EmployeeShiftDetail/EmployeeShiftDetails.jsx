import { Box, Button, Divider } from "@mui/material";
import ShiftDetails from "./partials/ShiftDetails";
import BackButton from "../../../components/common/BackButton";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import api from "../../../services/api";
import { useLoader } from "../../../utils/context/LoaderContext";
import { useEffect, useState } from "react";
export default function EmployeeShiftDetails() {
  const { showLoader, hideLoader } = useLoader();
  const navigate = useNavigate();
  const { id } = useParams();
  const [shift, setShift] = useState({});
  const getShiftDetail = () => {
    showLoader();
    api
      .get("/api/v1/roster/" + id)
      .then((res) => {
        setShift(res?.data?.data);
      })
      .catch((err) => {
        console.error(err);
      })
      .finally(() => {
        hideLoader();
      });
  };

  useEffect(() => {
    getShiftDetail();
  }, []);

  return (
    <>
      <Box sx={{ margin: "16px 0" }}>
        <BackButton />
      </Box>
      <Box sx={{ marginTop: "30px" }}>
        <Box
          sx={{
            mb: 2,
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <h5 className="heading-5">
            Shift Details <span className="text-muted">#{shift.id}</span>
          </h5>
          <Button
            variant="text"
            color="primary"
            size="small"
            onClick={() => navigate("/shift-history")}
          >
            View All
          </Button>
        </Box>
        <ShiftDetails shift={shift} />
        <Box sx={{ marginTop: "40px" }}>
          <Divider sx={{ margin: "10px 0" }} />

          <Button
            variant="contained"
            color="primary"
            sx={{ width: "100%" }}
            onClick={() =>
              navigate(
                "/employee-leave/add?date=" +
                  shift?.date +
                  "&roster_id=" +
                  shift.id
              )
            }
          >
            <span>I Can't Attend This Shift</span>
          </Button>
        </Box>
      </Box>
    </>
  );
}
