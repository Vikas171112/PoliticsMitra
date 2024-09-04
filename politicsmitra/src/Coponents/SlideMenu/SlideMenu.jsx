// SlideMenu.js
import React from "react";
import "./SlideMenu.css";
import IosShareIcon from "@mui/icons-material/IosShare";
import InfoIcon from "@mui/icons-material/Info";
import LogoutIcon from "@mui/icons-material/Logout";
import ProfileCard from "../ProfileCard/ProfileCard";
import logo from "../SlideMenu/logohjp.jpg";

function SlideMenu({ isOpen, onClose }) {
  const profileData = {
    logoSrc: logo,
    organizationName: "Organization Name",
    profilePictureSrc: "https://via.placeholder.com/100",
    userName: "Vikas Kumar Jha",
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
            <a href="#">
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
