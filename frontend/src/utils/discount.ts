export const calculateDiscount =
(
  regularPrice:number,
  discountPercent:number
) => {

  const saveAmount =
  (
    regularPrice *
    discountPercent
  ) / 100;

  const finalPrice =
  regularPrice - saveAmount;

  return {
    saveAmount,
    finalPrice
  };
};

export const calculateSaveText =
(
  regularPrice:number,
  finalPrice:number
) => {

  return regularPrice -
  finalPrice;

};
