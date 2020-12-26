export const handleSumTotal = (cart) => {
  const reducer = (acc, cur) => acc + cur.price;
  const sum = cart.reduce(reducer, 0);
  return sum;
};
