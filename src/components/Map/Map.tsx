import "leaflet/dist/leaflet.css";
import "./Map.css";

import { START_COORDINATES } from '@constants/coordinate';
import { VITE_TILE_LAYER_URL } from "@constants/config";
import { MapContainer, TileLayer, ZoomControl } from "react-leaflet";
import LocationMarker from "@components/LocationMarker/LocationMarker";

const Map: React.FC = () => {
  return (
    <div className="leaflet-container">
      <MapContainer center={START_COORDINATES} zoom={16} zoomControl={false}>
        <ZoomControl position='topright'/>
        <TileLayer url={VITE_TILE_LAYER_URL} />
        <LocationMarker />
      </MapContainer>
    </div>
  );
};

export default Map;
