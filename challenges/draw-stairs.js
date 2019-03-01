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
    let spaces = n-1;
    let stairs = 1;

    let whiteSpace = " ";
    let stars = "*";


    while (stairs <= n) {
        let left = whiteSpace.repeat(spaces);
        let right = stars.repeat(stairs);

        console.log(left + right);

        spaces--;
        stairs++;
    }
}

// drawStairs(6);


module.exports = drawStairs;
