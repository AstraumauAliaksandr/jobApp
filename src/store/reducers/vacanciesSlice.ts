import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import getVacancies from "../../api/getVacancies";
import { IFetchVacancies } from "../../interfaces/IFetchVacancies";
import { filterVacancies, calculateTotal } from "../../utils";
import { IVacancyParams } from "../../interfaces/IVacancyParams";
import getAccessToken from "../../api/getAccessToken";

const initialState: IFetchVacancies = {
  vacancies: [],
  total: 0,
  isLoading: false,
  error: "null",
};

export const fetchVacancies = createAsyncThunk(
  "vacancies/fetchVacancies",
  async (params: IVacancyParams) => {
    try {
      const response = await getVacancies(params);

      return response.data;
    } catch (e: any) {
      if (e.message === "Request failed with status code 401") {
        await getAccessToken();

        const response = await getVacancies(params);

        return response.data;
      }
    }
  }
);

const vacanciesSlice = createSlice({
  name: "vacancies",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(
        fetchVacancies.fulfilled,
        (state, action: PayloadAction<{ objects: []; total: number }>) => {
          state.isLoading = false;
          state.error = "";
          state.vacancies = filterVacancies(action.payload.objects);
          state.total = calculateTotal(action.payload.total);
        }
      )
      .addCase(fetchVacancies.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchVacancies.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message || " ";
        state.vacancies = [];
      });
  },
});

export default vacanciesSlice.reducer;
