import React, { useState } from "react";
import { TextField, Box } from "@mui/material";

const DateRangeSelector = () => {
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  return (
    <Box sx={{ display: "flex", gap: 1, maxWidth: "50%" }}>
      <TextField
        label="Start Date"
        value={startDate}
        onChange={(e) => setStartDate(e.target.value)}
        fullWidth
        sx={{
          width: "100px", // Set width to 50px
          "& .MuiInputBase-root": {
            height: "39px", // Set the height of the input container
            display: "flex",
            alignItems: "center", // Align input to the center vertically
          },
          "& .MuiInputBase-input": {
            height: "32px", // Set the height of the input field itself
            padding: "0 14px", // Adjust padding to align the text properly
          },
          "& .MuiFormLabel-root": {
            fontSize: "12px", // Set label font size to 12px
            top: "-6px", // Adjust label position to move it closer to the input
          },
        }}
      />

      <TextField
        label="End Date"
        value={endDate}
        onChange={(e) => setEndDate(e.target.value)}
        fullWidth
        sx={{
          width: "100px", // Set width to 50px
          "& .MuiInputBase-root": {
            height: "39px", // Set the height of the input container
            display: "flex",
            alignItems: "center", // Align input to the center vertically
          },
          "& .MuiInputBase-input": {
            height: "32px", // Set the height of the input field itself
            padding: "0 14px", // Adjust padding to align the text properly
          },
          "& .MuiFormLabel-root": {
            fontSize: "12px", // Set label font size to 12px
            top: "-6px", // Adjust label position to move it closer to the input
          },
        }}
      />
    </Box>
  );
};

export default DateRangeSelector;
