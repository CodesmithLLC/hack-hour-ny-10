/*
 * Given an array of numbers, determine if the mode and mean of the array are equivalent
 *
 * Caveats:
 * 	- Math.floor the mean
 * 	- If there are multiple modes, use the max of the modes
 *
 * Return true or false
 *
 */

function modemean(array) {
  if (!array || !array.length) return false
  let maxCount = 0;
  let maxNums = [];
  let sum = 0;
  let freqMap = array.reduce((acc, curr) => {
    sum += curr;
    if (!acc[curr]) acc[curr] = 1;
    else if (acc[curr]) acc[curr] += 1;
    if (acc[curr] > maxCount) {
      maxCount = acc[curr];
      maxNums = [curr];
    } else if (acc[curr] === maxCount) {
      maxNums.push(curr)
    }
    return acc
  }, {})
  let mean = Math.floor(sum / array.length)
  return (mean === Math.max(maxNums)) ? true : false
}

let test1 = [1, 2, 3, 4]
let test2 = [2, 2, 3, 4]
let test3 = [-4, -4]
let test4 = [-4, -4, 2]
console.log(modemean([1, 2, 3, 1, 3]))
console.log(modemean(test1)) // sum = 10, n = 4 => mean = 2 && mode = 4 so expect false
console.log(modemean(test2)) // sum = 10, n = 4 => mean = 2 && mode = 2 so expect true
console.log(modemean([])) // expect false
console.log(modemean(test3)) // expect true
console.log(modemean(test4)) // expect false

module.exports = modemean;
