import "leaflet/dist/leaflet.css";
import "./Map.css";

import { START_COORDINATES } from "@constants/coordinate";
import { VITE_TILE_LAYER_URL } from "@constants/config";

import { useAppSelector } from "@hooks/reduxHooks";
import { MapContainer, TileLayer, ZoomControl, Circle } from "react-leaflet";
import { LatLngExpression } from "leaflet";
import LocationMarker from "@components/LocationMarker/LocationMarker";
import PlaceMarkers from "@components/PlaceMarkers/PlaceMarkers";

const Map: React.FC = () => {
  const places = useAppSelector((state) => state.places);
  const { latitude, longitude } = useAppSelector((state) => state.location);
  const { radius, isCircleVisible } = useAppSelector(
    (state) => state.searchInfoBar
  );

  const center: LatLngExpression | null =
    latitude !== null && longitude !== null ? [latitude, longitude] : null;

  return (
    <div className="leaflet-container">
      <MapContainer center={START_COORDINATES} zoom={16} zoomControl={false}>
        <ZoomControl position="topright" />
        <LocationMarker />
        {places.listOfPlaces.length > 0 && (
          <PlaceMarkers places={places.listOfPlaces} />
        )}
        {center && isCircleVisible && (
          <Circle
            center={center}
            pathOptions={{
              fillColor: "#5E7BC7",
              fillOpacity: 0.2,
              dashArray: "20, 10",
              weight: 2,
            }}
            radius={parseInt(radius) * 1000}
          />
        )}
        <TileLayer url={VITE_TILE_LAYER_URL} />
      </MapContainer>
    </div>
  );
};

export default Map;
