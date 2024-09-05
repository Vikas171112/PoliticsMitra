import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Login from "../Login/Login";
import Register from "../Register/Register";

function LoginSignupPage() {
  return (
    <Router>
      <Routes>
        {/* Redirect root path to login */}
        <Route path="/" element={<Navigate to="/login" />} />
        {/* Login page */}
        <Route path="/login" element={<Login />} />
        {/* Register page */}
        <Route path="/register" element={<Register />} />
      </Routes>
    </Router>
  );
}

export default LoginSignupPage;
