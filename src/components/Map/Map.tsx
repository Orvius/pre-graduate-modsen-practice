import "leaflet/dist/leaflet.css";
import "./Map.css";

import { START_COORDINATES } from "@constants/coordinate";
import { VITE_TILE_LAYER_URL } from "@constants/config";
import { PLACES } from "@constants/searchSettingsConstants";

import { useAppSelector } from "@hooks/reduxHooks";
import { RootState } from "@store/index";
import {
  MapContainer,
  TileLayer,
  ZoomControl,
  Marker,
  Popup,
  Circle,
} from "react-leaflet";
import { LatLngExpression, Icon } from "leaflet";
import LocationMarker from "@components/LocationMarker/LocationMarker";

const Map: React.FC = () => {
  const places = useAppSelector((state) => state.places);
  const latitude = useAppSelector(
    (state: RootState) => state.location.latitude
  );
  const longitude = useAppSelector(
    (state: RootState) => state.location.longitude
  );
  const radius = useAppSelector(
    (state: RootState) => state.searchInfoBar.radius
  );
  const isCircleVisible = useAppSelector(
    (state: RootState) => state.searchInfoBar.isCircleVisible
  );

  const icons: { [key: string]: Icon } = {};
  PLACES.forEach((place) => {
    icons[place.kind] = new Icon({
      iconUrl: place.imgSrc,
      iconSize: [40, 40],
    });
  });

  const getPlaceIcon = (kinds: string): Icon | undefined => {
    const kindsArray = kinds.split(",");
    for (const kind of kindsArray) {
      const trimmedKind = kind.trim();
      if (icons[trimmedKind]) {
        return icons[trimmedKind];
      }
    }
    return undefined;
  };

  const center: LatLngExpression | null =
    latitude !== null && longitude !== null ? [latitude, longitude] : null;

  return (
    <div className="leaflet-container">
      <MapContainer center={START_COORDINATES} zoom={16} zoomControl={false}>
        <ZoomControl position="topright" />
        <LocationMarker />
        {places.listOfPlaces.length > 0 &&
          places.listOfPlaces.map((place) => (
            <Marker
              key={place.xid}
              position={[place.point.lat, place.point.lon]}
              icon={getPlaceIcon(place.kinds)}
            >
              <Popup>{place.name}</Popup>
            </Marker>
          ))}
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
