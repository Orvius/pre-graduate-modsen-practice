import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { LatLngExpression } from "leaflet";

interface LocationState {
  position: LatLngExpression | null;
}

const initialState: LocationState = {
  position: null,
};

const locationSlice = createSlice({
  name: "location",
  initialState,
  reducers: {
    setPosition(state, action: PayloadAction<LatLngExpression | null>) {
      state.position = action.payload;
    },
  },
});

export const { setPosition } = locationSlice.actions;
export default locationSlice.reducer;