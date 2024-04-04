import { configureStore, combineReducers } from "@reduxjs/toolkit";
import placesSlice from "./placesSlice"

const rootReducer = combineReducers({
  places: placesSlice,
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;

export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;
