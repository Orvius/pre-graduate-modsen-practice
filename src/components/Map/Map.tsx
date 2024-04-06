import "leaflet/dist/leaflet.css";
import "./Map.css";

import { START_COORDINATES } from '@constants/coordinate';
import { VITE_TILE_LAYER_URL } from "@constants/config";

import { useAppSelector } from '@hooks/reduxHooks';

import { MapContainer, TileLayer, ZoomControl, Marker, Popup } from "react-leaflet";
import LocationMarker from "@components/LocationMarker/LocationMarker";

const Map: React.FC = () => {
  const places = useAppSelector((state) => state.places);

  return (
    <div className="leaflet-container">
      <MapContainer center={START_COORDINATES} zoom={16} zoomControl={false}>
        <ZoomControl position='topright'/>
        <LocationMarker />
        {places.listOfPlaces.length > 0 &&
          places.listOfPlaces.map((place) => (
            <Marker key={place.xid} position={[place.point.lat, place.point.lon]}>
              <Popup>{place.name}</Popup>
            </Marker>
          ))}
        <TileLayer url={VITE_TILE_LAYER_URL} />
      </MapContainer>
    </div>
  );
};

export default Map;
