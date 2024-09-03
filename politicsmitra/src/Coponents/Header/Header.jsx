// Header.js
import React, { useState } from "react";
import "./Header.css";
import MenuIcon from "@mui/icons-material/Menu";
import SlideMenu from "../SlideMenu/SlideMenu";
import ImageIcon from "@mui/icons-material/Image";
import KeyboardVoiceIcon from "@mui/icons-material/KeyboardVoice";
import PortraitIcon from "@mui/icons-material/Portrait";

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
        <a href="">
          <img src="" alt="noimage" />
        </a>
      </div>
      <div className="navlist">
        <ul>
          <a href="">
            <ImageIcon /> <li>Gallery</li>
          </a>
          <a href="">
            <KeyboardVoiceIcon /> <li>Events</li>
          </a>
          <a href="">
            <PortraitIcon /> <li>Adhikari</li>
          </a>
        </ul>
      </div>
      <SlideMenu isOpen={isMenuOpen} onClose={handleCloseMenu} />
    </div>
  );
}

export default Header;
