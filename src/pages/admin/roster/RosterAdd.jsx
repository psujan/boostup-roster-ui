import { Box, Button } from "@mui/material";
import Heading from "../../../components/common/Heading.jsx";
import BaseLayout from "../../../components/common/BaseLayout.jsx";
import ListIcon from "@mui/icons-material/NorthEast";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import api from "../../../services/api.jsx";
import RosterAddForm from "./partials/RosterAddForm.jsx";
import { useLoader } from "../../../utils/context/LoaderContext.jsx";

export default function RosterAdd() {
  const navigate = useNavigate();
  const { showLoader, hideLoader } = useLoader();

  const [employeeList, setEmployeeList] = useState([]);
  const [jobs, setJobs] = useState([]);

  //api call
  // Get All Employee List without pagination for dropdown select
  const getEmployeeList = () => {
    showLoader();
    api
      .get("api/v1/employee/get-all")
      .then((res) => {
        const rows = res?.data?.data;
        setEmployeeList(rows);
      })
      .catch((err) => {
        console.error("Error in Fetching Employee List", err);
      })
      .finally(() => {
        hideLoader();
      });
  };

  const getJobList = () => {
    showLoader();
    api
      .get("api/v1/job/get-all")
      .then((res) => {
        const rows = res?.data?.data;
        setJobs(rows);
      })
      .catch((err) => {
        console.error("Error in Fetching Employee List", err);
      })
      .finally(() => {
        hideLoader();
      });
  };

  useEffect(() => {
    getEmployeeList();
    getJobList();
  }, []);

  return (
    <BaseLayout>
      <Box className="content-top flex flex-between flex-center">
        <Heading title="Add Roster" />
        <Button
          variant="outlined"
          color="primary"
          size="sm"
          sx={{
            fontSize: "14px",
            fontWeight: "500",
            textTransform: "none",
          }}
          onClick={() => navigate("/roster")}
        >
          View All
          <ListIcon sx={{ marginLeft: "10px" }} />
        </Button>
      </Box>
      <RosterAddForm jobs={jobs} employeeList={employeeList} />
    </BaseLayout>
  );
}
