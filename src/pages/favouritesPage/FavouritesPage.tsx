import { useEffect } from "react";
import { Stack, Pagination, Loader } from "@mantine/core";
import VacancyList from "../../components/vacancyList/vacancyList";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import useStyles from "./useStyles";
import { setFavouritePagination, fetchVacancies } from "../../store";

const FavouritesPage = () => {
  const { page } = useAppSelector((state) => state.favouritesReducer);
  const { vacancies, isLoading, total } = useAppSelector(
    (state) => state.vacanciesReducer
  );
  const favouritesIds: number[] = JSON.parse(
    localStorage.getItem("ids") || "[]"
  );
  const dispatch = useAppDispatch();
  const { classes } = useStyles();

  useEffect(() => {
    favouritesIds.length === 0
      ? dispatch(fetchVacancies({ page: 130 }))
      : dispatch(fetchVacancies({ ids: favouritesIds, page: page - 1 }));
  }, [dispatch, page]);
  return (
    <Stack className={classes.root}>
      {isLoading ? <Loader /> : <VacancyList data={vacancies} />}
      <Pagination
        value={page}
        onChange={(value) => dispatch(setFavouritePagination(value))}
        total={total}
      />
    </Stack>
  );
};

export default FavouritesPage;
