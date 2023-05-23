export const calculateTotal = (total: number) => {
  return total / 4 > 125 ? 125 : Math.ceil(total / 4);
};
