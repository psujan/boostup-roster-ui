import { useEffect, useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import { Box, Button, Grid2, TextField } from "@mui/material";
// import "../index.css";

import { useNavigate } from "react-router-dom";
import BaseLayout from "../../../components/common/BaseLayout";
import Heading from "../../../components/common/Heading";
import ECard from "../../../components/ECard";
import api from "../../../services/api";
import { useLoader } from "../../../utils/context/LoaderContext";
import Paginate from "../../../components/common/Paginate";
import { ToastMessage } from "../../../components/common/ToastNotification";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";

const AllEmployee = () => {
  const navigate = useNavigate();
  const { showLoader, hideLoader } = useLoader();
  const [employeeData, setEmployeeData] = useState([]);
  const [page, setPage] = useState(1);
  const [count, setCount] = useState(1);
  const pageSize = 12;
  const [pageInfo, setPageInfo] = useState({
    from: 1,
    to: null,
  });

  const [search, setSearch] = useState("");
  const [isSearching, setIsSearching] = useState(false);

  const handleEmployeeAdd = () => {
    navigate("/onboard-staff");
  };
  const onPageChange = (value) => {
    setPage(value);
  };

  const getPaginated = () => {
    showLoader();
    api
      .get(`/api/v1/employee/paginated?pageNumber=${page}&pageSize=${pageSize}`)
      .then((res) => {
        // Ensure data exists and is in the expected format
        if (res?.data?.data) {
          setEmployeeData(res?.data?.data?.data); // Update jobData state
          setCount(res?.data?.data?.totalCount);

          const resultCount = res?.data?.data?.resultCount || pageSize;
          setPageInfo(() => {
            return {
              from: page * pageSize - pageSize + 1,
              to: page * pageSize - pageSize + resultCount,
            };
          });
        }
        hideLoader();
      })
      .catch((err) => {
        ToastMessage("error", err?.response?.data?.message);
        hideLoader();
      });
  };

  useEffect(() => {
    getPaginated();
  }, [page, pageSize]);

  const searchEmployee = () => {
    console.log(search);
    if (search.length == 0) {
      getPaginated();
      return;
    }
    if (search.length <= 3) {
      return;
    }
    setIsSearching(true);
    api
      .get(`/api/v1/employee/search?search=${search}`)
      .then((res) => {
        // Ensure data exists and is in the expected format
        if (res?.data?.data) {
          setEmployeeData(res?.data?.data?.data); // Update jobData state
          setCount(res?.data?.data?.totalCount);

          const resultCount = res?.data?.data?.resultCount || pageSize;
          setPageInfo(() => {
            return {
              from: page * pageSize - pageSize + 1,
              to: page * pageSize - pageSize + resultCount,
            };
          });
        }
      })
      .catch((err) => {
        console.error(err);
      })
      .finally(() => {
        setIsSearching(false);
      });
  };

  useEffect(() => {
    searchEmployee();
  }, [search]);

  return (
    <BaseLayout>
      <Box className="content-top flex flex-center flex-between">
        <Heading title={"Employees"} />
        <Box display="flex">
          <Box sx={{ marginRight: "6px" }}>
            <TextField
              size="small"
              placeholder="Search by name or id ..."
              onChange={(e) => setSearch(e.target.value)}
              slotProps={{
                input: {
                  endAdornment: <SearchOutlinedIcon color="#666" />,
                },
              }}
            />
          </Box>
          <Button
            variant="outlined"
            color="primary"
            size="sm"
            sx={{
              fontSize: "14px",
              fontWeight: "500",
              textTransform: "none",
            }}
            onClick={handleEmployeeAdd}
          >
            <AddIcon sx={{ marginRight: "10px" }} /> Onboard
          </Button>
        </Box>
      </Box>
      <Box className="content-box">
        {isSearching ? (
          <div>
            <p className="text-muted">Searching ...</p>
          </div>
        ) : (
          ""
        )}
        {employeeData.length ? (
          <div>
            <p className="text-muted" style={{ marginBottom: "15px" }}>
              Showing {pageInfo.from} - {pageInfo.to} of {count} records
            </p>
          </div>
        ) : undefined}
        <Grid2
          container
          columns={12}
          spacing={3}
          sx={{
            justifyContent: "flex-start", // or "center" if you want centering
          }}
        >
          {employeeData.length ? (
            employeeData.map((emp) => (
              <Grid2 md={3} lg={3} key={emp.id}>
                <ECard emp={emp} />
              </Grid2>
            ))
          ) : (
            <Grid2 item sm={12} md={4} lg={3}>
              No Record Found
            </Grid2>
          )}
        </Grid2>
        {employeeData?.length ? (
          <Paginate count={count} page={page} onPageChange={onPageChange} />
        ) : undefined}
      </Box>
    </BaseLayout>
  );
};

export default AllEmployee;
