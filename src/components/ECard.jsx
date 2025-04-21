import {
  Avatar,
  Box,
  Button,
  CardContent,
  Stack,
  Typography,
} from "@mui/material";
import { useNavigate } from "react-router-dom";

const ECard = ({ emp }) => {
  const navigate = useNavigate();
  return (
    <div>
      <Box
        className="employee-box"
        sx={{
          width: "100%",
          textAlign: "center",
          p: 2,
          minHeight: "300px",
          borderRadius: "8px",
          // boxShadow: 3,
          backgroundColor: "#FCFBFB",
          border: "none",
        }}
      >
        <Avatar
          src="./src/assets/images/default_user.jpg"
          alt="James Wilson"
          sx={{ width: 140, height: 140, margin: "auto", mb: 2 }}
        />
        <CardContent>
          <div style={{ minHeight: "120px" }}>
            <Typography sx={{ fontFamily: "Inter", fontWeight: "500", mb: 1 }}>
              {emp?.user?.fullName}
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
              {emp?.user?.email}
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
              {emp?.contact || "Contact : N/A"}
            </Typography>
          </div>
          <Stack
            direction="row"
            spacing={2}
            sx={{ width: "100%" }}
            justifyContent="center"
          >
            <Button
              variant="contained"
              sx={{
                background: "var(--primaryColor)",
                fontSize: "13px",
                fontWeight: "500",
                textTransform: "none",
                boxShadow: "none",
              }}
              onClick={() => navigate("/roster/add?employeeId=" + emp.id)}
            >
              Add Roster
            </Button>
            <Button
              variant="contained"
              sx={{
                background: "var(--secondaryColor)",
                color: "rgba(0, 0, 0, 0.6)",
                fontSize: "13px",
                fontWeight: "500",
                textTransform: "none",
                boxShadow: "none",
              }}
              onClick={() => navigate(`/employee/${emp.id}`)}
            >
              View Profile
            </Button>
          </Stack>
        </CardContent>
      </Box>
    </div>
  );
};

export default ECard;
