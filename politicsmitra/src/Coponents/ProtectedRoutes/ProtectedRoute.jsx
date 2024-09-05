import React from "react";
import { Navigate } from "react-router-dom";

// This component checks if the user is logged in by checking the presence of a token
const ProtectedRoute = ({ children }) => {
  const token = localStorage.getItem("userToken");

  if (!token) {
    // Redirect to login page if no token is found
    return <Navigate to="/login" replace />;
  }

  return children;
};

export default ProtectedRoute;
