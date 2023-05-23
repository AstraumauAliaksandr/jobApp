import { useEffect } from "react";
import { Flex, Stack, Pagination, Loader } from "@mantine/core";
import Filter from "../../components/filter/Filter";
import SearchField from "../../components/search/Search";
import VacancyList from "../../components/vacancyList/vacancyList";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import { fetchVacancies } from "../../store/reducers/vacanciesSlice";
import { setPagination } from "../../store/reducers";
import useStyles from "./useStyles";

const SearchPage = () => {
  const dispatch = useAppDispatch();
  const filter = useAppSelector((state) => state.filterReducer);
  const { isLoading, vacancies, total } = useAppSelector(
    (state) => state.vacanciesReducer
  );
  const { classes } = useStyles();

  useEffect(() => {
    dispatch(fetchVacancies({ ...filter, page: filter.page - 1 }));
  }, [dispatch, filter]);

  return (
    <Flex className={classes.root} gap={28} justify={"space-between"}>
      <Filter />
      <Stack className={classes.containerStack}>
        <SearchField />
        <Stack w={"100%"} h={"100%"} align="center" justify="space-between">
          {isLoading && <Loader />}
          {!isLoading && <VacancyList data={vacancies} />}
          <Pagination
            value={filter.page}
            onChange={(value) => dispatch(setPagination(value))}
            total={total}
          />
        </Stack>
      </Stack>
    </Flex>
  );
};

export default SearchPage;
