export const splitToSubArrays = (array = [], perArray = 8) => {
  const result = [];
  while (array.length) {
    const temp = array.splice(0, perArray);
    result.push(temp);
  }
  return result;
};

export const formatPrice = (price) => {
  let newPrice = "";
  for (let i = price?.toString().length; i > 0; i--) {
    if ((i + 2) % 3 == 0 && i != price?.toString().length) {
      newPrice = price?.toString()[i - 1] + "," + newPrice;
    } else {
      newPrice = price?.toString()[i - 1] + newPrice;
    }
  }
  return "đ " + newPrice;
};
