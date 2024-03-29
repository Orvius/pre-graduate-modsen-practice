import "leaflet/dist/leaflet.css";
import "./Map.css";

import { LatLngExpression } from "leaflet";
import { MapContainer, TileLayer } from "react-leaflet";
import LocationMarker from "@components/LocationMarker/LocationMarker";

const Map: React.FC = () => {
  const position: LatLngExpression = [55.19861585730597, 30.207041013890635];

  return (
    <div className="leaflet-container">
      <MapContainer center={position} zoom={16}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <LocationMarker />
      </MapContainer>
    </div>
  );
};

export default Map;
