import { Box } from "@mui/material";
import React from "react";
import BaseLayout from "../../../components/common/BaseLayout";
import Heading from "../../../components/common/Heading";
import AllLeaveTable from "./partials/AllLeaveTable";

const LeavePage = () => {
  return (
    <div>
      <BaseLayout>
        <Box className="content-top">
          <Heading title="All Leave Request" />
        </Box>
        <AllLeaveTable />
      </BaseLayout>
    </div>
  );
};

export default LeavePage;
