import * as React from "react";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
// import FormControl from "@mui/material/FormControl";
import ListItemText from "@mui/material/ListItemText";
import Select from "@mui/material/Select";
import Checkbox from "@mui/material/Checkbox";
import { useState } from "react";

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

const names = [
  "Oliver Hansen",
  "Van Henry",
  "April Tucker",
  "Ralph Hubbard",
  "Omar Alexander",
  "Carlos Abbott",
  "Miriam Wagner",
  "Bradley Wilkerson",
  "Virginia Andrews",
  "Kelly Snyder",
];

export default function EmployeeSelectDropdown({
  customClass = "employee-select-field",
}) {
  // Array Of Object To Store Employee From API Fetch
  const [employeeList, setEmployeeList] = useState([
    {
      fullName: "Sujan Poudel",
      id: 1,
    },
    {
      fullName: "Sandesh Belbase",
      id: 2,
    },
    {
      fullName: "Sakar Pradhan",
      id: 3,
    },
  ]);

  // Array For Saving State of EmployeeIds
  const [employeeIds, setEmployeeIds] = React.useState([]);

  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setEmployeeIds(
      // On autofill we get a stringified value.
      typeof value === "string" ? value.split(",") : value
    );
  };

  return (
    <div>
      {employeeList.length ? (
        <Select
          sx={{ width: "100%", borderRadius: "8px" }}
          labelId="employee-select"
          className={customClass}
          multiple
          value={employeeIds}
          onChange={handleChange}
          input={<OutlinedInput label="Tag" />}
          renderValue={(selected) => selected.length + " staff selected"}
          MenuProps={MenuProps}
        >
          {employeeList.map((emp) => (
            <MenuItem key={emp.id} value={emp.id}>
              <Checkbox checked={employeeIds.includes(emp.id)} />
              <ListItemText primary={emp.fullName} />
            </MenuItem>
          ))}
        </Select>
      ) : undefined}
    </div>
  );
}
