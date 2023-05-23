import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  page: 1,
};

const favouritesSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    setFavouritePagination(state, action) {
      state.page = action.payload;
    },
  },
});
export const { setFavouritePagination } = favouritesSlice.actions;

export default favouritesSlice.reducer;
