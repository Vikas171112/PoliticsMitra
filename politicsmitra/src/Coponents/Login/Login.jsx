import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Phone, Lock, Language } from "@mui/icons-material";
import "./Login.css";

const Login = () => {
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  const sanitizePhoneNumber = (phone) => phone.replace(/\D/g, "");

  const handleLogin = async (e) => {
    e.preventDefault();
    const sanitizedPhone = sanitizePhoneNumber(phone);
    const loginData = { phone: sanitizedPhone, password: password };

    try {
      const response = await fetch(
        "https://politicsmitra-backend.onrender.com/api/auth/login",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(loginData),
        }
      );

      if (response.ok) {
        const data = await response.json();
        localStorage.setItem("accessToken", data.accessToken);
        if (data.profilePicture) {
          localStorage.setItem("profilePicture", data.profilePicture);
        }
        navigate("/gallery");
      } else {
        const errorData = await response.json();
        setErrorMessage(errorData.message || "Login failed. Please try again.");
      }
    } catch (error) {
      setErrorMessage("Something went wrong. Please try again later.");
    }
  };

  const handleRegisterClick = () => {
    navigate("/register"); // Navigate to register page
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <h2 className="login-title">Welcome Back</h2>
        <p className="paragraph-heading">Please Enter Your Phone Number</p>
        <div className="language-select-container">
          <div className="language-select">
            <Language className="icon globe-icon" />
            <select name="language" defaultValue="en">
              <option value="en">English</option>
              <option value="mr">Marathi</option>
            </select>
          </div>
        </div>
        <form className="login-form" onSubmit={handleLogin}>
          <div className="input-group">
            <Phone className="icon" />
            <input
              type="tel"
              id="phone"
              required
              placeholder="Phone number"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
            <label htmlFor="phone">Phone number</label>
          </div>
          <div className="input-group">
            <Lock className="icon" />
            <input
              type="password"
              id="password"
              required
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <label htmlFor="password">Password</label>
          </div>
          {errorMessage && <p className="error-message">{errorMessage}</p>}
          <button type="submit" className="login-btn">
            Sign in
          </button>
        </form>
        <div className="register-container">
          <button className="logregister-btn" onClick={handleRegisterClick}>
            Register Here
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
