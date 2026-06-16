export const formatCurrency = (
  amount:number
) => {

  return new Intl.NumberFormat(
    "bn-BD",
    {
      style:"currency",
      currency:"BDT",
      minimumFractionDigits:0
    }
  ).format(amount);

};
