import { Box } from "@mui/material";
import { useNavigate } from "react-router-dom";
import KeyboardBackspaceOutlinedIcon from "@mui/icons-material/KeyboardBackspaceOutlined";
const BackButton = () => {
  const navigate = useNavigate();
  const goBack = () => {
    navigate(-1);
  };
  return (
    <Box className="back-btn" onClick={() => goBack()}>
      <KeyboardBackspaceOutlinedIcon size="16px" />
      &nbsp;Back
    </Box>
  );
};

export default BackButton;
