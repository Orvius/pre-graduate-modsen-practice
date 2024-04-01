import styles from "./LocationMarker.module.css";

import locationFalseImg from "@assets/images/Location_False.svg";
import locationTrueImg from "@assets/images/Location_True.svg";

import { useState } from "react";
import { LatLngExpression } from "leaflet";
import { Marker, Popup, useMapEvents } from "react-leaflet";

const LocationMarker: React.FC = () => {
  const [position, setPosition] = useState<LatLngExpression | null>(null);
  const [active, setActive] = useState<boolean>(false);

  const map = useMapEvents({
    locationfound(e) {
      if (active) {
        setPosition(e.latlng);
        map.flyTo(e.latlng, map.getMaxZoom());
      }
    },
  });

  const handleLocateButtonClick = () => {
    setActive(true);
      map.locate();
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
          alt={
            active
              ? "Your geolocation is turned on"
              : "Your geolocation is turned off"
          }
        />
      </button>
    </>
  );
};

export default LocationMarker;
