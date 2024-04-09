import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface SearchInfoBarState {
  radius: string;
}

const initialState: SearchInfoBarState = {
  radius: "1",
};

const searchInfoBarSlice = createSlice({
  name: "searchInfoBar",
  initialState,
  reducers: {
    setRadius(state, action: PayloadAction<string>) {
      state.radius = action.payload;
    },
  },
});

export const { setRadius } = searchInfoBarSlice.actions;
export default searchInfoBarSlice.reducer;