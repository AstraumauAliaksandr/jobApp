import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import { fetchVacancyById } from "../../store/reducers/vacancySlice";
import { useParams } from "react-router-dom";
import Vacancy from "../../components/vacancy/Vacancy";
import DetailedInfo from "../../components/detailedInfo/DetailedInfo";
import { Loader, Stack } from "@mantine/core";
import useStyles from "./useStyles";
import { isChecked } from "../../utils";

const VacancyPage = () => {
  const { vacancy, isLoading } = useAppSelector(
    (state) => state.vacancyReducer
  );
  const { vacancyId } = useParams();
  const dispatch = useAppDispatch();
  const { classes } = useStyles();

  useEffect(() => {
    dispatch(fetchVacancyById(vacancyId ? +vacancyId : 0));
  }, [dispatch, vacancyId]);
  return (
    <Stack className={classes.root}>
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <Vacancy
            data-elem={`vacancy-${vacancyId}`}
            checked={isChecked(Number(vacancyId))}
            type="detailed"
            {...vacancy}
          />
          <DetailedInfo info={vacancy.vacancyRichText} />
        </>
      )}
    </Stack>
  );
};

export default VacancyPage;
