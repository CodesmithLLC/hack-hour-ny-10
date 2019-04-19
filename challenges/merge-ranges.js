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

const times = [[0, 1], [5, 3], [8, 4], [10, 12], [9, 10]];
function mergeRanges(array) {
  array.sort((a, b) => a[0] - b[0] || a[1] - b[1]);
  const stack = [];
  let endTime;
  array.forEach((el) => {
    if (!endTime || el[0] > endTime[1]) {
      stack.push((endTime = el));
    } else if (el[1] > endTime[1]) {
      endTime[1] = el[1];
    }
  });
  return stack;
}
console.log(mergeRanges(times));

module.exports = mergeRanges;
