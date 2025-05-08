import BaseLayout from "../../../components/common/BaseLayout";
import { Box } from "@mui/material";
import Heading from "../../../components/common/Heading";
import TimeSheetList from "./partials/TimeSheetList";

export default function TimeSheet() {
  return (
    <BaseLayout>
      <Box className="content-top flex flex-between flex-center">
        <Heading title="TimeSheet" />
      </Box>
      <TimeSheetList />
    </BaseLayout>
  );
}
