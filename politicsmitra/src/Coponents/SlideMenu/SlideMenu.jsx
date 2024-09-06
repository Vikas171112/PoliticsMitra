import React from "react";
import { useNavigate } from "react-router-dom";
import {
  Logout as LogoutIcon,
  Info as InfoIcon,
  Share as IosShareIcon,
} from "@mui/icons-material";
import ProfileCard from "../ProfileCard/ProfileCard";
import logo from "../SlideMenu/logohjp.jpg";
import "./SlideMenu.css";

function SlideMenu({ isOpen, onClose }) {
  const navigate = useNavigate();
  const profilePictureSrc =
    localStorage.getItem("profilePicture") || "https://via.placeholder.com/100";

  const profileData = {
    logoSrc: logo,
    organizationName: "Organization Name",
    profilePictureSrc,
    userName: "Vikas Kumar Jha",
  };

  const handleLogout = () => {
    localStorage.removeItem("accessToken");
    localStorage.removeItem("profilePicture");
    navigate("/login");
  };

  return (
    <div className={`slide-menu ${isOpen ? "open" : ""}`}>
      <button className="close-button" onClick={onClose}>
        &times;
      </button>
      <div className="slide-menu-content">
        <ProfileCard
          logoSrc={profileData.logoSrc}
          organizationName={profileData.organizationName}
          profilePictureSrc={profileData.profilePictureSrc}
          userName={profileData.userName}
        />
        <ul>
          <li>
            <a href="#">
              <IosShareIcon className="menu-icon" />
              Share Profile
            </a>
          </li>
          <li>
            <a href="#">
              <InfoIcon className="menu-icon" />
              Terms and Conditions
            </a>
          </li>
          <li>
            <a href="#" onClick={handleLogout}>
              <LogoutIcon className="menu-icon" />
              Logout
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default SlideMenu;
