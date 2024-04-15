import { useState } from "react";
import { useAppDispatch, useAppSelector } from "@hooks/reduxHooks";
import { setRadius, setCircleVisibility } from "@store/searchInfoBarSlice";
import { fetchPlaces, FetchPlacesArguments } from "@store/placesSlice";

import { searchBtnOff } from "@constants/images";
import SearchInput from "@components/SearchInput/SearchInput";
import SearchSettings from "@components/SearchSettings/SearchSettings";
import styles from "./SearchInfoBar.module.css";

const SearchInfoBar: React.FC = () => {
  const [selectedPlaces, setSelectedPlaces] = useState<string[]>(["historic"]);
  const { radius } = useAppSelector((state) => state.searchInfoBar);
  const latitude = useAppSelector((state) => state.location.latitude ?? 0);
  const longitude = useAppSelector((state) => state.location.longitude ?? 0);
  const dispatch = useAppDispatch();

  const placeSelect = (selectedPlaces: string[]) => {
    setSelectedPlaces(selectedPlaces);
  };

  const handleRadiusChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    let value = event.target.value;
    if (value !== "") {
      dispatch(setRadius(value));
    }
  };

  const toggSearch = async () => {
    const radiusInMeters = String(parseInt(radius) * 1000);
    const fetch: FetchPlacesArguments = {
      radius: radiusInMeters,
      lat: latitude,
      lon: longitude,
      kinds: selectedPlaces.join(","),
    };
    await dispatch(fetchPlaces(fetch));
    dispatch(setCircleVisibility(true));
  };

  return (
    <>
      <div className={styles.searchInfoBarContainer}>
        <div className={styles.searchInfoBarInputs}>
          <SearchInput />
          Искать:
          <SearchSettings
            updateSelectedPlaces={placeSelect}
            selectedPlaces={selectedPlaces}
          />
          В радиусе:
          <div className={styles.searchInfoBarRadius}>
            <input
              className={styles.radiusInput}
              placeholder="1"
              type="number"
              min="1"
              max="50"
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
