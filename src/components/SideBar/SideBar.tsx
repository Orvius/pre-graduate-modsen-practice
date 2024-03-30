import "./SideBar.css";
import React, { useState } from "react";
import SearchInfoBar from "@components/SearchInfoBar/SearchInfoBar";

import logo from "@assets/images/logo.svg";
import searchImg from "@assets/images/searchbtn.svg";
import favoritesImg from "@assets/images/favorites.svg";
import loginImg from "@assets/images/loginbtn.svg";
import arrowLeftImg from "@assets/images/arrowLeft.svg";
import arrowRightImg from "@assets/images/arrowRight.svg";

const SideBar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSearchInfoBar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className="sidebar-container">
        <a className="sidebar-logo" href="">
          <img src={logo} alt="logo" />
        </a>
        <div className="sidebar-menu">
          <div className="sidebar-buttons">
            <button className="sidebar-button" onClick={toggleSearchInfoBar}>
              <img src={searchImg} alt="search" />
            </button>
            <button className="sidebar-button" onClick={toggleSearchInfoBar}>
              <img src={favoritesImg} alt="favorites" />
            </button>
          </div>
          <button className="login-button">
            <img src={loginImg} alt="login" />
          </button>
        </div>
      </div>
      {isOpen && <SearchInfoBar />}
      <button
        className={`sideBar-open_close ${isOpen ? "moved" : ""}`}
        onClick={toggleSearchInfoBar}
      >
        <img src={isOpen ? arrowLeftImg : arrowRightImg} alt="logo" />
      </button>
    </>
  );
};

export default SideBar;
