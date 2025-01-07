var maxProfit = function (prices) {
  let profit = 0;
  let currentPrice = prices[0];
  for (let i = 1; i < prices.length; i++) {
    if (prices[i] - currentPrice > profit) {
      profit = prices[i] - currentPrice;
    }

    if (currentPrice > prices[i]) {
      currentPrice = prices[i];
    }
  }
  return profit;
};

// console.log(maxProfit([7, 1, 5, 3, 6, 4]));
// console.log(maxProfit([7, 6, 4, 3, 1]));
// console.log(maxProfit([1, 2]));

var reverse = function (x) {
  let MIN = -(2 ** 31);
  let MAX = 2 ** 31 - 1;
  let duplicatNo = Math.abs(x);
  let res = 0;

  while (duplicatNo > 0) {
    let rem = duplicatNo % 10;
    res = res * 10 + rem;
    duplicatNo = Math.floor(duplicatNo / 10);
  }

  if (!(MIN <= res && res <= MAX)) {
    return 0;
  }

  return x < 0 ? -1 * res : res;
};

console.log(reverse(1534236469));
