import { Box } from "@mui/material";
import BackButton from "../components/common/BackButton";
export default function BaseLayout({ children }) {
  return (
    <Box sx={{ padding: "30px 0" }}>
      <BackButton />
      {children}
    </Box>
  );
}
