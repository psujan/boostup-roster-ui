import { Box } from "@mui/material";
import BackButton from "./BackButton";
export default function BaseLayout({ children }) {
  return (
    <Box sx={{ padding: "30px 0" }}>
      <BackButton />
      {children}
    </Box>
  );
}
