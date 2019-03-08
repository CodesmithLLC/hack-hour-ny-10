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

function drawStairs(levels) {
    for (let i = 1; i<=levels; i++) {
      let str = "";
        let stars = i;
        let spaces = levels - i;
        
        for (let j=1; j<=spaces; j++) {
          str += " ";
        }
  
        for (let x=1; x<= stars; x++) {
          str += "*";
        }
      console.log(str)
      }
      
  }

  // function drawStairs(size) {
  //   for (let level = 1; level <= size; level++) {
  //     let output = "";
  //     let spaces = size - level;
  //     let stars = size - spaces;
  //     output += " ".repeat(spaces);
  //     output += "*".repeat(stars);
  //     console.log(output);
  //   }
  // }

module.exports = drawStairs;
