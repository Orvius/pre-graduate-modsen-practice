import styles from "./SearchSettings.module.css";
import { PLACES } from "@constants/searchSettingsConstants";

interface SearchSettingsProps {
  placeSelect: (placeName: string) => void;
  selectedPlaces: string | undefined;
}

const SearchSettings: React.FC<SearchSettingsProps> = ({
  placeSelect,
  selectedPlaces,
}) => {
  const handlePlaceClick = (placeName: string) => {
    placeSelect(placeName);
  };

  return (
    <div className={styles.searchSettingsContainer}>
      <ul className={styles.listOfPlaces}>
        {PLACES.map((place, index) => (
          <li
            key={index}
            id={place.placeName}
            onClick={() => handlePlaceClick(place.placeName)}
            className={
              selectedPlaces === place.placeName ? styles.selected : ""
            }
          >
            <img src={place.imgSrc} alt={place.label} />
            {place.label}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SearchSettings;
