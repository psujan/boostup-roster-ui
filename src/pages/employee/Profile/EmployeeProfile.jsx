import { Box, Typography } from "@mui/material";
import BackButton from "../../../components/common/BackButton";
import { useEffect, useState } from "react";
import { useLoader } from "../../../utils/context/LoaderContext";
import api from "../../../services/api";
import Helper from "../../../utils/helper";
import dayjs from "dayjs";
import DEFAULT_IMAGE from "../../../assets/images/default_user.jpg";

export default function EmployeeProfile() {
  const { showLoader, hideLoader } = useLoader();
  const [employee, setEmployee] = useState({});
  const id = Helper.getCurrentEmployeeId();
  const appUrl = import.meta.env.VITE_APP_API_URL;

  useEffect(() => {
    showLoader();
    api
      .get(`/api/v1/employee/${id}`)
      .then((res) => {
        setEmployee(res?.data?.data);
        hideLoader();
      })
      .catch((err) => {
        console.error(err);
      })
      .finally(() => {
        hideLoader();
      });
  }, [id]);

  const DetailRow = ({ label, value }) => {
    return (
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Typography
          fontWeight={400}
          fontSize={14}
          sx={{ margin: "8px 0" }}
          color="#666"
        >
          {label}
        </Typography>
        <Box display="flex" alignItems="center">
          <Typography fontWeight={400} fontSize={14}>
            {value || "N/A"}
          </Typography>
        </Box>
      </Box>
    );
  };
  return (
    <Box>
      <>
        <Box sx={{ margin: "16px 0" }}>
          <BackButton />
        </Box>
        <Box sx={{ marginTop: "30px" }}>
          <Box
            sx={{
              mb: 2,
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <h5 className="heading-5">General Details</h5>
          </Box>
        </Box>
        <Box
          sx={{
            backgroundColor: "#fff",
            borderRadius: "8px",
            padding: "8px",
          }}
        >
          <Box mb={2}>
            <img
              src={
                employee?.image?.path
                  ? appUrl + employee?.image?.path
                  : DEFAULT_IMAGE
              }
              alt={employee?.user?.fullName}
              style={{
                width: "120px",
                height: "120px",
                borderRadius: "50%",
                objectFit: "cover",
                position: "relative",
              }}
            />
          </Box>

          <DetailRow label="Id" value={employee?.id} />
          <DetailRow label="Full Name" value={employee?.user?.fullName} />
          <DetailRow label="Email" value={employee?.user?.email} />
          <DetailRow label="Phone" value={employee?.contact} />
          <DetailRow label="Address" value={employee?.address} />
          <DetailRow
            label="Emergency Contact"
            value={employee?.emergencyContactName}
          />
          <DetailRow
            label="Emergency Contact Phone"
            value={employee?.emergencyContact}
          />
          <DetailRow label="Gender" value={employee?.gender} />
          <DetailRow label="DOB" value={employee?.dob} />
          <DetailRow label="Employment Type" value={employee?.employmentType} />
          <DetailRow
            label="Joined Date"
            value={
              employee?.joinedDate
                ? dayjs(employee?.joinedDate).format("YYYY-MM-DD")
                : "N/A"
            }
          />
          <DetailRow label="Status" value={employee?.status} />
        </Box>
        <Box sx={{ marginTop: "30px" }}>
          <Box
            sx={{
              mb: 2,
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <h5 className="heading-5">Other Details</h5>
          </Box>
        </Box>
        <Box
          sx={{
            backgroundColor: "#fff",
            borderRadius: "8px",
            padding: "8px",
          }}
        >
          <DetailRow label="Bank Name" value={employee?.bankName} />
          <DetailRow label="Account Number" value={employee?.accountNumber} />
          <DetailRow label="TFN" value={employee?.tfn} />
          <DetailRow label="ABN" value={employee?.abn} />
          <DetailRow
            label="Claim Tax Free"
            value={employee?.isTaxFree ? "Yes" : "No"}
          />
        </Box>
      </>
    </Box>
  );
}
