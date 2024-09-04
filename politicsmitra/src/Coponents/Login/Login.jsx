import React from "react";
import { useNavigate } from "react-router-dom";
import PhoneIcon from "@mui/icons-material/Phone";
import LockIcon from "@mui/icons-material/Lock";
import LanguageIcon from "@mui/icons-material/Language";
import VisibilityIcon from "@mui/icons-material/Visibility";
import "./Login.css";

const Login = () => {
  const navigate = useNavigate();

  return (
    <div className="login-container">
      <div className="login-box">
        <div className="welcome-text">
          <h2>Welcome back,</h2>
          <p>Please enter your phone number.</p>
        </div>
        <div className="language-select">
          <span role="img" aria-label="globe">
            <LanguageIcon className="icon" />
          </span>
          <select name="language">
            <option value="en">English</option>
            <option value="es">Marati</option>
          </select>
        </div>
        <form className="login-form">
          <div className="input-group">
            <PhoneIcon className="icon" />
            <input type="text" placeholder=" Phone Number" />
          </div>
          <div className="input-group">
            <LockIcon className="icon" />
            <input type="password" placeholder=" Password" />
            <span className="show-password">
              <VisibilityIcon className="icon" />
            </span>
          </div>
          <button type="submit" className="login-btn">
            Login
          </button>

          <button
            className="register-btn1"
            onClick={() => navigate("/register")}
          >
            Register
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
