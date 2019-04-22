'use strict';
// If we list all the natural numbers below 10 that are multiples of 3 or 5,
// we get 3, 5, 6 and 9. The sum of these multiples is 23.

// write a function that will find the sum of all the multiples of 3 or 5
// below 1000 and return that sum.

function sumMultiples3Or5Below1000() {
  let x = 3;
  let y = 5;
  let z = 1000;
  let xMult = 0;
  let yMult = 0;
  for (let i = 0; i * x < z; i += 1) {
    xMult += i * x;
  }

  for (let i = 0; i * y < z; i += 1) {
    let prod = i * y;
    if (prod % x !== 0) {
      yMult += prod;
    }
  }
  return xMult + yMult;
}

// extension make it dynamic function that takes input x,y,z
// and returns the sum of multiples of x and y below z
function sumMultiplesXOrYBelowZ(x, y, z) {
  let xMult = 0;
  let yMult = 0;
  for (let i = 0; i * x < z; i += 1) {
    xMult += i * x;
  }

  for (let i = 0; i * y < z; i += 1) {
    let prod = i * y;
    if (prod % x !== 0) {
      yMult += prod;
    }
  }
  return xMult + yMult;
}

const objectToExport = {
  sumMultiples3Or5Below1000,
  sumMultiplesXOrYBelowZ
};

module.exports = objectToExport;
