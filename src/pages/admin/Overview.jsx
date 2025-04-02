import RosterTable from "../../components/RosterTable";
import { Box, Button, Grid2, MenuItem, Select } from "@mui/material";
import PersonAddAltIcon from "@mui/icons-material/PersonAddAlt";
import { useNavigate } from "react-router-dom";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import ClickableTextMenu from "../../commonComponents/TextMenu";
const Overview = () => {
  const navigate = useNavigate();
  const handleonBoard = () => {
    navigate("/onboard-staff");
  };
  const handleProfile = () => {
    console.log("test1");
  };

  const handleLogout = () => {
    console.log("test1");
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
        <ClickableTextMenu
          text={
            <span style={{ fontSize: "16px", fontWeight: "600" }}>
              Quick Actions :
            </span>
          }
          items={[
            { label: "My Profile", onClick: handleProfile },
            { label: "Logout", onClick: handleLogout },
          ]}
        />

        <Button
          variant="contained"
          sx={{
            background: "var(--primaryColor)",
            fontSize: "16px",
            fontWeight: "500",
            textTransform: "none",
            padding: "8px 22px",
          }}
          onClick={handleonBoard}
        >
          <PersonAddAltIcon /> &nbsp; Onboard New Staff
        </Button>
      </Box>

      <Box>
        <RosterTable showDiv={false} />

        <Grid2 container spacing={2}>
          <Grid2 size={{ xs: 6, md: 8 }}>{/* <h2>size=8</h2> */}</Grid2>
          <Grid2 size={4}>{/* <h4>size=4</h4> */}</Grid2>
          <Grid2 size={4}>{/* <h2>size=4</h2> */}</Grid2>
          <Grid2 size={8}>{/* <h4>size=8</h4> */}</Grid2>
        </Grid2>
      </Box>
    </Box>
  );
};

export default Overview;
