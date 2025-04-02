export const isAuthenticated = () => {
  const token = localStorage.getItem("token"); // Ensure "token" is stored as a string
  const role = localStorage.getItem("role") || "user"; // Default to "user" if null

  return {
    isAuth: !!token, // Converts token presence into a boolean
    role,
  };
};
