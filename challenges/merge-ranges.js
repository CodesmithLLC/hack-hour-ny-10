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

  const result = array.slice().sort(function(a, b) {
    return a[0] > b[0];
  })
  let i = 0;
  while (i < result.length - 1) {
    let current = result[i];
    let next = result[i + 1];

    //check if there is an overlapping
    if (current[1] >= next[0]) {
      current[1] = Math.max(current[1], next[1]);
      //remove next
      result.splice(i + 1, 1);
    } else {
      //move to next
      i += 1;
    }
  }
  return result;
}


let times = [[0, 1], [3, 5], [4, 8], [10, 12], [9, 10]]

console.log(mergeRanges(times)); //-> [[0, 1], [3, 8], [9, 12]]

module.exports = mergeRanges;




  // const outerArr = [];
  // let innerArr = [];
  // const newArr = array.reduce((acc, val) => acc.concat(val),[])
  // for (let i = 0; i < newArr.length; i++) {
  //   let el = newArr[i];
  //   let nextEl = newArr[i + 1]
  //   console.log(el, nextEl)
  //   if (el < nextEl) {

  //   }
  //   let min;
  //   let max;
  //   if(!innerArr[el]) {
  //     innerArr.push(el)
  //     min = el
  //   } else {
  //     max = el
  //   } 
  // }
  // copy and sort the array