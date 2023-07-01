import React, { useContext, useState } from "react";
import { DarkModeContext } from "../../context/darkModeContext";
import { DarkModeReducer } from "../../context/darkModeReducer";

import { Link } from "react-router-dom";
import { Select, MenuItem } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import LanguageIcon from "@mui/icons-material/Language";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import FullscreenExitIcon from "@mui/icons-material/FullscreenExit";
import NotificationsIcon from "@mui/icons-material/Notifications";
import ListIcon from "@mui/icons-material/List";
import ChatIcon from "@mui/icons-material/Chat";
import img from "./profil.jpg";
import "./navbar.scss";

const Navbar = () => {
  // 1. Utilisez useContext pour accéder à l'état darkMode et à la fonction dispatch du contexte DarkModeContext.
  const { darkMode, dispatch } = useContext(DarkModeContext);
  const [showOptions, setShowOptions] = useState(false);

  const handlePhotoClick = () => {
    setShowOptions(!showOptions);
  };

  const handleOptionClick = (option) => {
    // Gérer la logique du clic sur l'option ici
    console.log("Option clicked:", option);
  };

  // 2. Ajoutez une fonction toggleDarkMode qui appellera la fonction dispatch avec l'action appropriée pour activer ou désactiver le mode sombre.
  const toggleDarkMode = () => {
    dispatch({ type: "TOGGLE" });
  };

  return (
    <div className={`navbar ${darkMode ? "dark-mode" : ""}`}>
      <div className="wrapper">
        <div className="search">
          <input type="text" placeholder="Search ..." />
          <SearchIcon className="icon" />
        </div>
        <div className="items">
          <div className="item">
            <LanguageIcon className="icon" />
            English
          </div>
          <div className="item" onClick={toggleDarkMode}>
            {/* 3. Utilisez la classe conditionnelle active pour appliquer les styles appropriés à l'icône du mode sombre */}
            <Brightness4Icon className={`icon ${darkMode ? "active" : ""}`} />
          </div>
          <div className="item">
            <FullscreenExitIcon className="icon" />
          </div>
          <div className="item">
            <ListIcon className="icon" />
          </div>
          <div className="item">
            <NotificationsIcon className="icon" />
            <div className="counter">1</div>
          </div>
          <div className="item">
            <ChatIcon className="icon" />
            <div className="counter">2</div>
          </div>
          <div className="item">
            {showOptions && (
              <div className="options">
                <MenuItem
                  className="logout-option"
                  onClick={() => handleOptionClick("Log Out")}
                >
                  <Link to="/" style={{ textDecoration: "none" }}>
                    Log Out
                  </Link>
                </MenuItem>
              </div>
            )}
            <div className="avatar-wrapper" onClick={handlePhotoClick}>
              <img src={img} alt="" className="avatar" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
