import styles from "./SearchSettings.module.css";
import { PLACES } from "@constants/searchSettingsConstants";

interface SearchSettingsProps {
  updateSelectedPlaces: (selectedPlaces: string[]) => void;
  selectedPlaces: string[];
}

const SearchSettings: React.FC<SearchSettingsProps> = ({
  updateSelectedPlaces,
  selectedPlaces,
}) => {
  const handlePlaceClick = (placeName: string) => {
    if (selectedPlaces.includes(placeName)) {
      updateSelectedPlaces(
        selectedPlaces.filter((place) => place !== placeName)
      );
    } else {
      updateSelectedPlaces([...selectedPlaces, placeName]);
    }
  };

  return (
    <div className={styles.searchSettingsContainer}>
      <ul className={styles.listOfPlaces}>
        {PLACES.map((place, index) => (
          <li
            key={index}
            id={place.kind}
            onClick={() => handlePlaceClick(place.kind)}
            className={
              selectedPlaces.includes(place.kind) ? styles.selected : ""
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
