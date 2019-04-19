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

// let times = [[0, 1], [3, 5], [4, 8], [10, 12], [9, 10]]; // [[0,5] [7,8] [10,11]]
// console.log(mergeRanges(times));

function mergeRanges(array) {
  let obj = {};
  for (let el of array){
    let input = false;
    for (let entry of Object.entries(obj)){
      if (el[0] <= entry[1]){
        if (el[0] > entry[0]) {
          obj[entry[0]] = Math.max(el[1], entry[1]);
        }
        else if (entry[0] <= el[1] ){
          delete obj[entry[0]];
          obj[el[0]] = Math.max(el[1], entry[1]);
        }
        input = true;
      }
    }
    if (!input) {
      obj[el[0]] = el[1];
    }
  }
  return Object.entries(obj).map((time) => {return time.map(Number)});
}

module.exports = mergeRanges;
