import { useState } from "react";
import { Menu, MenuItem, Typography } from "@mui/material";

const ClickableTextMenu = ({ text, items }) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => setAnchorEl(event.currentTarget);
  const handleClose = () => setAnchorEl(null);

  return (
    <>
      <Typography
        onClick={handleClick}
        sx={{
          fontSize: "16px",
          fontWeight: 500,
          color: "#666666",
          cursor: "pointer",
          "&:hover": { color: "#333" },
        }}
      >
        {text}
      </Typography>

      <Menu anchorEl={anchorEl} open={open} onClose={handleClose}>
        {items.map(({ label, onClick }, index) => (
          <MenuItem
            key={index}
            onClick={() => {
              handleClose(); // Close menu first
              onClick(); // Call the provided function
            }}
          >
            {label}
          </MenuItem>
        ))}
      </Menu>
    </>
  );
};

export default ClickableTextMenu;
