import { axiosPublic } from "./axiosPublic";
import { IVacancyParams } from "../interfaces";
import QueryString from "qs";

const getVacancies = async (params: IVacancyParams) => {
  return await axiosPublic.get("/vacancies/", {
    params: {
      ...params,
      published: 1,
      count: 4,
    },
    paramsSerializer: params => {
      return QueryString.stringify(params, { arrayFormat: 'indices', encodeValuesOnly: true})
    },
    headers: {
      Authorization: `Bearer ${localStorage.getItem("access_token")}`,
    },
  });
};

export default getVacancies;