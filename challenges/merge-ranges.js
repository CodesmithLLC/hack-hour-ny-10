/**
 * Write a function mergeRanges that takes an array of meeting time ranges and returns an array of condensed ranges.
 *
 * Example:
 * var times = [[0, 1], [3, 5], [4, 8], [10, 12], [9, 10]]
 *
 * mergeRanges(times); -> [[0, 1], [3, 8], [9, 12]]
 *
 * Do not assume the ranges are in order
 */


function mergeRanges(array) {
  array.sort((a,b) => a[0] > b[0])
  // console.log(array)
  let output = []
  let cand = []
  let max = -Infinity
  for (let arr of array){
    // console.log(arr, max, cand)
    if (arr[0] > max){
      cand[1] = max
      output.push(cand)
      cand = arr
      max = arr[1]
    }else{
      max = Math.max(max, arr[1])
      cand[1] = max
    }
  }
  output.push(cand)
  return output.slice(1)
}

module.exports = mergeRanges;
