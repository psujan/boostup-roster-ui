export const isAuthenticated = () => {
  const token = localStorage.getItem("token"); // Ensure "token" is stored as a string
  const role = localStorage.getItem("role") || "";
  const user = localStorage.getItem("user");
  return {
    isAuth: !!token, // Converts token presence into a boolean
    role,
    user: user ? JSON.parse(user) : {},
  };
};

// export const isAuthenticated = () => {
//   return {
//     isAuth: true,
//     role: "SuperAdmin",
//   };
// };
