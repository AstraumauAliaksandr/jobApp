import { IFetch } from "./IFetch";
import { IVacancy } from "./IVacancy";

export interface IFetchVacancy extends IFetch {
  vacancy: IVacancy;
}
