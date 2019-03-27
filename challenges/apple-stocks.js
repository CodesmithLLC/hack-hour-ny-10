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
  for (let i = 1; i < sPrices.length ; i += 1)
    if (sPrices[i] > sPrices[i-1]) { // if we are increasing in price
      if (sPrices[i-1] < buy) { // check to see if we are increasing from a new low
        buy = sPrices[i-1] 
        sell = sPrices[i] // reset sell to be after buy
        profit = Math.max(profit, sell - buy) // see if we could have made more profit
      }
      if (sPrices[i] > sell) { // if we are increasing && price is higher than sell
        sell = sPrices[i] // increase sell
        profit = Math.max(profit, sell - buy) // check profit; return max of existing option and new option
      }
    }
    return Math.max(profit, 0)  // return max of 0 and potential profit
}

module.exports = bestProfit;
