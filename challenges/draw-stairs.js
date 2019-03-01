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
    if (n <= 0 || n > 100) return;
    let count = 0;
    let m = n;
    while (count < n + 1) {
        console.log(stair(m, count))
        count += 1;
        m -= 1
    }

}

function stair(spaces, stairs) {
    let str = ''
    for (let i = 0; i < spaces; i += 1) {
        str += ' '
    }
    for (let x = 0; x < stairs; x += 1) {
        str += "*"
    }
    return str;
}

module.exports = drawStairs;
