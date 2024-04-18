import styles from "./FavouriteInfoBar.module.css";
import SearchInput from "@components/SearchInput/SearchInput";
import { useAppDispatch, useAppSelector } from "@hooks/reduxHooks";
import { addCardInfo } from "@store/cardInfoSlice";
import { FavoriteIcon, arrowRightImg, noPhoto } from "@constants/images";
import { Link } from "react-router-dom";

const FavouriteInfoBar: React.FC = () => {
  const dispatch = useAppDispatch();
  const list = useAppSelector((state) => state.cardInfo.list);

  const handleGoToPlace = (xid: string) => {
    const place = list.find((place) => place.xid === xid);
    if (place) {
      dispatch(addCardInfo(place));
    }
  };

  return (
    <div className={styles.favouriteInfoBarContainer}>
      <SearchInput />
      <div className={styles.favouriteInfoBarText}>Избранное:</div>
      <div className={styles.favoriteList}></div>
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
            <FavoriteIcon className={styles.favoriteButton} />
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
  );
};

export default FavouriteInfoBar;
