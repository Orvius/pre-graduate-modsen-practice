import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface LocationState {
  latitude: number | null;
  longitude: number | null;
}

const initialState: LocationState = {
  latitude: null,
  longitude: null,
};

const locationSlice = createSlice({
  name: "location",
  initialState,
  reducers: {
    setPosition(
      state,
      action: PayloadAction<{ latitude: number; longitude: number }>
    ) {
      state.latitude = action.payload.latitude;
      state.longitude = action.payload.longitude;
    },
  },
});

export const { setPosition } = locationSlice.actions;
export default locationSlice.reducer;
