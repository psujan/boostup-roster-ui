import DriveFileRenameOutlineIcon from "@mui/icons-material/DriveFileRenameOutline";
import { Box, Button } from "@mui/material";
import { useEffect, useState } from "react";
import UpdateImage from "./UpdateImage";
import { useParams } from "react-router-dom";
import api from "../../../../../services/api";
const ProfileCard = ({ employee }) => {
  const { id } = useParams();
  const profileImage = employee?.user;
  console.log("pp", employee);
  const fullName = employee?.user?.fullName || "Unknown Name";
  const email = employee?.user?.email || "N/A";
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  useEffect(() => {
    api.get("/api/v1/");
  }, []);

  return (
    <Box
      bgcolor="#fafafa"
      p={4}
      borderRadius={2}
      maxWidth="80%"
      display="flex"
      justifyContent="center"
      alignItems="center"
      flexDirection="Column"
    >
      <Box sx={{ position: "relative", width: "120px", height: "120px" }}>
        <img
          src={profileImage}
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
          sx={{ position: "absolute", top: "60" }}
          onClick={() => setOpen(true)}
        >
          <DriveFileRenameOutlineIcon />
        </Button>
      </Box>
      <h2 style={{ margin: "1rem 0 0.5rem 0" }}>{fullName}</h2>
      <a
        href={`mailto:${email}`}
        style={{ color: "gray", textDecoration: "underline" }}
      >
        {email}
      </a>
      <br />
      <Button
        sx={{
          color: "#fff",
          background: "var(--primaryColor)",
          fontSize: "16px",
          fontWeight: "600",
          textTransform: "none",
          padding: "10px 20px",
        }}
      >
        Manage Availability
      </Button>
      <UpdateImage open={open} setOpen={setOpen} handleClose={handleClose} />
    </Box>
  );
};

export default ProfileCard;
