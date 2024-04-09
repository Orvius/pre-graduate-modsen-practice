import { useState, useEffect } from "react";
import { Marker, Popup, Circle, useMapEvents } from "react-leaflet";
import { LatLngExpression, Icon } from "leaflet";
import { useAppDispatch, useAppSelector } from "@hooks/reduxHooks";
import { setPosition } from "@store/locationSlice";
import { RootState } from "@store/index";

import styles from "./LocationMarker.module.css";
import {
  locationFalseImg,
  locationTrueImg,
  locationMarkerImg,
} from "@constants/images";

type MarkerPosition = LatLngExpression | null;

const LocationMarker: React.FC = () => {
  const dispatch = useAppDispatch();
  const { latitude, longitude } = useAppSelector(
    (state: RootState) => state.location
  );
  const position: MarkerPosition =
    latitude && longitude ? [latitude, longitude] : null;

  const [active, setActive] = useState<boolean>(false);

  const map = useMapEvents({
    locationfound(e) {
      if (active) {
        dispatch(
          setPosition({ latitude: e.latlng.lat, longitude: e.latlng.lng })
        );
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
    map.locate();
  };

  const markerIcon = new Icon({
    iconUrl: locationMarkerImg,
    iconSize: [32, 24],
  });

  return (
    <>
      {position !== null && (
        <>
          <Marker position={position} icon={markerIcon}>
            <Popup>You are here</Popup>
          </Marker>
          <Circle
            center={position}
            pathOptions={{
              fillColor: "#5E7BC7",
              fillOpacity: 0.4,
              color: "transparent",
            }}
            radius={100}
          />
        </>
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
