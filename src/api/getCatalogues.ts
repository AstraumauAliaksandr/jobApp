import { axiosPublic } from "./axiosPublic";

const getCatalogues = async () => {
  return await axiosPublic.get("/catalogues/");
};

export default getCatalogues;
