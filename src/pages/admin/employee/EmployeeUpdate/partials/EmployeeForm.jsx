import React, { useEffect, useState } from "react";
<<<<<<< HEAD
import { useForm } from "react-hook-form";
=======
import { Controller, useForm } from "react-hook-form";
>>>>>>> bf24c8b40d0f2c64e033459ddbc16934da383f42
import {
  TextField,
  Grid2 as Grid,
  Button,
  InputLabel,
  FormControlLabel,
  Checkbox,
  Box,
  MenuItem,
<<<<<<< HEAD
=======
  Autocomplete,
>>>>>>> bf24c8b40d0f2c64e033459ddbc16934da383f42
} from "@mui/material";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import dayjs from "dayjs";
import Heading from "../../../../../components/common/Heading";
import { useNavigate, useParams } from "react-router-dom";
import { useLoader } from "../../../../../utils/context/LoaderContext";
import api from "../../../../../services/api";
import { ToastMessage } from "../../../../../components/common/ToastNotification";

// Define validation schema based on EmployeeDetail
const validationSchema = Yup.object().shape({
  address: Yup.string().required("Address is required"),
  contact: Yup.string().required("Contact is required"),
  emergencyContactName: Yup.string().required(
    "Emergency Contact Name is required"
  ),
  emergencyContact: Yup.string().required("Emergency Contact is required"),
  birthCountry: Yup.string().required("Birth Country is required"),
  dob: Yup.string().required("Date of Birth is required"),
  gender: Yup.string().required("Gender is required"),
  isTaxFree: Yup.boolean(),
  bankName: Yup.string().required("Bank Name is required"),
  accountNumber: Yup.string().required("Account Number is required"),
  status: Yup.string().required("Status is Required"),
  tfn: Yup.string().required("TFN is required"),
  abn: Yup.string().required("ABN is required"),
  employmentType: Yup.string().required("Employment Type is required"),
  notes: Yup.string(),
});

const EmployeeForm = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [profileData, setProfileData] = useState(null);
  const { showLoader, hideLoader } = useLoader();
<<<<<<< HEAD
=======
  const countryList = [
    "Afghanistan",
    "Albania",
    "Algeria",
    "Andorra",
    "Angola",
    "Argentina",
    "Australia",
    "Austria",
    "Bangladesh",
    "Belgium",
    "Brazil",
    "Canada",
    "China",
    "Denmark",
    "Egypt",
    "Finland",
    "France",
    "Germany",
    "India",
    "Indonesia",
    "Italy",
    "Japan",
    "Nepal",
    "Netherlands",
    "New Zealand",
    "Norway",
    "Pakistan",
    "Russia",
    "Singapore",
    "South Africa",
    "Spain",
    "Sri Lanka",
    "Sweden",
    "Switzerland",
    "Thailand",
    "United Arab Emirates",
    "United Kingdom",
    "United States",
    "Vietnam",
  ];
