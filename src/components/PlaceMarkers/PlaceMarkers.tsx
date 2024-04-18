import { Marker, Popup } from "react-leaflet";
import { Icon } from "leaflet";
import { PLACES } from "@constants/searchSettingsConstants";
import { Places } from "@type/places";

import { useAppDispatch } from "@hooks/reduxHooks";
import { fetchPlaceInfoById, setPlaceCardOpen } from "@store/cardInfoSlice";
import { Link } from "react-router-dom";

interface PlacesMapProps {
  places: Places[];
}

const PlaceMarkers: React.FC<PlacesMapProps> = ({ places }) => {
  const dispatch = useAppDispatch();

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

  const handleMarkerClick = async (xid: string) => {
    await dispatch(fetchPlaceInfoById(xid));
    dispatch(setPlaceCardOpen(true));
  };

  return (
    <>
      {places.map((place) => (
        <Marker
          key={place.xid}
          position={[place.point.lat, place.point.lon]}
          icon={getPlaceIcon(place.kinds)}
          eventHandlers={{
            click: () => handleMarkerClick(place.xid),
          }}
        >
          <Popup>
            <Link to={`/place/${place.xid}`}>{place.name}</Link>
          </Popup>
        </Marker>
      ))}
    </>
  );
};

export default PlaceMarkers;
