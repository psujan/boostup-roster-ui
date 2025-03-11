import React from "react";
import RosterTable from "../../components/RosterTable";
import { Box, Button, Grid2, Typography } from "@mui/material";
import DropMenu from "../../commonComponents/DropMenu";
import PersonAddAltIcon from "@mui/icons-material/PersonAddAlt";
import { useNavigate } from "react-router-dom";
import MoreVertOutlinedIcon from "@mui/icons-material/MoreVertOutlined";
const Overview = () => {
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
        <DropMenu
          sx={{ fontSize: "46px", fontWeight: "600" }}
          name={"Quick Actions "}
          icon={":"}
        />
        <Button
          variant="contained"
          sx={{
            background: "var(--primaryColor)",
            fontSize: "16px",
            fontWeight: "600",
            borderRadius: "8px",
            fontWeight: "500",
            lineHeight: "100%",
            padding: "10px 20px",
            transitionProperty: "1s ease",
          }}
          onClick={handleonBoard}
        >
          <PersonAddAltIcon /> &nbsp; Onboard New Staff
        </Button>
      </Box>
      <Box>
        <RosterTable />
        <Grid2 container spacing={2}>
          <Grid2 size={{ xs: 6, md: 8 }}>
            <h2>size=8</h2>
          </Grid2>
          <Grid2 size={4}>
            <h4>size=4</h4>
          </Grid2>
          <Grid2 size={4}>
            <h2>size=4</h2>
          </Grid2>
          <Grid2 size={8}>
            <h4>size=8</h4>
          </Grid2>
        </Grid2>
      </Box>
    </Box>
  );
};

export default Overview;
