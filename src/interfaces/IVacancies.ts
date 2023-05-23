export interface IVacancies {
  id: number;
  profession: string;
  firmName: string;
  town: string;
  workType: string;
  paymentTo?: number;
  paymentFrom?: number;
  currency: string;
}
