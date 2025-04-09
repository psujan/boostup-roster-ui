import { Box, Select, MenuItem, Drawer, Divider } from "@mui/material";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import Heading from "../common/Heading";
import { useEffect, useState } from "react";
import SwapHorizOutlinedIcon from "@mui/icons-material/SwapHorizOutlined";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import api from "../../services/api";
import { useLoader } from "../../utils/context/LoaderContext";
import Helper from "../../utils/helper";
//import dayjs from 'dayjs';

export default function RosterList() {
  const [from, setFrom] = useState();
  const [to, setTo] = useState();
  const [sort, setSort] = useState("emp");
  const [drawer, setDrawer] = useState(false);
  const { showLoader, hideLoader } = useLoader();
  const toggleDrawer = (isOpen) => {
    setDrawer(isOpen);
  };

  const handleRosterClick = () => {
    setDrawer(true);
  };
  const [pageNumber, setPageNumber] = useState(1);
  const [rosterItems, setRosterItems] = useState([]);
  const PAGE_SIZE = 10;
  const { startOfWeek, endOfWeek } = Helper.getWeekRange();
  const dateRange = Helper.getDateRange(startOfWeek, endOfWeek);

  // Get Roster List
  // On Default Fetched Employee List With Pagination With Roster Details
  const getRosterList = () => {
    showLoader();
    const filterQuery = `From=${startOfWeek}&To=${endOfWeek}&pageNumber=${pageNumber}&pageSize=${PAGE_SIZE}`;
    api
      .get(`/api/v1/roster?${filterQuery}`)
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
  return (
    <Box sx={{ backgroundColor: "#fff", borderRadius: "8px" }}>
      <div className="flex flex-center flex-between roster-list-header">
        <Heading title="Roster Details" />
        <div>
          <div className="flex-inline">
            <span style={{ paddingRight: "4px" }} className="text-muted">
              From
            </span>
            <DatePicker
              className="datepicker-roster-filter"
              value={from}
              sx={{ padding: "4px", height: "20px" }}
              onChange={(v) => setFrom(v)}
            />
          </div>

          <div className="flex-inline" style={{ paddingLeft: "8px" }}>
            <span style={{ paddingRight: "4px" }} className="text-muted">
              To
            </span>
            <DatePicker
              className="datepicker-roster-filter"
              value={to}
              sx={{ padding: "4px", height: "20px" }}
              onChange={(v) => setTo(v)}
            />
          </div>
        </div>
      </div>
      <Box sx={{ padding: "10px 16px" }}>
        <div className="roster-list-body">
          <div className="base-table-wrap">
            <table className="base-table roster-table">
              <thead>
                <tr>
                  <th>
                    <div className="inline-flex" style={{ width: "180px" }}>
                      <span className="text-muted">View By</span>
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
                        <a href="" style={{ color: "#1e7e51" }}>
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
        <Drawer
          open={drawer}
          anchor="right"
          sx={{ zIndex: 1202 }}
          onClose={() => toggleDrawer(false)}
        >
          <Box
            sx={{ width: 350 }}
            role="presentation"
            onClick={() => toggleDrawer(false)}
          >
            <Box sx={{ padding: "20px 10px" }}>
              <Heading title="Shift Details"></Heading>
              <Divider sx={{ margin: "10px 0" }}></Divider>
              <ul className="drawer-shift-details">
                <li>
                  <div className="flex flex-between flex-center">
                    <h6>Employee Name</h6>
                    <p>Sujan Poudel</p>
                  </div>
                </li>
                <li>
                  <div className="flex flex-between flex-center">
                    <h6>Roster Date</h6>
                    <p>2025-03-01 (Mon)</p>
                  </div>
                </li>
              </ul>
              <Heading title="Assigned Shifts (2)"></Heading>
              <Divider sx={{ margin: "10px 0" }}></Divider>
              <div className="shift-items-wrap">
                <div className="shift-detail flex flex-center flex-between">
                  <span className="text-muted">Roster Id</span>
                  <span>#43</span>
                </div>

                <div className="shift-detail flex flex-center flex-between">
                  <span className="text-muted">Job Title</span>
                  <span>Bar Cleaning</span>
                </div>
                <div className="shift-detail flex flex-center flex-between">
                  <span className="text-muted">Shift Period</span>
                  <span>6:00AM- 2:00PM (8hrs)</span>
                </div>
                <div className="shift-action flex flex-center flex-between">
                  <button>
                    <SwapHorizOutlinedIcon sx={{ fontSize: "14px" }} />
                    Swap
                  </button>
                  <button className="btn-remove">
                    <DeleteOutlineOutlinedIcon sx={{ fontSize: "14px" }} />{" "}
                    Remove
                  </button>
                </div>
              </div>
              <div className="shift-items-wrap">
                <div className="shift-detail flex flex-center flex-between">
                  <span className="text-muted">Roster Id</span>
                  <span>#43</span>
                </div>

                <div className="shift-detail flex flex-center flex-between">
                  <span className="text-muted">Job Title</span>
                  <span>Bar Cleaning</span>
                </div>
                <div className="shift-detail flex flex-center flex-between">
                  <span className="text-muted">Shift Period</span>
                  <span>6:00AM- 2:00PM (8hrs)</span>
                </div>
                <div className="shift-action flex flex-center flex-between">
                  <button>
                    <SwapHorizOutlinedIcon sx={{ fontSize: "14px" }} />
                    Swap
                  </button>
                  <button className="btn-remove">
                    <DeleteOutlineOutlinedIcon sx={{ fontSize: "14px" }} />{" "}
                    Remove
                  </button>
                </div>
              </div>
            </Box>
          </Box>
        </Drawer>
      </Box>
    </Box>
  );
}
