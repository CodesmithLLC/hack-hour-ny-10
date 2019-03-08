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

function reverseInPlace(array, n = -1) {  
    if (n === array.length) {
      return array;
    }
    n++;
    let current = array.pop()
    array.splice(n, 0, current)
    return reverseInPlace(array, n)
  }

module.exports = reverseInPlace;


a, b, c, d, e, f

f, e, d, c, b, a