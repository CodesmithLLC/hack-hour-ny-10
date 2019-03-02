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
 
// iterative approach
// function drawStairs(n) {
//     const stairs = [];
//     for (let i = 1; i <= n; i++) stairs.push(' ');
//     for (let i = 1; i <= n; i++){
//         stairs.shift();
//         stairs.push('*');
//         console.log(stairs.join(''));
//     }

// recursive approach
function drawStairs(n, stairs = []) {   
    if (!stairs.length) 
        for (let i = 1; i <= n; i++) 
            stairs.push(' ');
    if (n === 0) return;
    stairs.shift()
    stairs.push('*');
    console.log(stairs.join(''));
    drawStairs(n - 1, stairs);
}

drawStairs(6);
// drawStairs(12);

module.exports = drawStairs;
