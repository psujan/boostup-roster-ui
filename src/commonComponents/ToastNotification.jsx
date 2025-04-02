import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// Initialize toast settings
export const ToastMesssage = (type, message) => {
  toast[type](message, {
    position: "top-right",
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    theme: "light",
  });
};
