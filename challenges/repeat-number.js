/**
 * I have an array where every number in the range 1...n appears once except for 
 * one number which appears twice.
 *
 * Write a function for finding the number that appears twice.
 *
 * BONUS:
 * Do this in O(n) time
 * Do this in O(1) space
 *
 */

function repeatNumbers(array) {
    const sum = array.reduce((acc, i) => {
        return acc += i;
    }, 0);
    const expected = ((array.length-1)*(array.length))/2;
    return Math.abs(expected-sum);
}
//console.log(repeatNumbers([1,2,3,4]))

module.exports = repeatNumbers;
