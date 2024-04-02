import styles from "./SearchInfoBar.module.css";
import { useState } from "react";

import { searchBtnOff } from '@constants/images';

import SearchInput from "@components/SearchInput/SearchInput";
import SearchSettings from "@components/SearchSettings/SearchSettings";

interface SearchInfoBarProps {
  isOpen: boolean;
}

const SearchInfoBar: React.FC<SearchInfoBarProps> = ({ isOpen }) => {
  const [selectedPlaces, setSelectedPlaces] = useState<string | undefined>();

  const placeSelect = (placeName: string) => {
    setSelectedPlaces(placeName);
  };

  return (
    <>
      <div className={styles.searchInfoBarContainer}>
        <div className={styles.searchInfoBarInputs}>
          <SearchInput />
          Искать:
          <SearchSettings
            placeSelect={placeSelect}
            selectedPlaces={selectedPlaces}
          />
          В радиусе:
          <div className={styles.searchInfoBarRadius}>
            <input className={styles.radiusInput} placeholder="1" />
            км
          </div>
        </div>
        <button className={styles.searchButton}>
          <img src={searchBtnOff} alt="Начать поиск" />
        </button>
      </div>
    </>
  );
};

export default SearchInfoBar;
