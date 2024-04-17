import styles from "./SideBar.module.css";
import { useState, useEffect } from "react";
import { useAppSelector, useAppDispatch } from "@hooks/reduxHooks";
import { setPlaceCardOpen } from "@store/cardInfoSlice";
import SearchInfoBar from "@components/SearchInfoBar/SearchInfoBar";
import FavouriteInfoBar from "@components/FavouriteInfoBar/FavouriteInfoBar";
import PlaceCard from "@components/PlaceCard/PlaceCard";

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
  const placeCardOpen = useAppSelector((state) => state.cardInfo.placeCardOpen);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (placeCardOpen) {
      setSearchInfoBarOpen(false);
      setFavouriteBarOpen(false);
    }
  }, [placeCardOpen]);

  const toggleSearchInfoBar = () => {
    setSearchInfoBarOpen(!searchInfoBarOpen);
    if (favouriteBarOpen) setFavouriteBarOpen(false);
    if (placeCardOpen) dispatch(setPlaceCardOpen(false));
  };

  const toggleFavouriteBar = () => {
    setFavouriteBarOpen(!favouriteBarOpen);
    if (searchInfoBarOpen) setSearchInfoBarOpen(false);
    if (placeCardOpen) dispatch(setPlaceCardOpen(false));
  };

  const toggleBothBars = () => {
    if (searchInfoBarOpen || favouriteBarOpen || placeCardOpen) {
      setSearchInfoBarOpen(false);
      setFavouriteBarOpen(false);
      dispatch(setPlaceCardOpen(false));
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
      {searchInfoBarOpen && <SearchInfoBar />}
      {favouriteBarOpen && <FavouriteInfoBar />}
      {placeCardOpen && <PlaceCard />}
      <button
        className={`${styles.sideBarOpen_close} ${
          searchInfoBarOpen || favouriteBarOpen || placeCardOpen ? styles.moved : ""
        }`}
        onClick={toggleBothBars}
      >
        <img
          src={
            searchInfoBarOpen || favouriteBarOpen || placeCardOpen ? arrowLeftImg : arrowRightImg
          }
          alt="logo"
        />
      </button>
    </>
  );
};

export default SideBar;
