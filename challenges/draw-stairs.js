/* Write a function that console logs a staircase of any given height where 1 <= N <= 100.
 The staircase must climb up from left to right. The last line should only consist of asterisks,
 without any leading/trailing spaces.
 
 For example:     
 drawStairs(6) ->          
     *
    **
   ***
  ****
 *****
******

*/

function drawStairs(n) {
  let stairs = "";
  let stars = 1;
  while (stars <= n) {
    stairs += `${" ".repeat(n - stars)}${"*".repeat(stars)}\n`;
    stars++;
  }
  console.log(stairs.slice(0, -1));
}

// drawStairs(6);
module.exports = drawStairs;
