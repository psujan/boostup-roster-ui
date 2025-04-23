// import SwapHorizOutlinedIcon from "@mui/icons-material/SwapHorizOutlined";
import { Drawer, Divider, Box } from "@mui/material";

export default function EmployeeSidebar({ empSideBar, toggleEmpSideBar }) {
  return (
    <Drawer
      open={empSideBar}
      anchor="left"
      sx={{ zIndex: 1202 }}
      onClose={() => toggleEmpSideBar(false)}
    >
      <Box sx={{ width: 280 }} role="presentation">
        <Box sx={{ padding: "20px 10px" }}>
          <h5 className="heading-5">Hi, Sujan Poudel</h5>
          <Divider sx={{ margin: "10px 0" }}></Divider>
        </Box>
      </Box>
    </Drawer>
  );
}
