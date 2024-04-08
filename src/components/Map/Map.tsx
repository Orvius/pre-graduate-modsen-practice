import "leaflet/dist/leaflet.css";
import "./Map.css";

import { START_COORDINATES } from "@constants/coordinate";
import { VITE_TILE_LAYER_URL } from "@constants/config";
import { PLACES } from "@constants/searchSettingsConstants";

import { useAppSelector } from "@hooks/reduxHooks";

import { MapContainer, TileLayer, ZoomControl, Marker, Popup } from "react-leaflet";
import { Icon } from "leaflet";
import LocationMarker from "@components/LocationMarker/LocationMarker";

const Map: React.FC = () => {
  const places = useAppSelector((state) => state.places);

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
        <TileLayer url={VITE_TILE_LAYER_URL} />
      </MapContainer>
    </div>
  );
};

export default Map;
