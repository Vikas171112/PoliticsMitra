import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import PersonIcon from "@mui/icons-material/Person";
import PhoneIcon from "@mui/icons-material/Phone";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import LockIcon from "@mui/icons-material/Lock";
import HomeIcon from "@mui/icons-material/Home";
import "./Register.css";

const Register = () => {
  const navigate = useNavigate();
  const [selectedState, setSelectedState] = useState("");
  const [districts, setDistricts] = useState([]);
  const [image, setImage] = useState(null);

  const stateOptions = [
    { name: "Maharashtra", districts: ["Mumbai", "Pune", "Nagpur"] },
    { name: "Gujarat", districts: ["Ahmedabad", "Surat", "Vadodara"] },
    { name: "Karnataka", districts: ["Bangalore", "Mysore", "Hubli"] },
  ];

  const handleStateChange = (e) => {
    const selectedStateName = e.target.value;
    setSelectedState(selectedStateName);

    const state = stateOptions.find(
      (state) => state.name === selectedStateName
    );
    if (state) {
      setDistricts(state.districts);
    } else {
      setDistricts([]);
    }
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    setImage(file ? URL.createObjectURL(file) : null);
  };

  return (
    <div className="register-container">
      <div className="register-box">
        <div className="back-arrow" onClick={() => navigate("/")}>
          ← {/* Clicking this should go to the login page */}
        </div>
        <h2>Let's create your account</h2>
        <form className="register-form">{/* Form fields here */}</form>
      </div>
    </div>
  );
};

export default Register;
