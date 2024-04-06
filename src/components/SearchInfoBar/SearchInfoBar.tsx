import { useState } from "react";
import { useAppDispatch, useAppSelector } from "@hooks/reduxHooks";
import { RootState } from "@store/index";
import { fetchPlaces, FetchPlacesArguments } from "@store/placesSlice";

import { searchBtnOff } from "@constants/images";
import SearchInput from "@components/SearchInput/SearchInput";
import SearchSettings from "@components/SearchSettings/SearchSettings";
import styles from "./SearchInfoBar.module.css";

const SearchInfoBar: React.FC = () => {
  const [selectedPlaces, setSelectedPlaces] = useState<string | undefined>();
  const [radius, setRadius] = useState<string>("1");

  const dispatch = useAppDispatch();
  const position = useAppSelector((state: RootState) => state.location.position);
  
  const lat = Array.isArray(position) ? position[0] : position?.lat ?? 0;
  const lng = Array.isArray(position) ? position[1] : position?.lng ?? 0;

  const placeSelect = (placeName: string) => {
    setSelectedPlaces(placeName);
  };

  const handleRadiusChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value.replace(/\D/g, '');
    setRadius(value);
  };

  const toggSearch = async () => {
    const radiusInMeters = String(parseInt(radius) * 1000);
    const fetch: FetchPlacesArguments = {
      radius: radiusInMeters,
      lat: lat,
      lon: lng,
    };
    await dispatch(fetchPlaces(fetch));
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
            <input
              className={styles.radiusInput}
              placeholder="1"
              value={radius}
              onChange={handleRadiusChange}
            />
            км
          </div>
        </div>
        <button className={styles.searchButton} onClick={toggSearch}>
          <img src={searchBtnOff} alt="Начать поиск" />
        </button>
      </div>
    </>
  );
};

export default SearchInfoBar;
