export const formatPrice = (amount) => {
  return new Intl.NumberFormat("en-US").format(amount);
};
