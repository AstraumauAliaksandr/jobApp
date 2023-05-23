import { combineReducers, configureStore } from "@reduxjs/toolkit";
import vacanciesReducer from "./reducers/vacanciesSlice";
import filterReducer from "./reducers/filterSlice";
import favouritesReducer from "./reducers/favouritesSlice";
import vacancyReducer from "./reducers/vacancySlice";
import catalogueReducer from "./reducers/catalogueSlice";

const rootReducer = combineReducers({
  vacanciesReducer,
  filterReducer,
  favouritesReducer,
  vacancyReducer,
  catalogueReducer,
});

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
  });
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore["dispatch"];
