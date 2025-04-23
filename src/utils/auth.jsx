export const isAuthenticated = () => {
  const token = localStorage.getItem("token"); // Ensure "token" is stored as a string
<<<<<<< HEAD
  const role = localStorage.getItem("role") || "employee"; // Default to "employee" if null
=======
  const role = localStorage.getItem("role") || "user"; // Default to "user" if null
>>>>>>> bf24c8b40d0f2c64e033459ddbc16934da383f42
  const user = localStorage.getItem("user");
  return {
    isAuth: !!token, // Converts token presence into a boolean
    role,
    user,
  };
};

// export const isAuthenticated = () => {
//   return {
//     isAuth: true,
//     role: "SuperAdmin",
//   };
// };
