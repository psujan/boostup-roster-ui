import { Box, TextField, Button, Typography } from "@mui/material";
import React, { useState } from "react";
import BackButton from "../../commonComponents/BackButton";
import { useForm } from "react-hook-form";

const OnBoardStaff = () => {
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
    <>
      <BackButton />
      <Typography
        sx={{
          fontWeight: "500",
          fontSize: "20px",
          color: "#000",
        }}
      >
        Onboard New Staff
      </Typography>
      <br />
      <Box
        sx={{
          background: "#fff",
          padding: "54px 33px",
          height: "90vh",
          borderRadius: "8px",
        }}
      >
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
              sx={{
                fontSize: "14px",
                fontWeight: "400",
                mb: 1,
              }}
            >
              Staff Name
            </Typography>
            <TextField
              fullWidth
              variant="outlined"
              size="small"
              placeholder="Enter Staff Name"
              {...register("name", { required: "Staff Name is required" })}
              error={!!errors.name}
            />
          </Box>

          <Box sx={{ width: "30%" }}>
            <Typography
              sx={{
                fontSize: "14px",
                fontWeight: "400",
                mb: 1,
              }}
            >
              Email
            </Typography>
            <TextField
              fullWidth
              variant="outlined"
              size="small"
              placeholder="Enter Staff Email"
              {...register("email", { required: "Email is required" })}
              error={!!errors.email}
            />
          </Box>

          <Box sx={{ width: "30%" }}>
            <Typography
              variant="subtitle1"
              sx={{
                fontSize: "14px",
                fontWeight: "400",
                mb: 1,
              }}
            >
              Phone Number
            </Typography>
            <TextField
              fullWidth
              variant="outlined"
              size="small"
              placeholder="Enter Phone Number"
              {...register("phone", { required: "Phone Number is required" })}
              error={!!errors.phone}
            />
          </Box>
        </Box>
        <br />
        <Box
          sx={{ display: "flex", gap: 2, justifyContent: "flex-end", mt: 2 }}
        >
          <Button
            type="submit"
            variant="outlined"
            sx={{
              fontSize: "16px",
              fontWeight: "500",
              backgroundColor: "var(--secondaryColor)",
              padding: "9px 58px",
              borderRadius: "8px",
              color: "#000",
              border: "none",
              mb: 1,
            }}
          >
            Onboard & Assign Shift
          </Button>
          <Button
            variant="contained"
            sx={{
              fontSize: "16px",
              fontWeight: "500",
              padding: "9px 58px",
              mb: 1,
              borderRadius: "8px",
              background: "var(--primaryColor)",
              border: "none",
            }}
            onClick={() => handleSubmit(onSubmit)()} // Call handleSubmit correctly
          >
            Onboard
          </Button>
        </Box>
      </Box>
    </>
  );
};

export default OnBoardStaff;
