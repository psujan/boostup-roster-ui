/* eslint-disable react/display-name */
import OutlinedInput from "@mui/material/OutlinedInput";
import MenuItem from "@mui/material/MenuItem";
// import FormControl from "@mui/material/FormControl";
import ListItemText from "@mui/material/ListItemText";
import Select from "@mui/material/Select";
import Checkbox from "@mui/material/Checkbox";
import { forwardRef, useState, useImperativeHandle } from "react";

const EmployeeSelectDropdown = forwardRef(
  ({ employeeList = [], customClass = "base-input" }, ref) => {
    const ITEM_HEIGHT = 48;
    const ITEM_PADDING_TOP = 8;
    const MenuProps = {
      PaperProps: {
        style: {
          maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
          width: 250,
        },
      },
    };
    const [employeeIds, setEmployeeIds] = useState([]);

    const handleChange = (event) => {
      setEmployeeIds([...event.target.value]);
    };

    // Updated By Parent Component
    useImperativeHandle(ref, () => ({
      getValue: () => {
        console.log("calling here", employeeIds);
        return employeeIds;
      },
      setValue: (empIds) => setEmployeeIds(empIds),
    }));

    return (
      <div>
        {employeeList.length ? (
          <Select
            sx={{ width: "100%", borderRadius: "8px" }}
            labelId="employee-select"
            className={customClass}
            multiple
            value={employeeIds}
            onChange={(event) => {
              handleChange(event);
            }}
            input={<OutlinedInput />}
            renderValue={(selected) => {
              return selected.length + " staff selected";
            }}
            MenuProps={MenuProps}
          >
            {employeeList.map((emp) => (
              <MenuItem key={emp.employeeId} value={emp.employeeId}>
                <Checkbox checked={employeeIds.includes(emp.employeeId)} />
                <ListItemText primary={emp.employeeName} />
              </MenuItem>
            ))}
          </Select>
        ) : undefined}
      </div>
    );
  }
);

export default EmployeeSelectDropdown;
