/**
 *  I have an array stock_prices_yesterday where:
 *
 *    - The indices are the time in minutes past trade opening time, which was 9:30am local time
 *    - The values are the prices in dollars of Apple stock at the time
 *
 *  For example, the stock cost $500 at 10:30am, so stock_prices_yesterday[60] = 500;
 *
 *  Write an efficient algorithm for computing the best profit I could have made from 1 purchase
 *  and 1 sale of 1 Apple stock yesterday
 *
 *  Return 0 if no profit is possible OR if input is invalid.
 */

function bestProfit(stock_prices_yesterday) {
  let biggestProfit = -Infinity;
  let lowestPrice = Infinity;
  for (let price of stock_prices_yesterday) {
    lowestPrice = price < lowestPrice ? price : lowestPrice;
    biggestProfit =
      price - lowestPrice > biggestProfit ? price - lowestPrice : biggestProfit;
  }
  return biggestProfit;
}

console.log(
  bestProfit([100, 100, 110, 80, 100, 120, 130, 70, 100, 110, 130, 10, 100]),
);
console.log(bestProfit([100, 100, 90, 80, 70, 10, 0]));

module.exports = bestProfit;
