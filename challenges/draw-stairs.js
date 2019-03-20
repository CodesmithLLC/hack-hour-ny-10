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
  let myStairs = '';
  for (let i = 1; i <= n; i += 1) {
    myStairs += ' '.repeat(n - i) + '*'.repeat(i) + '\n';
  }
  return myStairs;
}

/*

// Solution with nested loops
function drawStairs(size) {
  for (let level = 1; level <= size; level++) {
    let output = "";
    let spaces = size - level;
    let stars = size - spaces;
    for (let i = 0; i < spaces; i++) {
      output += " ";
    }
    for (let i = 0; i < stars; i++) {
      output += "*";
    }
    console.log(output);
  }
}

// Same solution, refactored to use string repeat method
function drawStairs(size) {
  for (let level = 1; level <= size; level++) {
    let output = "";
    let spaces = size - level;
    let stars = size - spaces;
    output += " ".repeat(spaces);
    output += "*".repeat(stars);
    console.log(output);
  }
}

*/

console.log(drawStairs(6));

module.exports = drawStairs;
