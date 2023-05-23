import { IFetch } from "./IFetch";
import { ISelectData } from "./ISelectData";

export interface IFetchCatalogue extends IFetch {
  values: ISelectData[];
}
