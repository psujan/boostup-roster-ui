import * as React from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import MoreVertIcon from "@mui/icons-material/MoreVert";

export default function BasicActions({
  onEdit = () => {},
  onDelete = () => {},
  onView = () => {},
  view = false,
  edit = true,
  del = true,
}) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleEdit = () => {
    onEdit();
    setAnchorEl(null);
  };

  const handleShow = () => {
    onView();
    setAnchorEl(null);
  };

  const handleDelete = () => {
    onDelete();
    setAnchorEl(null);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Button
        id="basic-button"
        aria-controls={open ? "basic-action-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
      >
        <MoreVertIcon sx={{ color: "#666", fontWeight: 400 }} />
      </Button>
      <Menu
        id="basic-action-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        sx={{ boxShadow: "none" }}
      >
        {view ? (
          <MenuItem onClick={handleShow}>
            <span style={{ fontSize: "14px" }}>View</span>
          </MenuItem>
        ) : (
          ""
        )}
        {edit ? (
          <MenuItem onClick={handleEdit}>
            <span style={{ fontSize: "14px" }}>Edit</span>
          </MenuItem>
        ) : (
          ""
        )}
        {del ? (
          <MenuItem onClick={handleDelete}>
            <span style={{ fontSize: "14px", color: "red" }}>Delete</span>
          </MenuItem>
        ) : (
          ""
        )}
        {/* <MenuItem onClick={handleClose}>Logout</MenuItem> */}
      </Menu>
    </div>
  );
}
