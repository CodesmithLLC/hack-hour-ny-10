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
  let min = stock_prices_yesterday[0];
  let maxProfit = 0;

  for (let i = 1; i < stock_prices_yesterday.length; i += 1) {
    const currentVal = stock_prices_yesterday[i];
    const profit = currentVal - min;

    if (currentVal < min) {
      min = currentVal;
    } else if (profit > maxProfit) {
      maxProfit = profit;
    } 
  }

  return maxProfit;
}

// console.log(bestProfit([1, 3, 5, 8, 9, 11, 4, 2]));
// console.log(bestProfit([23]));
// console.log(bestProfit([5, 4]));
// console.log(bestProfit([9, 5, 4, 12, 6, 19, 4]));

module.exports = bestProfit;
