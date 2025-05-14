import * as React from "react";
import { styled, alpha } from "@mui/material/styles";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { useNavigate } from "react-router-dom";

const StyledMenu = styled((props) => (
  <Menu
    elevation={0}
    anchorOrigin={{
      vertical: "bottom",
      horizontal: "right",
    }}
    transformOrigin={{
      vertical: "top",
      horizontal: "right",
    }}
    {...props}
  />
))(({ theme }) => ({
  "& .MuiPaper-root": {
    borderRadius: 6,
    marginTop: theme.spacing(1),
    minWidth: 180,
    color: "rgb(55, 65, 81)",
    boxShadow:
      "rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px",
    "& .MuiMenu-list": {
      padding: "4px 0",
    },
    "& .MuiMenuItem-root": {
      "& .MuiSvgIcon-root": {
        fontSize: 18,
        color: theme.palette.text.secondary,
        marginRight: theme.spacing(1.5),
      },
      "&:active": {
        backgroundColor: alpha(
          theme.palette.primary.main,
          theme.palette.action.selectedOpacity
        ),
      },
    },
    ...theme.applyStyles("dark", {
      color: theme.palette.grey[300],
    }),
  },
}));

export default function QuickActions() {
  const navigate = useNavigate();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const icon = <MoreVertIcon sx={{ margin: "0 16px", padding: "2px" }} />;

  return (
    <div>
      <Button
        id="quick-action-btn"
        aria-controls={open ? "quick-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        sx={{ border: "none", color: "#666", textTransform: "capitalize" }}
        disableElevation
        onClick={handleClick}
      >
        Quick Actions {icon}
      </Button>
      <StyledMenu
        id="quick-menu"
        MenuListProps={{
          "aria-labelledby": "quick-action-btn",
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
      >
        <MenuItem
          onClick={() => navigate("/onboard-staff")}
          disableRipple
          sx={{ fontSize: "13px" }}
        >
          Onboard Staff
        </MenuItem>
        <MenuItem
          onClick={() => navigate("/jobs/add-jobs")}
          disableRipple
          sx={{ fontSize: "13px" }}
        >
          Add Job
        </MenuItem>
        {/* <Divider sx={{ my: 0.5 }} /> */}
        <MenuItem
          onClick={() => navigate("/roster/add")}
          disableRipple
          sx={{ fontSize: "13px" }}
        >
          Add Roster
        </MenuItem>
        {/* <MenuItem onClick={handleClose} disableRipple>
          <MoreHorizIcon />
          More
        </MenuItem> */}
      </StyledMenu>
    </div>
  );
}
