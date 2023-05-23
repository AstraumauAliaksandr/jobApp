import { IFetch } from "./IFetch";
import { IVacancies } from "./IVacancies";

export interface IFetchVacancies extends IFetch {
  vacancies: IVacancies[];
  total: number;
}
