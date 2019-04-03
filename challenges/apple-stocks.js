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

function bestProfit(arr) {
    let maxDiff = -1;
    let min = arr[0];
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] > min && maxDiff < arr[i] - min) {
        maxDiff = arr[i] - min;
      }
  
      if (arr[i] < min) {
        min = arr[i];
      }
    }
    if (maxDiff <= 0 || arr === null) {
        return 0;
    } else {
        return maxDiff;
    }
}

module.exports = bestProfit;
