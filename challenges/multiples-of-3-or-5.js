'use strict';
// If we list all the natural numbers below 10 that are multiples of 3 or 5,
// we get 3, 5, 6 and 9. The sum of these multiples is 23.

// write a function that will find the sum of all the multiples of 3 or 5
// below 1000 and return that sum.

function sumMultiples3Or5Below1000(value) {
  let sum = 0;
  let num = value - 1;
  while (num > 0) {
    if (num % 3 === 0 || num % 5 === 0) sum += num;
    num -= 1;
  }

  return sum;
}

console.log(sumMultiples3Or5Below1000(1000))

// extension make it dynamic function that takes input x,y,z
// and returns the sum of multiples of x and y below z
function sumMultiplesXOrYBelowZ(x, y, z) {
  let sum = 0;
  let highVal = z - 1;
  while (highVal > 0) {
    if (highVal % x === 0 || highVal % y === 0) sum += highVal;
    highVal -= 1;
  }
  return sum;
}

console.log(sumMultiplesXOrYBelowZ(10, 15, 45));


const objectToExport = {
  sumMultiples3Or5Below1000,
  sumMultiplesXOrYBelowZ,
};

module.exports = objectToExport;
