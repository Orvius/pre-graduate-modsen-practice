import styles from "./PlaceCard.module.css";

import { useMemo } from "react";
import { useAppDispatch, useAppSelector } from "@hooks/reduxHooks";
import { FavoriteIcon, locationIcon, noPhoto } from "@constants/images";
import { addFavouritePlace, removeFavoritePlace } from "@store/cardInfoSlice";
import { arrowLeftImg } from "@constants/images";
import routes from "@constants/routes.js";
import { Link } from "react-router-dom";

const PlaceCard: React.FC = () => {
  const { currentPlace, list } = useAppSelector((state) => state.cardInfo);
  const dispatch = useAppDispatch();

  if (!currentPlace) {
    return null;
  }

  const formatAddress = (address: any): string => {
    const addressParts: string[] = [];
    if (address.house_number) addressParts.push(address.house_number);
    if (address.pedestrian) addressParts.push(address.pedestrian);
    if (address.road) addressParts.push(address.road);
    if (address.city_district) addressParts.push(address.city_district);
    if (address.city) addressParts.push(address.city);
    if (address.state) addressParts.push(address.state);
    if (address.country) addressParts.push(address.country);

    return addressParts.join(", ");
  };
  const formattedAddress: string = formatAddress(currentPlace.address);

  const toggleAddFavorite = () => {
    if (currentPlace) {
      dispatch(addFavouritePlace(currentPlace));
    }
  };

  const toggleRemoveFavorite = () => {
    if (currentPlace) {
      dispatch(removeFavoritePlace(currentPlace.xid));
    }
  };

  const isFavorite = useMemo(() => {
    return list.some((place) => place.xid === currentPlace.xid);
  }, [list, currentPlace]);

  return (
    <div className={styles.cardContainer}>
      <Link to={routes.favourites} className={styles.backLink}>
        <button className={styles.backButton}>
          <img src={arrowLeftImg} alt="Назад" /> Избранное
        </button>
      </Link>
      <div className={styles.placeCard}>
        <div className={styles.placeImg}>
          <img
            src={currentPlace.preview?.source || noPhoto}
            alt={currentPlace.preview?.source}
          />
        </div>
        <div className={styles.placeName}>{currentPlace.name}</div>
        <div className={styles.placeDescription}>
          <div className={styles.placeBlock}>
            <div className={styles.locationTitle}>{formattedAddress}</div>
          </div>
          <div className={styles.placeUrl}>
            <a
              className={styles.siteUrl}
              href={currentPlace.url}
              target="_blank"
            >
              {currentPlace.url}
            </a>
          </div>
          <div className={styles.placeBlock}>
            <div className={styles.text}>
              {currentPlace.wikipedia_extracts?.text || "Нет описания места"}
            </div>
          </div>
        </div>
        <div className={styles.cardButtons}>
          {!isFavorite ? (
            <button
              className={styles.addToFavoriteButton}
              onClick={toggleAddFavorite}
            >
              <FavoriteIcon className={styles.addToFavoriteButtonImg} />
              Сохранить
            </button>
          ) : (
            <button
              className={styles.addToFavoriteButton}
              onClick={toggleRemoveFavorite}
            >
              <FavoriteIcon className={styles.addToFavoriteButtonImg} />
              Удалить
            </button>
          )}
          <button className={styles.routeButton}>
            <img src={locationIcon} alt="Маршрут" />
            Маршрут
          </button>
        </div>
      </div>
    </div>
  );
};

export default PlaceCard;
