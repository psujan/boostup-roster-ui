import { Box, Button, Divider } from "@mui/material";
import ShiftDetails from "./partials/ShiftDetails";
import BackButton from "../../../components/common/BackButton";
import { useNavigate } from "react-router-dom";
export default function EmployeeShiftDetails() {
  const navigate = useNavigate();
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
            Shift Details <span className="text-muted">Roster ID : #43</span>
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
        <ShiftDetails />
        <Box sx={{ marginTop: "40px" }}>
          <Divider sx={{ margin: "10px 0" }} />

          <Button
            variant="contained"
            color="primary"
            sx={{ width: "100%" }}
            onClick={() => navigate("/employee-leave/add?roster_id=")}
          >
            <span>I Can't Attend This Shift</span>
          </Button>
        </Box>
      </Box>
    </>
  );
}
