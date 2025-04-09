import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { TextField, Button, Box, Grid2, InputLabel } from "@mui/material";
import { TimePicker } from "@mui/x-date-pickers";
import dayjs from "dayjs";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import api from "../../../../services/api";
import { ToastMessage } from "../../../../components/common/ToastNotification";
import ValidationMessages from "../../../../components/common/ValidationMessages";
import { useNavigate } from "react-router-dom";

const validationSchema = Yup.object().shape({
  title: Yup.string().required("* Job Name is required"),
  startTime: Yup.string().required("* Start time is required"),
  endTime: Yup.string().required("* End time is required"),
  jobAddress: Yup.string().required("* Job Address is required"),
  notes: Yup.string().optional(), // No validation for notes
});

const JobForm = () => {
  const navigate = useNavigate();
  const [validationErrors, setValidationErrors] = useState([]);
  const {
    register,
    handleSubmit,
    setError,
    clearErrors,
    setValue,
    trigger,
    getValues,
    formState: { errors },
  } = useForm({
    defaultValues: {
      title: "",
      startTime: "",
      endTime: "",
      jobAddress: "",
      notes: "",
    },
    resolver: yupResolver(validationSchema),
    mode: "onChange",
  });

  const handleStartTime = (value) => {
    if (value) {
      const formattedTime = dayjs(value).format("h:mm A");
      setValue("startTime", formattedTime); // Update the form state
      clearErrors("startTime"); // Clear error when time is selected
    }
  };

  const handleEndTime = (value) => {
    if (value) {
      const formattedTime = dayjs(value).format("h:mm A");
      setValue("endTime", formattedTime);
      clearErrors("endTime");
    }
  };

  const onSubmit = async (data) => {
    const isValid = await trigger();
    // Check for custom errors
    if (!data.startTime) {
      setError("startTime", {
        type: "manual",
        message: "* Start time is required",
      });
    }

    if (!data.endTime) {
      setError("endTime", {
        type: "manual",
        message: "* End time is required",
      });
    }

    if (!isValid) return; // Stop if validation fails
    api
      .post("/api/v1/job", data)
      .then((res) => {
        const message = res?.data?.message;
        ToastMessage("success", message || "Job added successful");
        navigate("/jobs");
      })
      .catch((err) => {
        console.error(err);
        if (err?.response?.data?.errors != null) {
          setValidationErrors([]);
          const validationErrors = err.response.data.errors;
          console.log(validationErrors);
          for (const [_, message] of Object.entries(validationErrors)) {
            setValidationErrors((prevErrors) => [...prevErrors, message[0]]);
          }
          setShowErrors(true);
          return;
        }
        ToastMessage("error", "Something Went Wrong");
      })
      .finally(() => {
        hideLoader();
      });
  };

  return (
    <Box
      className="content-box"
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: 3,
        width: "100%",
        padding: 3,
        margin: "none",
        backgroundColor: "#fff",
      }}
    >
      {validationErrors.length > 0 ? (
        <div>
          <ValidationMessages
            validationErrors={validationErrors}
            show={showErrors}
            onHide={() => setShowErrors(false)}
          />
        </div>
      ) : undefined}
      <form
        onSubmit={(e) => {
          e.preventDefault();
          onSubmit(getValues());
        }}
      >
        <Grid2 container spacing={4} columns={12} alignItems="center">
          <Grid2 size={{ md: 12 }}>
            <InputLabel className="base-input-label" htmlFor="job-name">
              Job Name<span className="is-required">*</span>
            </InputLabel>
            <TextField
              id="job-name"
              variant="outlined"
              className="base-input"
              {...register("title")}
              fullWidth
              error={!!errors.title}
              helperText={errors.title?.message}
            />
          </Grid2>

          <Grid2 size={{ md: 6 }}>
            <InputLabel className="base-input-label" htmlFor="startTime">
              Start Time<span className="is-required">*</span>
            </InputLabel>
            <TimePicker onChange={handleStartTime} className="base-input" />
            <span className="is-required">{errors.startTime?.message}</span>
          </Grid2>

          {/* End Time Picker */}
          <Grid2 size={{ md: 6 }}>
            <InputLabel className="base-input-label" htmlFor="endTime">
              End Time<span className="is-required">*</span>
            </InputLabel>
            <TimePicker onChange={handleEndTime} sx={{ width: "100%", height:'46px' }}  className="base-input"/>
            <span className="is-required">{errors.endTime?.message}</span>
          </Grid2>
          <Grid2 size={{ md: 12 }}>
            <InputLabel className="base-input-label" htmlFor="jobAddress">
              Address<span className="is-required">*</span>
            </InputLabel>
            <TextField
              id="jobAddress"
              variant="outlined"
              className="base-input"
              {...register("jobAddress")}
              error={!!errors.jobAddress}
              helperText={errors.jobAddress?.message}
              fullWidth
            />
          </Grid2>
          <Grid2 size={{ md: 12 }}>
            <InputLabel className="base-input-label" htmlFor="jobAddress">
              Additional notes
            </InputLabel>
            <TextField
              id="jobAddress"
              variant="outlined"
              className="base-input"
              {...register("notes")}
              multiline
              rows={3}
            />
          </Grid2>

          <Grid2 container sx={{ justifyContent: "flex-end", width: "100%" }}>
            <Button
              type="submit"
              variant="contained"
              sx={{
                background: "var(--primaryColor)",
                fontSize: "14px",
                fontWeight: "500",
                width: "180px",
                height: "40px",
                padding: "6px 10px",
                textTransform: "none",
                boxShadow: "none",
              }}
            >
              Add Job
            </Button>
          </Grid2>
        </Grid2>
      </form>
    </Box>
  );
};

export default JobForm;
