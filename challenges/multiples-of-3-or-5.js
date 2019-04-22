'use strict';
// If we list all the natural numbers below 10 that are multiples of 3 or 5,
// we get 3, 5, 6 and 9. The sum of these multiples is 23.

// write a function that will find the sum of all the multiples of 3 or 5
// below 1000 and return that sum.

function sumMultiples3Or5Below1000() {
  let sum = 0;
  const limit = 1000;
  let three = 3;
  let five = 5;
  while(three < limit || five < limit) {
    if(three < limit) {
      sum += three;
      three += 3;
    }
    if(five < limit) {
      sum += five;
      five += 5;
    }
  } return sum;
}
//console.log(sumMultiples3Or5Below1000());


// extension make it dynamic function that takes input x,y,z
// and returns the sum of multiples of x and y below z
function sumMultiplesXOrYBelowZ(x, y, z) {
  let sum = 0;
  const limit = z;
  let first = x;
  let second = y;
  while(first < limit || second < limit) {
    if(first < limit) {
      sum += first;
      first += x;
    }
    if(second < limit) {
      sum += second;
      second += y;
    }
  } return sum;
}

const objectToExport = {
  sumMultiples3Or5Below1000,
  sumMultiplesXOrYBelowZ,
};

module.exports = objectToExport;
