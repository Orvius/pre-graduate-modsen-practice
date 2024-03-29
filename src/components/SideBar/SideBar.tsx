import "./SideBar.css";

import logo from "@assets/images/logo.svg";
import searchImg from "@assets/images/searchbtn.svg";
import favoritesImg from "@assets/images/favorites.svg";
import loginImg from "@assets/images/loginbtn.svg";

const SideBar: React.FC = () => {
  return (
    <div className="sidebar-container">
      <a className="sidebar-logo" href="">
        <img src={logo} alt="logo" />
      </a>
      <div className="sidebar-menu">
        <div className="sidebar-buttons">
          <button className="sidebar-button">
            <img src={searchImg} alt="search" />
          </button>
          <button className="sidebar-button">
            <img src={favoritesImg} alt="favorites" />
          </button>
        </div>
        <button className="login-button">
          <img src={loginImg} alt="login" />
        </button>
      </div>
    </div>
  );
};

export default SideBar;