>>>>>>> bf24c8b40d0f2c64e033459ddbc16934da383f42

  const {
    register,
    handleSubmit,
    control,
    setValue,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(validationSchema),
  });

  const onSubmit = (data) => {
    console.log("ajajaja");
    const FormattedData = {
      ...data,
      dob: data.dob ? dayjs(data.dob).format("YYYY-MM-DD") : null,
      employeeId: id,
    };
    console.log("Form Data Submitted:", FormattedData);
    api
      .post("/api/v1/employee/update-profile", FormattedData)
      .then((res) => {
        const message = res?.data?.message;
        ToastMessage("success", message || "Employee updated successful");
        navigate("/all-employee");
      })
      .catch((err) => {
        console.error(err);
        // if (err?.response?.data?.errors != null) {
        //   setValidationErrors([]);
        //   const validationErrors = err.response.data.errors;
        //   console.log(validationErrors);
        //   for (const [_, message] of Object.entries(validationErrors)) {
        //     setValidationErrors((prevErrors) => [...prevErrors, message[0]]);
        //   }
        //   setShowErrors(true);
        //   return;
        // }
        ToastMessage("error", "Something Went Wrong");
      })
      .finally(() => {
        hideLoader();
      });
  };

  useEffect(() => {
    showLoader();
    api
      .get(`/api/v1/employee/${id}`)
      .then((res) => {
        setProfileData(res?.data?.data);
        const data = res?.data?.data;
<<<<<<< HEAD
=======
        console.log("sachin", data);
>>>>>>> bf24c8b40d0f2c64e033459ddbc16934da383f42
        reset({
          address: data.address || "",
          contact: data.contact || "",
          emergencyContactName: data.emergencyContactName || "",
          emergencyContact: data.emergencyContact || "",
          birthCountry: data.birthCountry || "",
          dob: data.dob || "",
          gender: data.gender || "",
          isTaxFree: data.isTaxFree || false,
          bankName: data.bankName || "",
          accountNumber: data.accountNumber || "",
          status: data.status || "",
          tfn: data.tfn || "",
          abn: data.abn || "",
          employmentType: data.employmentType || "",
          notes: data.notes || "",
        });
        hideLoader();
      })
      .catch((err) => {
        ToastMessage("error", err?.response?.data?.message);
        hideLoader();
      });
  }, [id]);

  return (
    <Box
      className="content-box"
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: 3,
        width: "100%",
        padding: 3,
        backgroundColor: "#fff",
      }}
    >
      <form onSubmit={handleSubmit(onSubmit)}>
        <Grid container spacing={4} columns={12}>
          <Grid size={{ sm: 12, md: 12 }}>
            <Heading title={"General Details"} />
          </Grid>
          {/* Text fields */}
          {[
            { label: "Address", name: "address" },
            { label: "Contact", name: "contact" },
            { label: "Emergency Contact Name", name: "emergencyContactName" },
            { label: "Emergency Contact", name: "emergencyContact" },
<<<<<<< HEAD
            { label: "Birth Country", name: "birthCountry" },
            { label: "Gender", name: "gender" },
=======
>>>>>>> bf24c8b40d0f2c64e033459ddbc16934da383f42
          ].map((field, idx) => (
            <Grid key={idx} size={{ sm: 12, md: 6 }}>
              <InputLabel className="base-input-label" htmlFor={field.name}>
                {field.label} <span className="is-required">*</span>
              </InputLabel>
              <TextField
                id={field.name}
                variant="outlined"
                className="base-input"
                {...register(field.name)}
                error={!!errors[field.name]}
                helperText={errors[field.name]?.message}
                fullWidth
              />
            </Grid>
          ))}
<<<<<<< HEAD
=======
          <Grid size={{ md: 6 }}>
            {/* <InputLabel className="base-input-label" htmlFor="country">
              Birth Country<span className="is-required">*</span>
            </InputLabel>
            <TextField
              id="country"
              select
              className="base-input"
              variant="outlined"
              fullWidth
              {...register("birthCountry")}
              error={!!errors.status}
              helperText={errors.status?.message}
            >
              <MenuItem value="Active">Active</MenuItem>
              <MenuItem value="Inactive">Inactive</MenuItem>
            </TextField> */}

            <InputLabel className="base-input-label" htmlFor="birthCountry">
              Birth Country<span className="is-required">*</span>
            </InputLabel>

            <Controller
              name="birthCountry"
              control={control}
              rules={{ required: "Birth country is required" }}
              render={({ field }) => (
                <Autocomplete
                  {...field}
                  options={countryList}
                  autoHighlight
                  fullWidth
                  onChange={(_, value) => field.onChange(value)}
                  renderInput={(params) => (
                    <TextField
                      {...params}
                      variant="outlined"
                      className="base-input"
                      error={!!errors.birthCountry}
                      helperText={errors.birthCountry?.message}
                    />
                  )}
                />
              )}
            />
          </Grid>
          <Grid size={{ sm: 12, md: 6 }}>
            <InputLabel className="base-input-label" htmlFor="gender">
              Gender<span className="is-required">*</span>
            </InputLabel>
            <TextField
              Select
              id="gender"
              type="date"
              className="base-input"
              {...register("gender")}
              error={!!errors.gender}
              helperText={errors.gender?.message}
              fullWidth
            >
              <MenuItem value="Male">Male</MenuItem>
              <MenuItem value="Female">Female</MenuItem>
              <MenuItem value="Other">Other</MenuItem>
            </TextField>
          </Grid>
