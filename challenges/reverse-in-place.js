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
    let size = array.length;
    for (let index = 2; index <= size; index += 1) {
        array.push(array[size - index])
    }
    for (let index = 0; index < size - 1  ; index += 1) {
        array.shift();
    }
    return array;
}

console.log(reverseInPlace([1,2,3,4,5,6,7,8,9,10]))

module.exports = reverseInPlace;
