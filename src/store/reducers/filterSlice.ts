import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  catalogues: "",
  payment_from: "",
  payment_to: "",
  keyword: "",
  page: 1,
};

const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    setFilters(state, action) {
      state.catalogues = action.payload.catalogues;
      state.payment_from = action.payload.salaryFrom;
      state.payment_to = action.payload.salaryTill;
    },
    resetFilters(state) {
      state.catalogues = "";
      state.payment_from = "";
      state.payment_to = "";
    },
    setQuery(state, action) {
      state.keyword = action.payload;
    },
    setPagination(state, action) {
      state.page = action.payload;
    },
  },
});
export const { setFilters, resetFilters, setQuery, setPagination } =
  filterSlice.actions;

export default filterSlice.reducer;
