import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Register from "../Register/Register";
import Login from "../Login/Login";

function LoginRegisterPage() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/login" element={<Login />} /> {/* Login page */}
          <Route path="/register" element={<Register />} />{" "}
          {/* Register page */}
        </Routes>
      </Router>
    </div>
  );
}

export default LoginRegisterPage;
