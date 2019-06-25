/* Write a function that calculates x^y, where x is given as the base and y is given as the power.
 * Use recursion!
 */

// function pow(base, power) {
//   if (power === 0) return 1;
//   return base * pow(base, power - 1);
// }

function pow(base, power) {
  // negative exponent of base =  positive exponent of the reciprocal of the base
  if (power < 0) {
    power *= -1;
    base = parseFloat(1 / base);
  }
  // base case: any number with a power of 0 will return 1
  if (power === 0) return 1;
  // account for positive exponents by decreasing power
  if (power > 0) return base * pow(base, power - 1);
}

console.log(pow(3, 3));

module.exports = pow;
