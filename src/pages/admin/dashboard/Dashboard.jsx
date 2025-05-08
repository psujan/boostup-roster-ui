//import RosterTable from "../../../components/RosterTable";
import { Box } from "@mui/material";
import QuickActions from "./partials/QuickActions";
import RosterList from "../../../components/features/roster/RosterList";
import Overview from "./partials/Overview";
import { isAuthenticated } from "../../../utils/auth";
const Dashboard = () => {
  const { user } = isAuthenticated();
  return (
    <Box>
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        padding="30px 0px"
        sx={{ borderRadius: 2 }}
      >
        <h1>
          <span className="clr-primary">Hi</span> {user?.fullName}
        </h1>
        <QuickActions />
      </Box>
      <Overview />
      <Box>
        <RosterList />
      </Box>
    </Box>
  );
};

export default Dashboard;
