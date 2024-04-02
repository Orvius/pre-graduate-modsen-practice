import styles from "./SearchSettings.module.css";

import natureIcon from "@assets/images/nature.svg";
import cultureIcon from "@assets/images/culture.svg";
import historyIcon from "@assets/images/history.svg";
import religionIcon from "@assets/images/religion.svg";
import architectureIcon from "@assets/images/architecture.svg";
import industrialIcon from "@assets/images/industrial.svg";
import otherIcon from "@assets/images/other.svg";
import entertainmentIcon from "@assets/images/entertainment.svg";
import sportIcon from "@assets/images/sport.svg";
import adultIcon from "@assets/images/18+.svg";
import shopIcon from "@assets/images/shop.svg";
import foodIcon from "@assets/images/food.svg";
import coffeeIcon from "@assets/images/coffee.svg";
import bankIcon from "@assets/images/bank.svg";
import hotelIcon from "@assets/images/hotels.svg";

interface Place {
  label: string;
  imgSrc: string;
  placeName: string;
}

interface SearchSettingsProps {
  placeSelect: (placeName: string) => void;
  selectedPlaces: string | undefined;
}

const SearchSettings: React.FC<SearchSettingsProps> = ({
  placeSelect,
  selectedPlaces,
}) => {
  const places: Place[] = [
    { label: "Природа", imgSrc: natureIcon, placeName: "nature" },
    { label: "Культура", imgSrc: cultureIcon, placeName: "culture" },
    { label: "История", imgSrc: historyIcon, placeName: "history" },
    { label: "Религия", imgSrc: religionIcon, placeName: "religion" },
    {
      label: "Архитектура",
      imgSrc: architectureIcon,
      placeName: "architecture",
    },
    {
      label: "Индустриальные объекты",
      imgSrc: industrialIcon,
      placeName: "industrial",
    },
    {
      label: "Развлечения",
      imgSrc: entertainmentIcon,
      placeName: "entertainment",
    },
    { label: "Спорт", imgSrc: sportIcon, placeName: "sport" },
    { label: "Для совершеннолетних", imgSrc: adultIcon, placeName: "adult" },
    { label: "Магазины", imgSrc: shopIcon, placeName: "shop" },
    { label: "Еда", imgSrc: foodIcon, placeName: "food" },
    { label: "Кафе", imgSrc: coffeeIcon, placeName: "cafes" },
    { label: "Банки", imgSrc: bankIcon, placeName: "banks" },
    { label: "Отели", imgSrc: hotelIcon, placeName: "hotel" },
    { label: "Разное", imgSrc: otherIcon, placeName: "other" },
  ];

  const handlePlaceClick = (placeName: string) => {
    placeSelect(placeName);
  };

  return (
    <div className={styles.searchSettingsContainer}>
      <ul className={styles.listOfPlaces}>
        {places.map((place, index) => (
          <li
            key={index}
            id={place.placeName}
            onClick={() => handlePlaceClick(place.placeName)}
            className={selectedPlaces === place.placeName ? styles.selected : ""}
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
