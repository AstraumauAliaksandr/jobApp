import { IVacancies } from "../interfaces/IVacancies";

export const filterVacancies = (vacanciesArray: []): IVacancies[] => {
  const filteredArray = vacanciesArray.map(
    ({
      id,
      profession,
      firm_name,
      town: { title },
      type_of_work: { title: wtitle },
      payment_to,
      payment_from,
      currency,
    }) => ({
      id,
      profession,
      firmName: firm_name,
      town: title,
      workType: wtitle,
      paymentTo: payment_to,
      paymentFrom: payment_from,
      currency,
    })
  );

  return filteredArray;
};
