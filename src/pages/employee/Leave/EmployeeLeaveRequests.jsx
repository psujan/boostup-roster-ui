import { Box, Button } from "@mui/material";
import BackButton from "../../../components/common/BackButton";
import EmployeeLeaveLists from "./partials/EmployeeLeaveLists";
export default function EmployeeLeaveRequests() {
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
          <h5 className="heading-5">My Leave Requests</h5>
          <Button variant="text" color="primary" size="small">
            Year : 2025
          </Button>
        </Box>
        <EmployeeLeaveLists />
      </Box>
    </>
  );
}
