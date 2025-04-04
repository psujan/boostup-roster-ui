import { createTheme } from "@mui/material";

export const theme = createTheme({
  typography: {
    fontFamily: "Inter, sans-serif",
    lineHeight: "100%",
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: "8px",
          transition: "all 0.3s ease-in-out",
          letterSpacing: "1px",
          "&:hover": {
            transform: "translateY(-2px)",
          },
          "&:active": {
            transform: "translateY(0px)",
            boxShadow: "none",
          },
        },
      },
    },
    MuiSelect: {
      styleOverrides: {
        root: {
          backgroundColor: "transparent",
          "& .MuiOutlinedInput-notchedOutline": {
            border: "none",
          },
          "&:hover .MuiOutlinedInput-notchedOutline": {
            border: "none",
          },
          "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
            border: "none",
          },
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          "& .MuiOutlinedInput-root": {
            // padding: "10px",
            borderRadius: "8px",
          },
          "&:hover fieldset": {
            borderColor: "var(--primaryColor)",
          },
          "&.focused fieldset": {
            outline: "var(--primaryColor)", // Change to your primary color when focused
          },
        },
      },
    },
    MuiIconButton: {
      styleOverrides: {
        root: {
          "&:hover": {
            borderRadius: "10px",
            backgroundColor: "#eee", // Light red background
          },
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
            borderColor: "var(--primaryColor)", // change globally
          },
        },
      },
    },
    MuiInputLabel: {
      styleOverrides: {
        root: {
          fontSize: "16px",
          "&.Mui-focused": {
            color: "var(--primaryColor)", // label color on focus
          },
        },
      },
    },
  },
});
