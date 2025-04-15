import { Box, Select, MenuItem, Button } from "@mui/material";
import Heading from "../../common/Heading";
import { useEffect, useState } from "react";
import api from "../../../services/api";
import { useLoader } from "../../../utils/context/LoaderContext";
import Helper from "../../../utils/helper";
import RosterFilter from "./RosterFilter";
import RosterDrawer from "./RosterDrawer";

export default function RosterList() {
  //Default Constant Variables
  const PAGE_SIZE = 10;
  const { startOfWeek, endOfWeek } = Helper.getWeekRange();

  //Loader
  const { showLoader, hideLoader } = useLoader();

  //filter form
  const [showFilter, setShowFilter] = useState(false);

  const [sort, setSort] = useState("emp");

  //drawer
  const [drawer, setDrawer] = useState(false);
  const toggleDrawer = (isOpen) => {
    setDrawer(isOpen);
  };

  // Component State
  const [pageNumber, setPageNumber] = useState(1);
  const [rosterItems, setRosterItems] = useState([]);
  const [dateRange, setDateRange] = useState(
    Helper.getDateRange(startOfWeek, endOfWeek)
  );
  const [employeeList, setEmployeeList] = useState();

  //UI Event Handlers
  const handleRosterClick = () => {
    setDrawer(true);
  };

  /**API  Function Call */
  // Get Roster List
  // On Default Fetched Employee List With Pagination With Roster Details
  const getRosterList = (filterQuery = "") => {
    showLoader();

    //By Default Show Roster For This Week For All Employees
    if (!filterQuery) {
      filterQuery = `From=${startOfWeek}&To=${endOfWeek}&pageNumber=${pageNumber}&pageSize=${PAGE_SIZE}`;
    }
    api
      .get(`/api/v1/roster?${filterQuery}`, {
        headers: {
          MyName: "Sujan",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      })
      .then((res) => {
        setRosterItems(() => res?.data?.data?.data);
      })
      .catch((err) => {
        console.error(err);
      })
      .finally(() => {
        hideLoader();
      });
  };

  const handleFilter = (filterQuery) => {
    if (filterQuery) {
      filterQuery = `${filterQuery}&pageNumber=${pageNumber}&pageSize=${PAGE_SIZE}`;
      getRosterList(filterQuery);
    } else {
      getRosterList();
    }
  };

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

  // Get Roster Based On Array Index & Particular Date
  // Roster Fetched From :  RosterItems[]
  const getRosterByDate = (employeeId, date) => {
    const employee = rosterItems.find((x) => x.id == employeeId);
    if (!employee) {
      return [];
    }

    if (!employee?.rosterItems?.length) {
      return [];
    }

    var filtered = employee?.rosterItems?.filter(
      (roster) => roster.date.toString() == date.toString()
    );

    return filtered;
  };

  // Roster Cell Component
  const RosterCell = ({ employeeId, date }) => {
    const shiftList = getRosterByDate(employeeId, date);
    //console.log(shiftList)
    return (
      <td>
        {shiftList.length ? (
          <div
            className={`roster-cell ${shiftList.length ? "active" : ""}`}
            onClick={handleRosterClick}
          >
            {shiftList.map((shift, i) => {
              return (
                <p key={i} className="roster-individual-shift">
                  {shift.startTime + "-" + shift.endTime}
                </p>
              );
            })}
          </div>
        ) : undefined}
      </td>
    );
  };

  //

  useEffect(() => {
    getRosterList();
  }, []);

  useEffect(() => {
    getEmployeeList();
  }, []);

  return (
    <Box sx={{ backgroundColor: "#fff", borderRadius: "8px" }}>
      <div className="roster-list-header">
        <div className="flex flex-between flex-center">
          <span style={{ visibility: "visible" }} className="text-muted">
            Showing Shifts From <span>{` `}</span>
            <span style={{ color: "#000", fontWeight: 500 }}>
              {dateRange[0].date}
            </span>
            <span>{` `}</span>to
            <span style={{ color: "#000", fontWeight: 500 }}>
              <span>{` `}</span>
              {dateRange[dateRange.length - 1].date}
            </span>
          </span>
          <Button
            variant="text"
            size="sm"
            color="primary"
            sx={{ textTransform: "capitalize" }}
            onClick={() => setShowFilter(!showFilter)}
          >
            <span>{showFilter ? "Hide" : "Show"} Filter</span>
          </Button>
        </div>

        {showFilter ? (
          <RosterFilter
            setDateRange={setDateRange}
            onFilter={handleFilter}
            employeeList={employeeList}
          />
        ) : (
          ""
        )}
      </div>

      <Box sx={{ padding: "10px 16px" }}>
        <div className="roster-list-body">
          <div className="base-table-wrap">
            <table className="base-table roster-table">
              <thead>
                <tr>
                  <th>
                    <div className="inline-flex" style={{ width: "180px" }}>
                      {/* <span className="text-muted">View By</span> */}
                      <Select
                        label="View By"
                        labelId="roster-sort-by-label"
                        id="view-by"
                        value={sort}
                        sx={{ color: "#000", fontWeight: "600" }}
                        onChange={(e) => setSort(e.target.value)}
                      >
                        <MenuItem value="emp">Employee</MenuItem>
                        <MenuItem value="job">Job</MenuItem>
                      </Select>
                    </div>
                  </th>
                  {dateRange.length &&
                    dateRange.map((range, i) => (
                      <th key={i}>
                        <div className="roster-date-range">
                          <p>
                            {new Date(range.date)
                              .toISOString()
                              .slice(5, 10)
                              .replace("-", "/")}
                          </p>
                          <p>{range.day}</p>
                        </div>
                      </th>
                    ))}
                </tr>
              </thead>
              <tbody>
                {rosterItems.length > 0 ? (
                  rosterItems.map((emp, i) => (
                    <tr key={i}>
                      <td>
                        <a href="" style={{ color: "#000", fontWeight: "400" }}>
                          <p>#{emp.id}</p>
                          <p>{emp?.user?.fullName}</p>
                        </a>
                      </td>
                      {dateRange.length &&
                        dateRange.map((range, i) => (
                          <RosterCell
                            key={i}
                            employeeId={emp.id}
                            date={range.date}
                          />
                        ))}
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td>No Record Found</td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
        <RosterDrawer drawer={drawer} toggleDrawer={toggleDrawer} />
      </Box>
    </Box>
  );
}
