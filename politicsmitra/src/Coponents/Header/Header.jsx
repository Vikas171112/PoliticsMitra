// Header.js
import React, { useState } from "react";
import "./Header.css";
import MenuIcon from "@mui/icons-material/Menu";
import SlideMenu from "../SlideMenu/SlideMenu";
import ImageIcon from "@mui/icons-material/Image";
import KeyboardVoiceIcon from "@mui/icons-material/KeyboardVoice";
import PortraitIcon from "@mui/icons-material/Portrait";
import { Link } from "react-router-dom";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuClick = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleCloseMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <div className="header-container">
      <div className="menu" onClick={handleMenuClick}>
        <MenuIcon />
      </div>
      <div className="Logo-container">
        <Link to="/">
          <img src="" alt="noimage" />
        </Link>
      </div>
      <div className="navlist">
        <ul>
          <li>
            <Link to="/gallery">
              <ImageIcon /> Gallery
            </Link>
          </li>
          <li>
            <Link to="/events">
              <KeyboardVoiceIcon /> Events
            </Link>
          </li>
          <li>
            <Link to="/padhadhikaripage">
              <PortraitIcon /> Adhikari
            </Link>
          </li>
        </ul>
      </div>
      <SlideMenu isOpen={isMenuOpen} onClose={handleCloseMenu} />
    </div>
  );
}

export default Header;
