import React from "react";
import { useForm } from "react-hook-form";
import { TextField, Button, Box, Grid, Typography, Grid2 } from "@mui/material";

const JobForm = () => {
  const { register, handleSubmit } = useForm({
    defaultValues: {
      title: "",
      startTime: "",
      endTime: "",
      jobAddress: "",
      notes: "",
    },
  });

  const onSubmit = (data) => {
    api.posy;
    console.log(data);
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit(onSubmit)}
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: 3,
        width: "100%",
        paddingTop: 3,
        margin: "none",
      }}
    >
      <TextField label="Job Title" {...register("title")} fullWidth />
      <Grid2 container spacing={2}>
        <Grid2 item xs={6}>
          <TextField
            label="Start Time (e.g., 9:00 AM)"
            {...register("startTime")}
            fullWidth
          />
        </Grid2>
        <Grid2 item xs={6}>
          <TextField
            label="End Time (e.g., 4:00 PM)"
            {...register("endTime")}
          />
        </Grid2>
      </Grid2>
      <TextField label="Job Address" {...register("jobAddress")} fullWidth />
      <TextField
        label="Additional Notes"
        {...register("notes")}
        multiline
        rows={3}
      />
      <Box display="flex" justifyContent="flex-end">
        <Button
          type="submit"
          variant="contained"
          sx={{
            background: "var(--primaryColor)",
            padding: "10px 28px",
            fontSize: "18px",
            textTransform: "none",
          }}
        >
          Add Job
        </Button>
      </Box>
    </Box>
  );
};

export default JobForm;
