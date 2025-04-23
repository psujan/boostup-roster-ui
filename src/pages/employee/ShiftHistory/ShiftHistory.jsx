import BackButton from "../../../components/common/BackButton";
import { Box, Button } from "@mui/material";
import ShiftLists from "./partials/ShiftLists";
export default function ShiftHistory() {
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
          <h5 className="heading-5">My Shift History</h5>
          <Button variant="text" color="primary" size="small">
            Year : 2025
          </Button>
        </Box>
        <Box>
          <ShiftLists />
        </Box>
      </Box>
    </>
  );
}
