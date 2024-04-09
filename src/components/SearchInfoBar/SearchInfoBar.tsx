import { useState } from "react";
import { useAppDispatch, useAppSelector } from "@hooks/reduxHooks";
import { setRadius } from "@store/searchInfoBarSlice";
import { RootState } from "@store/index";
import { fetchPlaces, FetchPlacesArguments } from "@store/placesSlice";

import { searchBtnOff } from "@constants/images";
import SearchInput from "@components/SearchInput/SearchInput";
import SearchSettings from "@components/SearchSettings/SearchSettings";
import styles from "./SearchInfoBar.module.css";

const SearchInfoBar: React.FC = () => {
  const [selectedPlaces, setSelectedPlaces] = useState<string[]>(["historic"]);

  const dispatch = useAppDispatch();
  const radius = useAppSelector((state: RootState) => state.searchInfoBar.radius);
  const latitude = useAppSelector((state: RootState) => state.location.latitude)!;
  const longitude = useAppSelector((state: RootState) => state.location.longitude)!;

  const placeSelect = (selectedPlaces: string[]) => {
    setSelectedPlaces(selectedPlaces);
  };

  const handleRadiusChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setRadius(event.target.value.replace(/\D/g, '')));
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
