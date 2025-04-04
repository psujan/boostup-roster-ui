import { Box, Button, TextField, InputLabel } from "@mui/material";
import Heading from "../../../commonComponents/Heading";
import AddIcon from "@mui/icons-material/NorthEast";
import Grid from "@mui/material/Grid2";
import { useState } from "react";
import api from "../../../services/api";
import ValidationMessages from "../../../components/common/ValidationMessages";
import { useLoader } from "../../../utils/context/LoaderContext.jsx";
import { useNavigate } from "react-router-dom";
import { ToastMessage } from "../../../components/common/ToastNotification.jsx";
import BaseLayout from "../../../commonComponents/BaseLayout.jsx";

export default function Onboard() {
  const navigate = useNavigate();
  const { showLoader, hideLoader } = useLoader();
  const [fullName, setFullName] = useState();
  const [email, setEmail] = useState();
  const [phone, setPhone] = useState();
  const [validationErrors, setValidationErrors] = useState([]);
  const [showErrors, setShowErrors] = useState(true);
  const handleOnboard = (e) => {
    e.preventDefault();
    showLoader();
    api
      .post("/api/v1/employee/onboard", { fullName, email, phone })
      .then((res) => {
        const message = res?.data?.message;
        const empId = res?.data?.data?.id;
        navigate(`/employee/${empId}`);
        ToastMessage("success", message || "Onboarding Successful");
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
    <BaseLayout>
      <Box className="content-top flex flex-between flex-center">
        <Heading title="Onboard Staff" />
        <Button
          variant="text"
          sx={{
            fontSize: "14px",
            fontWeight: "500",
            width: "106px",
            height: "32px",
            padding: "6px 10px",
            textTransform: "none",
            color: "var(--primaryColor)",
          }}
        >
          View All
          <AddIcon sx={{ marginLeft: "10px", fontSize: "15px" }} />
        </Button>
      </Box>
      <Box className="content-box">
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
            handleOnboard(e);
          }}
        >
          <Grid container spacing={4} columns={12}>
            <Grid size={{ sm: 12, md: 4 }}>
              <InputLabel className="base-input-label" htmlFor="emp-name">
                FullName <span className="is-required">*</span>
              </InputLabel>
              <TextField
                id="emp-name"
                variant="outlined"
                className="base-input"
                onChange={(e) => setFullName(e.target.value)}
                placeholder="John Milson"
              />
            </Grid>
            <Grid size={{ sm: 12, md: 4 }}>
              <InputLabel className="base-input-label" htmlFor="emp-email">
                Email <span className="is-required">*</span>
              </InputLabel>
              <TextField
                id="emp-email"
                variant="outlined"
                className="base-input"
                onChange={(e) => setEmail(e.target.value)}
                placeholder="johnmilson@outlook.com"
              />
            </Grid>
            <Grid size={{ sm: 12, md: 4 }}>
              <InputLabel className="base-input-label" htmlFor="emp-phone">
                Phone <span className="is-required">*</span>
              </InputLabel>
              <TextField
                id="emp-phone"
                variant="outlined"
                className="base-input"
                onChange={(e) => setPhone(e.target.value)}
                placeholder="04XXXXXXXX"
              />
            </Grid>
            <Grid container sx={{ justifyContent: "flex-end", width: "100%" }}>
              {/* <Grid size="auto">
                <Button
                  variant="contained"
                  type="submit"
                  sx={{
                    background: "var(--secondaryColor)",
                    fontSize: "14px",
                    fontWeight: "500",
                    width: "190px",
                    color: "var(--textColor)",
                    height: "40px",
                    padding: "6px 10px",
                    textTransform: "none",
                    boxShadow: "none",
                  }}
                  onClick={(e) => handleOnboard(e)}
                >
                  Onboard & Assign Shift
                </Button>
              </Grid> */}
              <Grid size="auto">
                <Button
                  variant="contained"
                  type="submit"
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
                  onClick={(e) => handleOnboard(e)}
                >
                  Onboard
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </form>
      </Box>
    </BaseLayout>
  );
}
