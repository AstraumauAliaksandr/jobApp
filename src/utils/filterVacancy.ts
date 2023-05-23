export const filterVacancy = (vacancyObj: any) => {
  const picked = (({
    id,
    profession,
    firm_name,
    town: { title },
    type_of_work: { title: wtitle },
    payment_to,
    payment_from,
    currency,
    vacancyRichText,
  }) => ({
    id,
    profession,
    firmName: firm_name,
    town: title,
    workType: wtitle,
    paymentTo: payment_to,
    paymentFrom: payment_from,
    currency,
    vacancyRichText,
  }))(vacancyObj);

  return picked;
};
