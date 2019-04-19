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

function mergeRanges(arr) {
  if (!arr || !Array.isArray(arr) || arr.length < 1) return undefined;
  if (arr.length === 1) return arr;
  heapSort(arr);
  let lastEl = arr.pop();
  let outputArr = [lastEl];

  while (arr.length) {
    let curEl = arr.pop();
    if (
      curEl[1] >= outputArr[outputArr.length - 1][0] &&
      curEl[0] <= outputArr[outputArr.length - 1][0]
    ) {
      outputArr[outputArr.length - 1][0] = curEl[0];
      outputArr[outputArr.length - 1][1] = Math.max(
        curEl[1],
        outputArr[outputArr.length - 1][1]
      );
    } else {
      outputArr.push(curEl);
    }
  }
  heapSort(outputArr);
  return outputArr;
}

function swap(arr, a, b) {
  let temp = arr[a];
  arr[a] = arr[b];
  arr[b] = temp;
}

const heapSort = arr => {
  let N = arr.length - 1;

  for (let k = Math.floor(N / 2); k >= 0; k -= 1) {
    sink(arr, k, N);
  }

  // sink the first element
  while (N > 0) {
    swap(arr, 0, N);
    N -= 1;
    sink(arr, 0, N);
  }
};

const sink = (arr, k, N) => {
  while (2 * k <= N) {
    let childKey = 2 * k;
    if (childKey < N && arr[childKey][0] < arr[childKey + 1][0]) {
      childKey += 1;
    }
    if (arr[k][0] >= arr[childKey][0]) break;

    swap(arr, k, childKey);
    k = childKey;
  }
};

let times = [[0, 1], [3, 5], [4, 8], [10, 12], [6, 11], [9, 10]];
console.log(mergeRanges(times));

module.exports = mergeRanges;
