import { Box, Button } from "@mui/material";
import BackButton from "../../../components/common/BackButton";
import EmployeeLeaveForm from "./partials/EmployeeLeaveForm";
import { useNavigate } from "react-router-dom";
export default function EmployeeAddLeave() {
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
          <h5 className="heading-5">Add Leave</h5>
          <Button
            variant="text"
            color="primary"
            size="small"
            onClick={() => navigate("/employee-leaves")}
          >
            View All
          </Button>
        </Box>
        <Box
          sx={{
            margin: "30px 0",
            padding: "16px 10px",
            backgroundColor: "#fff",
            borderRadius: "8px",
          }}
        >
          <EmployeeLeaveForm />
        </Box>
      </Box>
    </>
  );
}
