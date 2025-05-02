import { Box, Button } from "@mui/material";
import BackButton from "../../../components/common/BackButton";
import Availability from "./partials/AvailabilityList";
import { useNavigate } from "react-router-dom";
import AvailabilityForm from "./partials/AvailabilityForm";
export default function AddAvailability() {
  const navigate = useNavigate();
  return (
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
          <h5 className="heading-5">Add Availability</h5>
          <Button variant="text" color="primary" size="small" onClick={()=>navigate('/my-availability')}>
            VIEW
          </Button>
        </Box>
        <AvailabilityForm />
      </Box>
    </>
  );
}