>>>>>>> bf24c8b40d0f2c64e033459ddbc16934da383f42
          <Grid size={{ sm: 12, md: 6 }}>
            <InputLabel className="base-input-label" htmlFor="DOB">
              Date of Birth<span className="is-required">*</span>
            </InputLabel>
            <TextField
              id="DOB"
              type="date"
              className="base-input"
              {...register("dob")}
              error={!!errors.dob}
              helperText={errors.dob?.message}
              fullWidth
            />
          </Grid>
          <br />
          <Grid size={{ sm: 12, md: 12 }}>
            <Heading title={"Account & Other Details"} />
          </Grid>
          {[
            { label: "Bank Name", name: "bankName" },
            { label: "Account Number", name: "accountNumber" },
            { label: "TFN", name: "tfn" },
            { label: "ABN", name: "abn" },
<<<<<<< HEAD
            { label: "Employment Type", name: "employmentType" },
=======
>>>>>>> bf24c8b40d0f2c64e033459ddbc16934da383f42
          ].map((field, idx) => (
            <Grid key={idx} size={{ sm: 12, md: 6 }}>
              <InputLabel className="base-input-label" htmlFor={field.name}>
                {field.label} <span className="is-required">*</span>
              </InputLabel>
              <TextField
                id={field.name}
                variant="outlined"
                className="base-input"
                {...register(field.name)}
                error={!!errors[field.name]}
                helperText={errors[field.name]?.message}
                fullWidth
              />
            </Grid>
          ))}
          <Grid size={{ md: 6 }}>
<<<<<<< HEAD
=======
            <InputLabel className="base-input-label" htmlFor="employmentType">
              Employment Type<span className="is-required">*</span>
            </InputLabel>
            <TextField
              id="employmentType"
              select
              className="base-input"
              variant="outlined"
              fullWidth
              {...register("status")}
              error={!!errors.employmentType}
              helperText={errors.employmentType?.message}
            >
              <MenuItem value="Active">Part Time</MenuItem>
              <MenuItem value="Inactive">Full Time</MenuItem>
              <MenuItem value="employmentType">Casual</MenuItem>
            </TextField>
          </Grid>
          <Grid size={{ md: 6 }}>
>>>>>>> bf24c8b40d0f2c64e033459ddbc16934da383f42
            <InputLabel className="base-input-label" htmlFor="status">
              Status<span className="is-required">*</span>
            </InputLabel>
            <TextField
              id="status"
              select
              className="base-input"
              variant="outlined"
              fullWidth
              {...register("status")}
              error={!!errors.status}
              helperText={errors.status?.message}
            >
              <MenuItem value="Active">Active</MenuItem>
              <MenuItem value="Inactive">Inactive</MenuItem>
            </TextField>
          </Grid>
          <Grid size={{ sm: 12, md: 6 }}>
            <InputLabel className="base-input-label" htmlFor="notes">
              Notes <span className="is-required">*</span>
            </InputLabel>
            <TextField
              id="notes"
              multiline
              variant="outlined"
              className="base-input"
              {...register("notes")}
              // error={!!errors[notes]}
              // helperText={errors[notes]?.message}
              fullWidth
            />
          </Grid>

          <Grid size={{ md: 6 }} sx={{ display: "Flex" }}>
            <FormControlLabel
              control={<Checkbox {...register("isTaxFree")} color="primary" />}
              label="Claim Tax Free Threshold"
            />
          </Grid>

          <Grid container sx={{ justifyContent: "flex-end", width: "100%" }}>
            <Button
              type="submit"
              onClick={handleSubmit(onSubmit)}
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
              Submit
            </Button>
          </Grid>
        </Grid>
      </form>
    </Box>
  );
};

export default EmployeeForm;
