import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { TextField, Button, Box, Grid2, InputLabel } from "@mui/material";
import { TimePicker } from "@mui/x-date-pickers";
import dayjs from "dayjs";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import api from "../../../../services/api";
import { ToastMessage } from "../../../../components/common/ToastNotification";
import ValidationMessages from "../../../../components/common/ValidationMessages";
import { useLoader } from "../../../../utils/context/LoaderContext";
import { useNavigate, useParams } from "react-router-dom";

const validationSchema = Yup.object().shape({
  title: Yup.string().required("* Job Name is required"),
  startTime: Yup.string().required("* Start time is required"),
  endTime: Yup.string().required("* End time is required"),
  jobAddress: Yup.string().required("* Job Address is required"),
  notes: Yup.string().optional(), // No validation for notes
});

const UpdateJobForm = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  console.log("ididid", id);
  const { showLoader, hideLoader } = useLoader();
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

  useEffect(() => {
    showLoader();
    api
      .get(`/api/v1/job/${id}`)
      .then((res) => {
        if (res?.status === 200) {
          // Check if the status is OK
          const data = res?.data?.data;
          console.log("Fetched job data:", data); // Log the fetched data
          setValue("title", data?.title);
          setValue("startTime", dayjs(data?.startTime, "h:mm a"));
          setValue("endTime", dayjs(data?.endTime, "h:mm a"));
          setValue("jobAddress", data?.jobAddress);
          setValue("notes", data?.notes || ""); // Correct key usage here
        } else {
          console.error("API request failed with status:", res?.status); // Log unexpected status codes
          ToastMessage("error", "Failed to fetch job data");
        }
      })
      .catch((err) => {
        console.error("API error:", err); // Log the error for more details
        ToastMessage("error", "Failed to fetch job data");
      })
      .finally(() => hideLoader());
  }, [id, setValue]);

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
      .put(`/api/v1/job/${id}`, data)
      .then((res) => {
        const message = res?.data?.message;
        ToastMessage("success", message || "Job updated successful");
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
            <TimePicker
              value={dayjs(getValues("startTime"), "HH:MM")}
              onChange={handleStartTime}
              sx={{ width: "100%" }}
            />
            <span className="is-required">{errors.startTime?.message}</span>
          </Grid2>

          {/* End Time Picker */}
          <Grid2 size={{ md: 6 }}>
            <InputLabel className="base-input-label" htmlFor="endTime">
              End Time<span className="is-required">*</span>
            </InputLabel>
            <TimePicker
              value={dayjs(getValues("endTime"), "HH:MM")}
              onChange={handleEndTime}
              sx={{ width: "100%" }}
            />
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
              Update Job
            </Button>
          </Grid2>
        </Grid2>
      </form>
    </Box>
  );
};

export default UpdateJobForm;
