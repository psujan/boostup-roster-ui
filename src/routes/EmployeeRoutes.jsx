import { Route, Routes } from "react-router-dom";
import EmployeeHome from "../pages/employee/EmployeeHome/EmployeeHome";
import EmployeeShiftDetails from "../pages/employee/EmployeeShiftDetail/EmployeeShiftDetails";
import EmployeeLeaveRequest from "../pages/employee/EmployeeLeaveRequest/EmployeeLeaveRequest";

export default function EmployeeRoutes() {
  return (
    <Routes>
      <Route path="/" element={<EmployeeHome />} />
      <Route path="/employee-dashboard" element={<EmployeeHome />} />
      <Route path="/employee-jobs" element={<EmployeeShiftDetails />} />
      <Route path="/employee-leaves" element={<EmployeeLeaveRequest />} />
    </Routes>
  );
}
