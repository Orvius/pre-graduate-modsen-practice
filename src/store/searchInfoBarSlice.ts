import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface SearchInfoBarState {
  radius: string;
  isCircleVisible: boolean;
}

const initialState: SearchInfoBarState = {
  radius: "1",
  isCircleVisible: false,
};

const searchInfoBarSlice = createSlice({
  name: "searchInfoBar",
  initialState,
  reducers: {
    setRadius(state, action: PayloadAction<string>) {
      state.radius = action.payload;
    },
    setCircleVisibility(state, action: PayloadAction<boolean>) {
      state.isCircleVisible = action.payload;
    },
  },
});

export const { setRadius, setCircleVisibility } = searchInfoBarSlice.actions;
export default searchInfoBarSlice.reducer;
