import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import getCatalogues from "../../api/getCatalogues";
import { IFetchCatalogue } from "../../interfaces/IFetchCatalogue";
import { ISelectData } from "../../interfaces/ISelectData";

const initialState: IFetchCatalogue = {
  isLoading: false,
  error: "",
  values: [],
};

const catalogueSlice = createSlice({
  name: "catalogue",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(
        fetchCatalogue.fulfilled,
        (state, action: PayloadAction<ISelectData[]>) => {
          state.isLoading = false;
          state.error = "";
          state.values = action.payload;
        }
      )
      .addCase(fetchCatalogue.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchCatalogue.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message || " ";
      });
  },
});

export const fetchCatalogue = createAsyncThunk(
  "catalogue/fetchCatalogue",
  async (_, thunkAPI) => {
    const response = await getCatalogues();

    return response.data;
  }
);

export default catalogueSlice.reducer;
