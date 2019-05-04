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

function reverseInPlace(array) {
  for (let i = 0; i < array.length / 2; i++) {
    const left = array[i];
    const right = array[array.length - 1 - i];
    array[i] = right;
    array[array.length - 1 - i] = left;
  }
  return array;
}

// ALTERNATIVE

function reverseInPlace(array) {
  if (!array || !array.length) return [];

  var head = 0;
  var tail = array.length - 1;

  while (tail > head) {
    var temp = array[head];
    array[head++] = array[tail];
    array[tail--] = temp;
  }
  return array;
}

function reverseInPlace(array) {
  var temp;
  for (var i = 0, j = array.length - 1; i < j; i++, j--) {
    temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
  return array;
}

reverseInPlace([1, 2, 3, 4, 5]);

module.exports = reverseInPlace;
