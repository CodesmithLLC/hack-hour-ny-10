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

// first version:
// function drawStairs(n) {
// 	let spaces = n-1
// 	for (let i = 1; i <= n; i++){
// 		let str = '*'
// 		console.log(' '.repeat(spaces) + str.repeat(i))
// 		spaces--
// 	}
// }

function drawStairs(n) {
  let output = ''
	let spaces = n-1
	for (let i = 1; i <= n; i++){
		let str = '*'
		output += ' '.repeat(spaces) + str.repeat(i)
    if (i !== n) output += '\n'
		spaces--
	}
  console.log(output)
}

module.exports = drawStairs;
