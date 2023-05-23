import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import App from "../App";
import FavouritesPage from "../pages/favouritesPage/FavouritesPage";
import SearchPage from "../pages/searchPage/SearchPage";
import VacancyPage from "../pages/vacancyPage/VacancyPage";
import Oops from "../components/oops/Oops";

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path={"/jobApp/"} element={<App />}>
      <Route index element={<SearchPage />} />
      <Route path={"/jobApp/favourites"} element={<FavouritesPage />} />
      <Route path={`/jobApp/vacancy/:vacancyId`} element={<VacancyPage />} />
      <Route path="*" element={<Oops />} />
    </Route>
  )
);
