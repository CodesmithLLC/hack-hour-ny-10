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
 
  if (stock_prices_yesterday.length <= 1) return 0;

  let maxDiff = -1;
  let maxRight = stock_prices_yesterday[stock_prices_yesterday.length-1];

  for (let i = stock_prices_yesterday.length-2; i >= 0; i--) {
    if (stock_prices_yesterday[i] > maxRight) {
      maxRight = stock_prices_yesterday[i];
    } else {
      let diff = maxRight - stock_prices_yesterday[i];
      if (diff > maxDiff) {
        maxDiff = diff
      }
    }
  }   // end of for loop
  if (maxDiff >= 0) {
    return maxDiff;
  } else {
    return 0;
  }
  
}

const stp_yest = [188.91, 188.84];
console.log(bestProfit(stp_yest))


module.exports = bestProfit;
