'use strict';
/**
 * Write a function to reverse an array in place
 *
 * "In place" means "without creating a new object in memory"
 *
 * In some languages, strings are mutable (like in Ruby). In other languages,
 * such as Python and Javascript, strings are immutable, meaning they cannot
 * be changed after they're created.
 *
 * Since strings are immutable in javascript, we will be reversing an array of characters instead.
 *
 * DO NOT USE THE BUILT IN REVERSE METHOD
 */

// function reverseInPlace(array) {
//   const size = array.length;
//   for (let index = 2; index <= size; index += 1) {
//     array.push(array[size - index]);
//   }
//   for (let index = 0; index < size - 1; index += 1) {
//     array.shift();
//   }
//   return array;
// }

function reverseInPlace(array) {
  let temp = 0;
  let start = 0;
  let end = array.length - 1;
  while (start < end) {
    temp = array[start];
    array[start] = array[end];
    array[end] = temp;
    start++;
    end--;
  }
  return array;
}

function reverseInPlaceEfficient2(array) {
  array.push(0, 0, array.length - 1);
  while (array[array.length - 2] < array[array.length - 1]) {
    array[array.length - 3] = array[array[array.length - 2]];
    array[array[array.length - 2]] = array[array[array.length - 1]];
    array[array[array.length - 1]] = array[array.length - 3];
    array[array.length - 2]++;
    array[array.length - 1]--;
  }
  array.pop();
  array.pop();
  array.pop();
  return array;
}

console.log(reverseInPlace([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));
console.log(reverseInPlaceEfficient([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));
console.log(reverseInPlaceEfficient2([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));

module.exports = reverseInPlace;
