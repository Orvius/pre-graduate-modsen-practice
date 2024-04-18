import styles from "./FavouriteInfoBar.module.css";
import { useAppDispatch, useAppSelector } from "@hooks/reduxHooks";
import { addCardInfo, removeFavoritePlace } from "@store/cardInfoSlice";
import { FavoriteIcon, arrowRightImg, noPhoto } from "@constants/images";
import { Link } from "react-router-dom";

const FavouriteInfoBar: React.FC = () => {
  const dispatch = useAppDispatch();
  const { currentPlace, list } = useAppSelector((state) => state.cardInfo);

  const handleGoToPlace = (xid: string) => {
    const place = list.find((place) => place.xid === xid);
    if (place) {
      dispatch(addCardInfo(place));
    }
  };

  const toggleRemoveButton = () => {
    if (currentPlace) {
      dispatch(removeFavoritePlace(currentPlace.xid));
    }
  };

  return (
    <div className={styles.favouriteInfoBarContainer}>
      <div className={styles.favouriteInfoBarText}>Избранное:</div>
      {list.length > 0 ? (
        <div className={styles.favoriteList}>
          {list.map((place) => (
            <div key={place.xid} className={styles.favoriteCard}>
              <div className={styles.favoriteBlock}>
                <div className={styles.favoriteImg}>
                  <img
                    src={place.preview?.source || noPhoto}
                    alt={place.preview?.source}
                  />
                </div>
                <div className={styles.favoriteName}>{place.name}</div>
              </div>
              <div className={styles.text}>
                {place.wikipedia_extracts?.text || "Нет описания места"}
              </div>
              <div className={styles.favoriteButtons}>
                <button className={styles.removeFavoriteButton} onClick={toggleRemoveButton}>
                  <FavoriteIcon className={styles.removeFavoriteButtonImg} />
                </button>
                <Link to={`/place/${place.xid}`}>
                  <button
                    className={styles.goToButton}
                    onClick={() => handleGoToPlace(place.xid)}
                  >
                    <img src={arrowRightImg} alt="Перейти" />
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className={styles.noPlaces}>Избранных мест нет</div>
      )}
    </div>
  );
};

export default FavouriteInfoBar;
