import {
  Box,
  Button,
  FormControl,
  MenuItem,
  Select,
} from "@mui/material";
import BackButton from "../../../components/common/BackButton";
import EmployeeLeaveLists from "./partials/EmployeeLeaveLists";
import { useState } from "react";
import dayjs from "dayjs";
export default function EmployeeLeaveRequests() {
  const [status, setStatus] = useState("All");
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
          <div className="flex flex-center">
            <Button
              variant="text"
              color="primary"
              size="small"
              sx={{ marginRight: "4px" }}
            >
              Year : {dayjs().year()}
            </Button>
            <FormControl sx={{ m: 0, minWidth: 120 }} size="small">
              {/* <InputLabel id="select-status-leave">Age</InputLabel> */}
              <Select
                sx={{ border: "1px solid #d9d9d9", borderRadius: "6px" }}
                labelId="select-status-leave"
                id="demo-select-small"
                value={status}
                label="Age"
                onChange={(e) => setStatus(e.target.value)}
              >
                <MenuItem value={"All"}>All</MenuItem>
                <MenuItem value={"Pending"}>Pending</MenuItem>
                <MenuItem value={"Accepted"}>Accepted</MenuItem>
                <MenuItem value={"Rejected"}>Rejected</MenuItem>
              </Select>
            </FormControl>
          </div>
        </Box>
        <EmployeeLeaveLists status={status} />
      </Box>
    </>
  );
}
