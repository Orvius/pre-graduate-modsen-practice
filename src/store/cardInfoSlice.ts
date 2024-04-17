import { fullPlaceInfoById } from "@constants/fullPlaceInfoById";
import { Point } from "@type/places";

import {
  createSlice,
  createAsyncThunk,
  Action,
  PayloadAction,
} from "@reduxjs/toolkit";
import axios, { AxiosError } from "axios";

interface Address {
  country: string;
  state: string;
  city: string;
  city_district?: string;
  road?: string;
  pedestrian?: string;
  house_number?: string;
}

interface PlaceInfo {
  xid: string;
  name: string;
  address: Address;
  preview?: {
    source?: string;
  };
  url?: string;
  wikipedia_extracts?: {
    title: string;
    text: string;
  };
  point: Point;
}

interface CardInfoSliceState {
  currentPlace: PlaceInfo | null;
  list: PlaceInfo[];
  loading: boolean;
  error: string | null;

  placeCardOpen: boolean;
}

const initialState: CardInfoSliceState = {
  currentPlace: null,
  list: [],
  loading: false,
  error: null,

  placeCardOpen: false,
};

export const fetchPlaceInfoById = createAsyncThunk<
  PlaceInfo,
  string,
  { rejectValue: string }
>(
  "cardInfo/fetchPlaceInfoById",
  async function (xid: string, { rejectWithValue }) {
    const data = await axios
      .get<PlaceInfo>(fullPlaceInfoById(xid))
      .then((response) => response.data)
      .catch((e: AxiosError) => {
        return rejectWithValue(e.message);
      });

    return data;
  }
);

const cardInfoSlice = createSlice({
  name: "cardInfo",
  initialState,
  reducers: {
    addCardInfo(state, action: PayloadAction<PlaceInfo>) {
      state.currentPlace = action.payload;
    },
    setPlaceCardOpen(state, action: PayloadAction<boolean>) {
      state.placeCardOpen = action.payload;
    },
    addFavouritePlace(state, action: PayloadAction<PlaceInfo>) {
      state.list.push(action.payload);
    },
    removeFavoritePlace(state, action: PayloadAction<string>) {
      state.list = state.list.filter((place) => place.xid !== action.payload);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchPlaceInfoById.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchPlaceInfoById.fulfilled, (state, action) => {
        state.currentPlace = action.payload;
        state.loading = false;
      })
      .addMatcher(isError, (state, action: PayloadAction<string>) => {
        state.error = action.payload;
        state.loading = false;
      });
  },
});

export default cardInfoSlice.reducer;
export const { addCardInfo, setPlaceCardOpen, addFavouritePlace, removeFavoritePlace  } = cardInfoSlice.actions;

function isError(action: Action) {
  return action.type.endsWith("rejected");
}
