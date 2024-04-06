import { useState, useEffect } from "react";
import { Marker, Popup, useMapEvents } from "react-leaflet";
import { LatLngExpression } from 'leaflet';
import { useAppDispatch, useAppSelector } from "@hooks/reduxHooks";
import { setPosition } from "@store/locationSlice";
import { RootState } from "@store/index";

import styles from "./LocationMarker.module.css";
import { locationFalseImg, locationTrueImg } from "@constants/images";

type MarkerPosition = LatLngExpression | null;

const LocationMarker: React.FC = () => {
  const dispatch = useAppDispatch();
  const { latitude, longitude } = useAppSelector((state: RootState) => state.location);
  const position: MarkerPosition = latitude && longitude ? [latitude, longitude] : null;
  
  const [active, setActive] = useState<boolean>(false);

  const map = useMapEvents({
    locationfound(e) {
      if (active) {
        dispatch(setPosition({ latitude: e.latlng.lat, longitude: e.latlng.lng }));
        map.flyTo(e.latlng, map.getMaxZoom());
      }
    },
  });

  useEffect(() => {
    if (active) {
      map.locate();
    }
  }, [active, map]);

  const handleLocateButtonClick = () => {
    setActive(true);
  };

  return (
    <>
      {position !== null && (
        <Marker position={position}>
          <Popup>You are here</Popup>
        </Marker>
      )}
      <button
        className={`${styles.locationButton} ${active ? "active" : ""}`}
        onClick={handleLocateButtonClick}
      >
        <img
          src={active ? locationTrueImg : locationFalseImg}
          alt={"Your geolocation"}
        />
      </button>
    </>
  );
};

export default LocationMarker;
