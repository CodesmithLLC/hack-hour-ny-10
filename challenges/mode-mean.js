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
  if (array.length === 0) return true
  let sum = 0
  let keys = {}
  for (let el of array){
    if (el) sum += el;
    keys[el] ? keys[el]++ : keys[el] = 1;
  }
  const mean = sum/array.length;
  let mostCommonVal = 0
  let mostCommonValNum = 0
  for (let key in keys){
    if (keys[key] >= mostCommonValNum){
      mostCommonVal = key;
      mostCommonValNum = keys[key];
    }
  }
  return Math.floor(mean) === parseFloat(mostCommonVal)
}

module.exports = modemean;
