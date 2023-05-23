import { axiosPublic } from "./axiosPublic";

const getVacanciesById = async (id: number) => {
  return await axiosPublic.get(`/vacancies/${id}/`, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("access_token")}`,
    },
  });
};

export default getVacanciesById;
