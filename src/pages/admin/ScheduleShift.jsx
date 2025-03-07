import {
  Box,
  TextField,
  Button,
  Typography,
  MenuItem,
  Select,
  FormControlLabel,
  Checkbox,
} from "@mui/material";
import React, { useState } from "react";
import BackButton from "../../commonComponents/BackButton";
import { useForm } from "react-hook-form";

const ScheduleShift = () => {
  const days = ["SUN", "MON", "TUE", "WED", "THU", "FRY", "SAT"];
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm(); // Destructure from useForm

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onSubmit = (data) => {
    console.log("Form Submitted:", data); // Logs form data when submitted
  };

  return (
    <div>
      <BackButton />
      <br />
      <Typography variant="h5">OnBoard New Staff</Typography>
      <br />
      <Box sx={{ background: "#fff", p: 2, height: "90vh" }}>
        <Box
          component="form"
          onSubmit={handleSubmit(onSubmit)} // Ensure onSubmit is passed to handleSubmit
          sx={{
            display: "flex",
            flexDirection: "row", // Arrange items in a row
            gap: 2, // Minimal space between fields
            width: "100%",
            justifyContent: "space-between", // Ensure fields are spread across the row
          }}
        >
          <Box sx={{ width: "30%" }}>
            <Typography
              variant="subtitle1"
              sx={{
                fontSize: "18px",
                fontWeight: "550",
                mb: 1,
              }}
            >
              Select Staff
            </Typography>
            <Select
              sx={{ width: "100%" }}
              //   label="Choose Email"
              {...register("email", { required: "Email is required" })}
              defaultValue=""
              displayEmpty
            >
              <MenuItem value="" disabled>
                <em style={{ color: "#666666" }}>Choose Staff</em>{" "}
                {/* Placeholder option */}
              </MenuItem>
              <MenuItem value="example1@gmail.com">Harry</MenuItem>
              <MenuItem value="example2@gmail.com">John</MenuItem>
              <MenuItem value="example3@gmail.com">Albert</MenuItem>
            </Select>
          </Box>

          <Box sx={{ width: "30%" }}>
            <Typography
              variant="subtitle1"
              sx={{
                fontSize: "18px",
                fontWeight: "550",
                mb: 1,
              }}
            >
              Email
            </Typography>
            <Select
              sx={{ width: "100%" }}
              //   label="Choose Email"
              {...register("email", { required: "Email is required" })}
              defaultValue=""
              displayEmpty
            >
              <MenuItem value="" disabled>
                <em style={{ color: "#666666" }}>Choose an event</em>{" "}
                {/* Placeholder option */}
              </MenuItem>
              <MenuItem value="example1@gmail.com">School Cleaning</MenuItem>
              <MenuItem value="example2@gmail.com">
                Anytime Fitness Cleaning
              </MenuItem>
              <MenuItem value="example3@gmail.com">
                Bowling Zone Cleaning
              </MenuItem>
            </Select>
          </Box>

          <Box sx={{ width: "30%" }}>
            <Typography
              variant="subtitle1"
              sx={{
                fontSize: "18px",
                fontWeight: "550",
                mb: 1,
              }}
            >
              Time
            </Typography>
            <Select
              sx={{ width: "100%" }}
              //   label="Choose Email"
              {...register("time", { required: "Time is required" })}
              defaultValue=""
              displayEmpty
            >
              <MenuItem value="" disabled>
                <em style={{ color: "#666666" }}>Choose Timeframe</em>{" "}
                {/* Placeholder option */}
              </MenuItem>
              <MenuItem value="example1@gmail.com">6am - 10am</MenuItem>
              <MenuItem value="example2@gmail.com">10am - 4pm</MenuItem>
              <MenuItem value="example3@gmail.com">4pm - 8pm</MenuItem>
            </Select>
          </Box>
        </Box>
        <br />
        <Box sx={{ display: "flex", gap: 2 }}>
          {days.map((day) => (
            <Checkbox
              key={day}
              icon={
                <Box
                  sx={{
                    width: 65,
                    height: 50,
                    color: "#000",
                    borderRadius: 2,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    background: "#EAE8E8",
                  }}
                >
                  {day}
                </Box>
              }
              checkedIcon={
                <Box
                  sx={{
                    width: 65,
                    height: 50,
                    backgroundColor: "var(--secondaryColor)",
                    borderRadius: 2,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "#000",
                  }}
                >
                  {day}
                </Box>
              }
            />
          ))}
        </Box>
        <br />
        <Box
          sx={{ display: "flex", gap: 2, justifyContent: "flex-end", mt: 2 }}
        >
          <Button
            type="submit"
            variant="outlined"
            sx={{
              fontSize: "18px",
              backgroundColor: "var(--secondaryColor)",
              fontWeight: "550",
              color: "#000",
              border: "none",
              mb: 1,
            }}
          >
            Check Staff Availability
          </Button>
          <Button
            variant="contained"
            sx={{
              fontSize: "18px",
              fontWeight: "550",
              mb: 1,
              background: "var(--primaryColor)",
            }}
            onClick={() => handleSubmit(onSubmit)()} // Call handleSubmit correctly
          >
            Schedule
          </Button>
        </Box>
      </Box>
    </div>
  );
};

export default ScheduleShift;
