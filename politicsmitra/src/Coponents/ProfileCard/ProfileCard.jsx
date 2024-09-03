// ProfileCard.js
import React from "react";
import PropTypes from "prop-types";
import "./ProfileCard.css";

const ProfileCard = ({
  logoSrc,
  organizationName,
  profilePictureSrc,
  userName,
}) => {
  return (
    <div className="profile-card">
      <div className="profile-header">
        <img src={logoSrc} alt="Logo" className="logo" />
        <div className="organization-name">{organizationName}</div>
      </div>
      <div className="profile-info">
        <img
          src={profilePictureSrc}
          alt="User Profile"
          className="profile-picture"
        />
        <div className="user-name">{userName}</div>
      </div>
    </div>
  );
};

// ProfileCard.propTypes = {
//   logoSrc: PropTypes.string.isRequired,
//   organizationName: PropTypes.string.isRequired,
//   profilePictureSrc: PropTypes.string.isRequired,
//   userName: PropTypes.string.isRequired,
// };

export default ProfileCard;
