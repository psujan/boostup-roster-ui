import ResponsiveDrawer from "../Drawer";
import { Box } from "@mui/material";
import AdminRoutes from "../../routes/AdminRoutes";
import { useState } from "react";

export default function AdminLayouts() {
  const [open, setOpen] = useState(true);
  return (
    <Box>
      <ResponsiveDrawer open={open} setOpen={setOpen} />
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          bgcolor: "#f5f5f5",
          p: 3,
          transition: "margin-left 0.3s ease",
          marginLeft: open ? "240px" : "60px",
          marginTop: "44px",
          paddingLeft: open ? "32px" : "30px",
          minHeight: "100vh",
        }}
      >
        <AdminRoutes />
      </Box>
    </Box>
  );
}
