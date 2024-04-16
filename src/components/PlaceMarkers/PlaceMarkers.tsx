import { Marker, Popup } from "react-leaflet";
import { Icon } from "leaflet";
import { PLACES } from "@constants/searchSettingsConstants";
import { Places } from "@type/places";

interface PlacesMapProps {
  places: Places[];
}

const PlaceMarkers: React.FC<PlacesMapProps> = ({ places }) => {
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
    <>
      {places.map((place) => (
        <Marker
          key={place.xid}
          position={[place.point.lat, place.point.lon]}
          icon={getPlaceIcon(place.kinds)}
        >
          <Popup>{place.name}</Popup>
        </Marker>
      ))}
    </>
  );
};

export default PlaceMarkers;
