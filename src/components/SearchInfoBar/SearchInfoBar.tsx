import { useState, useMemo } from "react";
import { useAppDispatch, useAppSelector } from "@hooks/reduxHooks";
import { setRadius, setCircleVisibility } from "@store/searchInfoBarSlice";
import { fetchPlaces, FetchPlacesArguments } from "@store/placesSlice";

import { searchBtnOff } from "@constants/images";
import SearchInput from "@components/SearchInput/SearchInput";
import SearchSettings from "@components/SearchSettings/SearchSettings";
import styles from "./SearchInfoBar.module.css";

const SearchInfoBar: React.FC = () => {
  const [selectedPlaces, setSelectedPlaces] = useState<string[]>(["historic"]);
  const { loading } = useAppSelector((state) => state.places);
  const { radius } = useAppSelector((state) => state.searchInfoBar);
  const { latitude, longitude } = useAppSelector((state) => state.location);
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
      lat: latitude ?? 0,
      lon: longitude ?? 0,
      kinds: selectedPlaces.join(","),
    };
    await dispatch(fetchPlaces(fetch));
    dispatch(setCircleVisibility(true));
  };

  const searchButtonContent = useMemo(() => {
    return loading ? "Загрузка..." : <img src={searchBtnOff} alt="Начать поиск" />;
  }, [loading]);

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
          {searchButtonContent}
        </button>
      </div>
    </>
  );
};

export default SearchInfoBar;
