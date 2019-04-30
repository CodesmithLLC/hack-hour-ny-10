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

function bestProfit(sPrices) {
  if (!sPrices) return 0;
  let profit = 0;
  let buy = sPrices[0];
  let sell = sPrices[0];
  for (let i = 1; i < sPrices.length; i += 1) {
    if (sPrices[i] > sPrices[i - 1]) {
      // if we are increasing in price
      if (sPrices[i - 1] < buy) {
        // check to see if we are increasing from a new low
        buy = sPrices[i - 1];
        sell = sPrices[i]; // reset sell to be after buy
        profit = Math.max(profit, sell - buy); // see if we could have made more profit
      }
      if (sPrices[i] > sell) {
        // if we are increasing && price is higher than sell
        sell = sPrices[i]; // increase sell
        profit = Math.max(profit, sell - buy); // check profit; return max of existing option and new option
      }
    }
  }
  return Math.max(profit, 0); // return max of 0 and potential profit
}

// Brute-Force
function bestProfit(stock_prices_yesterday) {
  var best = 0;
  for (var i = 0; i < stock_prices_yesterday.length; i++) {
    for (var j = i; j < stock_prices_yesterday.length; j++) {
      best = Math.max(best, stock_prices_yesterday[j] - stock_prices_yesterday[i]);
    }
  }
  return best;
}

// Better Solution
function bestProfit(stock_prices_yesterday) {
  var maxProfit = 0;
  var possibleProfit = 0;
  var minI = 0,
    maxI = 0;
  if (stock_prices_yesterday) {
    for (var i = 0; i < stock_prices_yesterday.length; i++) {
      if (stock_prices_yesterday[i] < stock_prices_yesterday[minI]) {
        minI = i;
      }

      possibleProfit = stock_prices_yesterday[i] - stock_prices_yesterday[minI];

      if (possibleProfit > maxProfit) {
        maxProfit = possibleProfit;
        maxI = i;
      }
    }
  }
  return maxProfit;
}

console.log(bestProfit([1, 3, 5, 8, 9, 11, 4, 2]));
console.log(bestProfit([23]));
console.log(bestProfit([5, 4]));
console.log(bestProfit([9, 5, 4, 12, 6, 19, 4]));

module.exports = bestProfit;
