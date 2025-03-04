import React from "react";
import RosterTable from "../../components/RosterTable";
import { Grid2 } from "@mui/material";

const Overview = () => {
  return (
    <>
      <div>
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
      </div>
    </>
  );
};

export default Overview;
