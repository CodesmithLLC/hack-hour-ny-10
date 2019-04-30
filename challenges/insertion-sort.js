// Write a function that sorts an array using the insertion sort algorithm.

// https://en.wikipedia.org/wiki/Insertion_sort



function insertionSort(arr) {
  for (let i = 1; i < arr.length; i += 1) {
    let cur = i;
    while(arr[cur] < arr[cur - 1] && cur >= 1) {
      swap(arr, cur, cur-1)
      cur -= 1
    }
  }
  return arr;
}

const swap = (arr, a, b) => {
  let tmp = arr[a];
  arr[a] = arr[b];
  arr[b] = tmp;
}

let test = [5,4,3,2,1,6,2,9,5, 1, 9, 3, 235, -1, 7];
console.log(insertionSort(test))

module.exports = insertionSort;