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
  const mtgs = array.slice();
  const sorted = mtgs.sort((a, b) => a[0] - b[0]);
  const calendar = [];

  calendar.push(mtgs[0]);

  sorted.forEach(meeting => {
    const last = calendar[calendar.length - 1];
    if (meeting[0] > last[1]) {
      calendar.push(meeting);
    } else if (meeting[1] >= last[1]) {
      last[1] = meeting[1];
    }
  });
  return calendar;
}

// function mergeRanges(array) {
//   const ranges = array.slice();
//   const calendar = [];

//   // get meetings organized chronologically
//   ranges.sort((a, b) => a[0] - b[0]);
//   calendar.push(ranges[0]);

//   for (let i = 1; i < ranges.length; i += 1) {
//     let last = calendar[calendar.length - 1];
//     let current = ranges[i];

//     // if the current meeting starts later than the previous
//     // then there's no overlap
//     if (current[0] > last[1]) {
//       calendar.push(current);
//       // if there's overlap and the current meeting runs later than the previous
//       // then i'll update the previous meetings end time to reflect the later end time
//     } else if (current[1] >= last[1]) {
//       last[1] = current[1];
//     }
//   }
//   return calendar;
// }

const times = [[0, 1], [3, 5], [4, 8], [10, 12], [9, 10]]; // [[0, 1], [3, 8], [9, 12]]
console.log(mergeRanges(times));

module.exports = mergeRanges;
