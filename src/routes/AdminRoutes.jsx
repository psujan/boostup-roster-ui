import { Route, Routes } from "react-router-dom";
import Dashboard from "../pages/admin/dashboard/Dashboard";
import ScheduleShift from "../pages/admin/ScheduleShift";
import JobPage from "../pages/admin/jobs/JobPage";
import AddJob from "../pages/admin/jobs/AddJob";
import EditJob from "../pages/admin/jobs/EditJob";
import AllEmployee from "../pages/admin/employee/AllEmployee";
import EmployeeDetail from "../pages/admin/employee/EmployeeDetail/EmployeeDetail";
import UpdateEmployeeDetails from "../pages/admin/employee/EmployeeUpdate/UpdateEmployeeDetails";
import Onboard from "../pages/admin/employee/Onboard";
import RosterListIndex from "../pages/admin/roster/RosterList";
import RosterAdd from "../pages/admin/roster/RosterAdd";
import LeavePage from "../pages/admin/leave/LeavePage";
import LoginPage from "../components/LoginPage";
import LeaveRequest from "../pages/admin/leave/LeaveRequest";

export default function AdminRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/admin-dashboard" element={<Dashboard />} />
      <Route path="/schedule-shift" element={<ScheduleShift />} />
      <Route path="/jobs" element={<JobPage />} />
      <Route path="/jobs/add-jobs" element={<AddJob />} />
      <Route path="/jobs/update-jobs/:id" element={<EditJob />} />
      <Route path="/all-employee" element={<AllEmployee />} />

      <Route path="/employee-profile" element={<EmployeeDetail />} />
      <Route
        path="/update-employee-profile/:id"
        element={<UpdateEmployeeDetails />}
      />
      <Route path="/onboard-staff" element={<Onboard />} />

      <Route path="/employee/:id" element={<EmployeeDetail />}></Route>
      <Route path="/roster" element={<RosterListIndex />}></Route>
      <Route path="/roster/add" element={<RosterAdd />}></Route>
      <Route path="/leaves" element={<LeavePage />} />
      <Route path="/leave-request/:id" element={<LeaveRequest />} />
      <Route path="/login" element={<LoginPage />} />
    </Routes>
  );
}
