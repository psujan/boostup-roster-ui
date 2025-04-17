import { Box, Button } from "@mui/material";
import Heading from "../../../components/common/Heading.jsx";
import AddIcon from "@mui/icons-material/Add";
import BaseLayout from "../../../components/common/BaseLayout.jsx";
import RosterList from "../../../components/features/roster/RosterList.jsx";
import { useNavigate } from "react-router-dom";

export default function RosterListIndex() {
  const navigate = useNavigate();
  return (
    <BaseLayout>
      <Box className="content-top flex flex-between flex-center">
        <Heading title="Roster" />
        <Button
          variant="outlined"
          color="primary"
          size="sm"
          sx={{
            fontSize: "14px",
            fontWeight: "500",
            textTransform: "none",
          }}
          onClick={() => navigate("/roster/add")}
        >
          <AddIcon sx={{ marginRight: "10px" }} /> Add
        </Button>
      </Box>
      <Box style={{ margin: "30px 0" }}>
        <RosterList />
      </Box>
    </BaseLayout>
  );
}
