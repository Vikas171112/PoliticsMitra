import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Person,
  Phone,
  Lock,
  LocationOn,
  Home,
  PinDrop,
  VpnKey,
  Visibility,
  VisibilityOff,
  ArrowBack, // Import the back icon
} from "@mui/icons-material";
import "./Register.css";

const Register = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [formData, setFormData] = useState({
    firstName: "",
    middleName: "",
    lastName: "",
    phone: "",
    aadhaar: "",
    password: "",
    address: "",
    taluka: "",
    village: "",
    pincode: "",
    state: "",
    district: "",
  });
  const navigate = useNavigate();

  const handleBackClick = () => {
    navigate("/login");
  };

  const handlePasswordToggle = () => {
    setShowPassword(!showPassword);
  };

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setSelectedImage(file);
    }
  };

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const registerData = new FormData();
    registerData.append(
      "name",
      `${formData.firstName} ${formData.middleName} ${formData.lastName}`
    );
    registerData.append("phone", formData.phone);
    registerData.append("aadhaar_number", formData.aadhaar);
    registerData.append("password", formData.password);
    registerData.append("address", formData.address);
    registerData.append("taluka", formData.taluka);
    registerData.append("village", formData.village);
    registerData.append("pincode", formData.pincode);
    registerData.append("state", formData.state);
    registerData.append("district", formData.district);

    if (selectedImage) {
      registerData.append("photo", selectedImage);
    }

    try {
      const response = await fetch(
        "https://politicsmitra-backend.onrender.com/api/auth/register",
        {
          method: "POST",
          body: registerData,
        }
      );

      if (response.ok) {
        const data = await response.json();
        if (selectedImage) {
          const imageUrl = URL.createObjectURL(selectedImage);
          localStorage.setItem("profilePicture", imageUrl); // Store image in localStorage
        }
        navigate("/login");
      } else {
        console.error("Registration failed");
      }
    } catch (error) {
      console.error("Error during registration:", error);
    }
  };

  return (
    <div className="register-container">
      <div className="register-box">
        <div className="register-header">
          <ArrowBack className="back-icon" onClick={handleBackClick} />
          <h2 className="register-title">Let's Create Your Account</h2>
        </div>

        <form className="register-form" onSubmit={handleSubmit}>
          {[
            { id: "firstName", placeholder: "First Name", icon: <Person /> },
            { id: "middleName", placeholder: "Middle Name", icon: <Person /> },
            { id: "lastName", placeholder: "Last Name", icon: <Person /> },
            { id: "phone", placeholder: "Phone Number", icon: <Phone /> },
            {
              id: "aadhaar",
              placeholder: "Aadhaar Number(optional)",
              icon: <VpnKey />,
            },
            {
              id: "password",
              placeholder: "Password",
              icon: <Lock />,
              type: showPassword ? "text" : "password",
            },
            { id: "address", placeholder: "Address", icon: <LocationOn /> },
            { id: "taluka", placeholder: "Taluka", icon: <Home /> },
            { id: "village", placeholder: "Village", icon: <Home /> },
            { id: "pincode", placeholder: "Pincode", icon: <PinDrop /> },
            {
              id: "state",
              placeholder: "State",
              icon: <LocationOn />,
              isSelect: true,
              options: ["Select State", "Maharashtra", "Gujarat", "Delhi"], // Add more options as needed
            },
            {
              id: "district",
              placeholder: "District",
              icon: <LocationOn />,
              isSelect: true,
              options: ["Select District", "Mumbai", "Pune", "Nagpur"], // Add more options as needed
            },
          ].map((field) => (
            <div className="register-input-group" key={field.id}>
              {field.isSelect ? (
                <select
                  id={field.id}
                  required
                  className="register-input"
                  onFocus={(e) => e.target.classList.add("focused")}
                  onBlur={(e) => e.target.classList.remove("focused")}
                  onChange={handleInputChange}
                >
                  {field.options.map((option) => (
                    <option
                      key={option}
                      value={
                        option === `Select ${field.placeholder}` ? "" : option
                      }
                    >
                      {option}
                    </option>
                  ))}
                </select>
              ) : (
                <input
                  type={field.type || "text"}
                  id={field.id}
                  required
                  className="register-input"
                  placeholder={field.placeholder}
                  onFocus={(e) => e.target.classList.add("focused")}
                  onBlur={(e) => e.target.classList.remove("focused")}
                  onChange={handleInputChange}
                />
              )}
              <label htmlFor={field.id} className="register-input-label">
                {field.placeholder}
              </label>
              <div className="register-icon">{field.icon}</div>
              {field.id === "password" && (
                <div
                  className="register-password-toggle"
                  onClick={handlePasswordToggle}
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </div>
              )}
            </div>
          ))}
          <div className="register-input-group">
            <input
              type="file"
              id="image-upload"
              accept="image/*"
              style={{ display: "none" }} // Hide the file input
              onChange={handleImageChange}
            />
            <label htmlFor="image-upload" className="image-upload-label">
              Upload Image +
            </label>
          </div>
          {selectedImage && (
            <div className="selected-image-container">
              <img
                src={URL.createObjectURL(selectedImage)}
                alt="Selected"
                className="selected-image"
              />
            </div>
          )}
          <button type="submit" className="register-btn">
            Register
          </button>
        </form>
      </div>
    </div>
  );
};

export default Register;
