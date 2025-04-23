import DriveFileRenameOutlineIcon from "@mui/icons-material/DriveFileRenameOutline";
import { Box, Button } from "@mui/material";
import { useEffect, useState } from "react";
import UpdateImage from "./UpdateImage";
import { useParams } from "react-router-dom";
import api from "../../../../../services/api";
import DefaultUserImg from "../../../../../assets/images/default_user.jpg";
import CenterFocusStrongOutlinedIcon from "@mui/icons-material/CenterFocusStrongOutlined";

const ProfileCard = ({ employee }) => {
  const { id } = useParams();
  const profileImage = employee?.user;
  console.log("pp", employee);
  const fullName = employee?.user?.fullName || "Unknown Name";
  const email = employee?.user?.email || "N/A";
  const [open, setOpen] = useState(false);
  const appUrl = import.meta.env.VITE_APP_API_URL 
  const image = employee?.image?.path ? appUrl + '/' + employee?.image?.path : DefaultUserImg;
  console.log(appUrl);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  useEffect(() => {
    api.get("/api/v1/");
  }, []);

  return (
    <Box
      bgcolor="#fafafa"
      p={2}
      borderRadius={2}
      maxWidth="100%"
      display="flex"
      justifyContent="center"
      alignItems="center"
      flexDirection="Column"
    >
      <Box sx={{ position: "relative", width: "120px", height: "120px" }}>
        <img
          src={image}
          alt={fullName}
          style={{
            width: "120px",
            height: "120px",
            borderRadius: "50%",
            objectFit: "cover",
            position: "relative",
          }}
        />
        <Button
          title="Update Image"
          sx={{
            position: "absolute",
            top: "60",
            borderRadius: "50px",
            width: "48px",
            height: "48px",
            display: "inline-flex",
            justifyContent: "center",
            alignItems: "center",
          }}
          onClick={() => setOpen(true)}
        >
          <CenterFocusStrongOutlinedIcon />
        </Button>
      </Box>
      <h5 className="heading-5" style={{ marginBottom: "12px" }}>
        {fullName} (#{employee?.id})
      </h5>
      <a href={`mailto:${email}`} className="text-muted">
        {email}
      </a>
      <br />
      <Button
        variant="outlined"
        color="primary"
        sx={{
          fontSize: "13px",
          fontWeight: "500",
          textTransform: "none",
        }}
      >
        Manage Availability
      </Button>
      <UpdateImage open={open} setOpen={setOpen} handleClose={handleClose} />
    </Box>
  );
};

export default ProfileCard;
