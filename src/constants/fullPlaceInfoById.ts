import { VITE_PLACES_API_KEY, VITE_PLACES_API_URL } from "./config";

export const fullPlaceInfoById = (xid: string): string => {
  return `${VITE_PLACES_API_URL}xid/${xid}?apikey=${VITE_PLACES_API_KEY}`;
};