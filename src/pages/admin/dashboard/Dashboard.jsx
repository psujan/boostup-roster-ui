//import RosterTable from "../../../components/RosterTable";
import { Box, Button } from "@mui/material";
import PersonAddAltIcon from "@mui/icons-material/PersonAddAlt";
import { useNavigate } from "react-router-dom";
import QuickActions from "./partials/QuickActions";
import RosterList from "./partials/RosterList";
const Dashboard = () => {
  const navigate = useNavigate();
  const handleonBoard = () => {
    navigate("/onboard-staff");
  };
  return (
    <Box>
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        padding="30px 0px"
        sx={{ borderRadius: 2 }}
      >
        <QuickActions />

        {/* <Button
          variant="contained"
          sx={{
            background: "var(--primaryColor)",
            fontSize: "14px",
            fontWeight: "500",
            textTransform: "none",
            padding: "10px 22px",
            height:'36px'
          }}
          onClick={handleonBoard}
          disableRipple 
          disableElevation
        >
          <PersonAddAltIcon /> &nbsp; Onboard New Staff
        </Button> */}
      </Box>

      <Box>
        <RosterList />
      </Box>
    </Box>
  );
};

export default Dashboard;
