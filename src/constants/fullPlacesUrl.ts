import { VITE_PLACES_API_KEY, VITE_PLACES_API_URL } from "./config";

export const getFullPlacesUrl = (radius: string, lat: number, lon: number, kinds: string): string => {
  return `${VITE_PLACES_API_URL}radius?radius=${radius}&lon=${lon}&lat=${lat}&src_geom=osm&src_attr=osm&kinds=${kinds}&format=json&apikey=${VITE_PLACES_API_KEY}`;
};