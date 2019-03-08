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

function reverseInPlace(array) {
  for (let i = 0, j = array.length - 1; i < array.length / 2; i += 1, j -= 1) {
    const placeholder = array[j];
    array[j] = array[i];
    array[i] = placeholder;
  }
  console.log(array);
}

reverseInPlace([1, 2, 3, 4, 5]);

module.exports = reverseInPlace;
