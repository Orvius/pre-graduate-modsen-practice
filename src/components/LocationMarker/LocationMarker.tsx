import { useState } from "react";

import { LatLngExpression } from "leaflet";
import { Marker, Popup, useMapEvents } from "react-leaflet";

const LocationMarker: React.FC = () => {
  const [position, setPosition] = useState<LatLngExpression | null>(null);

  const map = useMapEvents({
    click() {
      map.locate()
    },
    locationfound(e) {
      setPosition(e.latlng)
      map.flyTo(e.latlng, map.getZoom())
    },
  })
  
  return position === null ? null : (
    <Marker position={position}>
      <Popup>You are here</Popup>
    </Marker>
  );
};

export default LocationMarker;
