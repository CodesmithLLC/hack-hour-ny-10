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
  if (array.length === 0) return false

  let mean = Math.floor((array.reduce((acc, curr) => acc + curr))/array.length);
  let mode = array[0];
  let collection = array.reduce((acc, currVal) => {
    acc[currVal] ? acc[currVal] += 1 : acc[currVal] = 1
    return acc;
  }, {})

  for (let key in collection) {
    if (collection[key] > collection[mode] || (collection[key] === collection[mode] && Number(key) > mode)) mode = key
  }

  return Number(mode) === mean
}
// console.log([], modemean([]))
// console.log([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], modemean([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]))
// console.log([1], modemean([1]))
module.exports = modemean;
