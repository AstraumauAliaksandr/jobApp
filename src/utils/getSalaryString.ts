export const getSalaryString = (
  paymentFrom?: number,
  paymentTo?: number,
  currency: string = ""
) => {
  if (paymentFrom && paymentTo) {
    return `з/п от ${paymentFrom} до ${paymentTo} ${currency}`;
  } else if (paymentFrom) {
    return `з/п от ${paymentFrom} ${currency}`;
  }
  return "";
};
