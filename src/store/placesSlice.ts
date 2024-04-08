import { getFullPlacesUrl } from "@constants/fullPlacesUrl";
import { Places } from "../types/places"; //не понимаю почему не могу @

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios, { AxiosError } from "axios";

interface PlaceState {
  listOfPlaces: Places[];
  loading: boolean;
  error: string | null;
}

export interface FetchPlacesArguments {
  radius: string;
  lat: number;
  lon: number;
  kinds: string,
}

export const fetchPlaces = createAsyncThunk<
  Places[],
  FetchPlacesArguments,
  { rejectValue: string }
>(
  "places/fetchPlaces",
  async function ({ radius, lat, lon, kinds }, { rejectWithValue }) {
    const data = await axios
      .get<Places[]>(getFullPlacesUrl(radius, lat, lon, kinds))
      .then((response) =>
        response.data.filter((place) => place.name.trim() !== "")
      )
      .catch((e: AxiosError) => {
        return rejectWithValue(e.message);
      });

    return data;
  }
);

const initialState: PlaceState = {
  listOfPlaces: [],
  loading: false,
  error: null,
};

const placesSlice = createSlice({
  name: "places",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchPlaces.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchPlaces.fulfilled, (state, action) => {
        state.listOfPlaces = action.payload;
        state.loading = false;
      });
  },
});

export default placesSlice.reducer;
