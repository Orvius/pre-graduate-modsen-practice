import styles from "./PlaceCard.module.css";

import { useAppSelector } from "@hooks/reduxHooks";
import { favoriteIcon, locationIcon, noPhoto } from "@constants/images";

const PlaceCard: React.FC = () => {
  const { currentPlace } = useAppSelector((state) => state.cardInfo);

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

  return (
    <div className={styles.cardContainer}>
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
            <a className={styles.siteUrl} href={currentPlace.url} target="_blank">
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
          <button className={styles.addToFavoriteButton}>
            <img src={favoriteIcon} alt="Сохранить" />
            Сохранить
          </button>
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
