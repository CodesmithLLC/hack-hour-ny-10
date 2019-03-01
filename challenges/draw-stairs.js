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

    let output = "";

    while (stairs <= n) {
        let left = whiteSpace.repeat(spaces);
        let right = stars.repeat(stairs);

        output = left + right;
        console.log(output);

        spaces--;
        stairs++;
    }
    
    return output;
}

// drawStairs(5);


module.exports = drawStairs;
