import styles from "./SideBar.module.css";
import routes from "@constants/routes.js";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "@hooks/reduxHooks";
import { setPlaceCardOpen } from "@store/cardInfoSlice";

import {
  logo,
  SearchIcon,
  FavoriteIcon,
  loginImg,
  arrowLeftImg,
  arrowRightImg,
} from "@constants/images";

const SideBar: React.FC = () => {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const isPlaceCardOpen = useAppSelector(
    (state) => state.cardInfo.placeCardOpen
  );
  const dispatch = useAppDispatch();

  const isSearchRoute = pathname === routes.search;
  const isFavouritesRoute = pathname === routes.favourites;

  const toggleBothBars = () => {
    dispatch(setPlaceCardOpen(false));
    navigate(
      isSearchRoute || isFavouritesRoute || isPlaceCardOpen
        ? routes.home
        : routes.search
    );
  };

  return (
    <>
      <div className={styles.sidebarContainer}>
        <Link to={routes.home} className={styles.sidebarLogo}>
          <img src={logo} alt="logo" />
        </Link>
        <div className={styles.sidebarMenu}>
          <div className={styles.sidebarButtons}>
            <button
              className={`${styles.searchButton} ${isSearchRoute ? styles.on : ""}`}
              onClick={() =>
                navigate(isSearchRoute ? routes.home : routes.search)
              }
            >
              <SearchIcon className={styles.searchButtonImg}/>
            </button>
            <button
              className={`${styles.favouriteButton} ${isFavouritesRoute ? styles.on : ""}`}
              onClick={() =>
                navigate(isFavouritesRoute ? routes.home : routes.favourites)
              }
            >
              <FavoriteIcon className={styles.favouriteButtonImg}/>
            </button>
          </div>
          <button className={styles.loginButton}>
            <img src={loginImg} alt="login" />
          </button>
        </div>
      </div>
      <button
        className={`${styles.sideBarOpen_close} ${
          isSearchRoute || isFavouritesRoute || isPlaceCardOpen
            ? styles.moved
            : ""
        }`}
        onClick={toggleBothBars}
      >
        <img
          src={
            isSearchRoute || isFavouritesRoute || isPlaceCardOpen
              ? arrowLeftImg
              : arrowRightImg
          }
          alt="logo"
        />
      </button>
    </>
  );
};

export default SideBar;
