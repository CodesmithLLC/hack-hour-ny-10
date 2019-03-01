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
    let counter = 1
    while (counter <= n){
        console.log(" ".repeat(n-counter) + "*".repeat(counter))
        counter += 1;
    }
}

drawStairs(20)

module.exports = drawStairs;
