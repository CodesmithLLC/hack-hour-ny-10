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
    for(let i = n; i>0; i--){
        let step = ""
        let counter = 0;
        while(counter<i-1){
            step += " "
            counter ++
        }
        while(counter<n){
            step += "*"
            counter ++
        }
        console.log(step)
    }
}

drawStairs(6)
module.exports = drawStairs;
