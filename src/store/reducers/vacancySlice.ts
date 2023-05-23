import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import getVacanciesById from "../../api/getVacancyById";
import { IFetchVacancy } from "../../interfaces/IFetchVacancy";
import { IVacancy } from "../../interfaces/IVacancy";
import { filterVacancy } from "../../utils";
import getAccessToken from "../../api/getAccessToken";

const initialState: IFetchVacancy = {
  vacancy: {} as IVacancy,
  isLoading: false,
  error: "null",
};

export const fetchVacancyById = createAsyncThunk(
  "vacancy/fetchVacancyById",
  async (id: number, thunkAPI) => {
    try {
      const response = await getVacanciesById(id);

      return response.data;
    } catch (e: any) {
      if (e.message === "Request failed with status code 401") {
        await getAccessToken();

        const response = await getVacanciesById(id);

        return response.data;
      }
    }
  }
);

const vacancySlice = createSlice({
  name: "vacancy",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchVacancyById.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = "";
        state.vacancy = filterVacancy(action.payload);
      })
      .addCase(fetchVacancyById.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchVacancyById.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message || " ";
      });
  },
});

export default vacancySlice.reducer;
