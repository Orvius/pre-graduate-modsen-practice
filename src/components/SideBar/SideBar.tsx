import styles from "./SideBar.module.css";
import { useState } from "react";
import SearchInfoBar from "@components/SearchInfoBar/SearchInfoBar";
import FavouriteInfoBar from "@components/FavouriteInfoBar/FavouriteInfoBar";

import {
  logo,
  searchIconOff,
  searchIconOn,
  favoritesOff,
  favoritesOn,
  loginImg,
  arrowLeftImg,
  arrowRightImg,
} from "@constants/images";

const SideBar: React.FC = () => {
  const [searchInfoBarOpen, setSearchInfoBarOpen] = useState(false);
  const [favouriteBarOpen, setFavouriteBarOpen] = useState(false);

  const toggleSearchInfoBar = () => {
    setSearchInfoBarOpen(!searchInfoBarOpen);
    if (favouriteBarOpen) setFavouriteBarOpen(false);
  };

  const toggleFavouriteBar = () => {
    setFavouriteBarOpen(!favouriteBarOpen);
    if (searchInfoBarOpen) setSearchInfoBarOpen(false);
  };

  const toggleBothBars = () => {
    if (searchInfoBarOpen || favouriteBarOpen) {
      setSearchInfoBarOpen(false);
      setFavouriteBarOpen(false);
    } else {
      setSearchInfoBarOpen(true);
    }
  };

  return (
    <>
      <div className={styles.sidebarContainer}>
        <a className={styles.sidebarLogo} href="">
          <img src={logo} alt="logo" />
        </a>
        <div className={styles.sidebarMenu}>
          <div className={styles.sidebarButtons}>
            <button
              className={styles.sidebarButton}
              onClick={toggleSearchInfoBar}
            >
              <img
                src={searchInfoBarOpen ? searchIconOn : searchIconOff}
                alt="search"
              />
            </button>
            <button
              className={styles.sidebarButton}
              onClick={toggleFavouriteBar}
            >
              <img
                src={favouriteBarOpen ? favoritesOn : favoritesOff}
                alt="favorites"
              />
            </button>
          </div>
          <button className={styles.loginButton}>
            <img src={loginImg} alt="login" />
          </button>
        </div>
      </div>
      {searchInfoBarOpen && <SearchInfoBar isOpen={searchInfoBarOpen} />}
      {favouriteBarOpen && <FavouriteInfoBar />}
      <button
        className={`${styles.sideBarOpen_close} ${
          searchInfoBarOpen || favouriteBarOpen ? styles.moved : ""
        }`}
        onClick={toggleBothBars}
      >
        <img
          src={
            searchInfoBarOpen || favouriteBarOpen ? arrowLeftImg : arrowRightImg
          }
          alt="logo"
        />
      </button>
    </>
  );
};

export default SideBar;
