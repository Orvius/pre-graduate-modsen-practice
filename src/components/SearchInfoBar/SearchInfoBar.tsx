import { useEffect, useState, useMemo } from "react";
import { useAppDispatch, useAppSelector } from "@hooks/reduxHooks";
import { setRadius, setCircleVisibility } from "@store/searchInfoBarSlice";
import { fetchPlaces, FetchPlacesArguments } from "@store/placesSlice";

import { SearchIcon } from "@constants/images";
import SearchSettings from "@components/SearchSettings/SearchSettings";
import styles from "./SearchInfoBar.module.css";

const SearchInfoBar: React.FC = () => {
  const [selectedPlaces, setSelectedPlaces] = useState<string[]>([]);
  const [geolocationError, setGeolocationError] = useState<boolean>(false);
  const [searched, setSearched] = useState<boolean>(false);
  const { loading, error, listOfPlaces } = useAppSelector(
    (state) => state.places
  );
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

  useEffect(() => {
    if (latitude !== null && longitude !== null) {
      setGeolocationError(false);
    }
  }, [latitude, longitude]);

  const toggSearch = async () => {
    if (latitude === null || longitude === null) {
      setGeolocationError(true);
      return;
    }

    const radiusInMeters = String(parseInt(radius) * 1000);
    const fetch: FetchPlacesArguments = {
      radius: radiusInMeters,
      lat: latitude ?? 0,
      lon: longitude ?? 0,
      kinds: selectedPlaces.join(","),
    };
    await dispatch(fetchPlaces(fetch));
    dispatch(setCircleVisibility(true));
    setSearched(true);
  };

  const searchButtonContent = useMemo(() => {
    return loading ? (
      "Загрузка..."
    ) : (
      <SearchIcon className={styles.searchButtonImg} />
    );
  }, [loading]);

  return (
    <>
      <div className={styles.searchInfoBarContainer}>
        <div className={styles.searchInfoBarInputs}>
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
        <div>
          {error && (
            <div className={styles.errorMessage}>
              Произошла ошибка при запросе
            </div>
          )}
          {geolocationError && (
            <div className={styles.errorMessage}>Геопозиция не включена</div>
          )}
          {searched && !loading && listOfPlaces.length === 0 && (
            <div className={styles.errorMessage}>Ничего не найдено</div>
          )}
          <button className={styles.searchButton} onClick={toggSearch}>
            {searchButtonContent}
          </button>
        </div>
      </div>
    </>
  );
};

export default SearchInfoBar;
