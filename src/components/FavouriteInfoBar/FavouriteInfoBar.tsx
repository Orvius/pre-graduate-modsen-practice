import styles from "./FavouriteInfoBar.module.css";
import SearchInput from "@components/SearchInput/SearchInput";
import { useAppDispatch, useAppSelector } from "@hooks/reduxHooks";
import { favoriteIcon, arrowRightImg, noPhoto } from "@constants/images";
import { fetchPlaceInfoById, setPlaceCardOpen } from "@store/cardInfoSlice";

const FavouriteInfoBar: React.FC = () => {
  const list = useAppSelector((state) => state.cardInfo.list);
  const dispatch = useAppDispatch();

  const handleGoToPlace = async (xid: string) => {
    await dispatch(fetchPlaceInfoById(xid));
    dispatch(setPlaceCardOpen(true));
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
            <img src={favoriteIcon} alt="В избранном" />
            <button className={styles.goToButton} onClick={() => handleGoToPlace(place.xid)}>
              <img src={arrowRightImg} alt="Перейти" />
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FavouriteInfoBar;
