import { configureStore, combineReducers } from "@reduxjs/toolkit";
import placesSlice from "./placesSlice";
import locationSlice from "./locationSlice";
import searchInfoBarSlice from "./searchInfoBarSlice";
import cardInfoSlice from "./cardInfoSlice";

const rootReducer = combineReducers({
  places: placesSlice,
  location: locationSlice,
  searchInfoBar: searchInfoBarSlice,
  cardInfo: cardInfoSlice,
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;

export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;
