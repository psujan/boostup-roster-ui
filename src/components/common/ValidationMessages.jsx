// import BackButton from "../../commonComponents/BackButton";
import { Box, Button } from "@mui/material";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";

export default function ValidationMessages({
  validationErrors,
  show = true,
  onHide = () => {},
}) {
  return (
    <Box
      className="validation-error-box"
      sx={{ display: show ? "block" : "none" }}
    >
      <div className="flex flex-between">
        <h6>Please correct these errors</h6>
        <Button
          variant="text"
          sx={{
            fontSize: "13px",
            fontWeight: "500",
            width: "115px",
            height: "32px",
            padding: "6px 10px",
            textTransform: "none",
            color: "var(--redColor)",
            border: "1px solid var(--redColor)",
          }}
          onClick={() => onHide(false)}
        >
          <CloseOutlinedIcon sx={{ fontSize: "14px" }} />
          &nbsp; Hide Errors
        </Button>
      </div>
      <ul>
        {validationErrors.map((msg, i) => (
          <li key={i}>{msg}</li>
        ))}
      </ul>
    </Box>
  );
}
