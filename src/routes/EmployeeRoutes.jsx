import { Route, Routes } from "react-router-dom";
import EmployeeHome from "../pages/employee/EmployeeHome/EmployeeHome";
import EmployeeShiftDetails from "../pages/employee/EmployeeShiftDetail/EmployeeShiftDetails";
import EmployeeAddLeave from "../pages/employee/Leave/EmployeeAddLeave";
import ShiftHistory from "../pages/employee/ShiftHistory/ShiftHistory";
import EmployeeLeaveRequests from "../pages/employee/Leave/EmployeeLeaveRequests";
import EmployeeProfile from "../pages/employee/Profile/EmployeeProfile";

export default function EmployeeRoutes() {
  return (
    <Routes>
      <Route path="/" element={<EmployeeHome />} />
      <Route path="/employee-dashboard" element={<EmployeeHome />} />
      <Route path="/shift-detail/:id" element={<EmployeeShiftDetails />} />
      <Route path="/employee-leave/add" element={<EmployeeAddLeave />} />
      <Route path="/employee-leaves" element={<EmployeeLeaveRequests />} />
      <Route path="/shift-history" element={<ShiftHistory />} />
      <Route path="/my-profile" element={<EmployeeProfile />} />
    </Routes>
  );
}
