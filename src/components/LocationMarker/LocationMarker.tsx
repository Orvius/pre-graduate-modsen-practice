import { Marker, Popup } from "react-leaflet";
import { LatLngExpression } from "leaflet";

const LocationMarker = ({ position }: { position: LatLngExpression }) => {
  return (
    <Marker position={position}>
      <Popup>I'm here</Popup>
    </Marker>
  );
};

export default LocationMarker;
