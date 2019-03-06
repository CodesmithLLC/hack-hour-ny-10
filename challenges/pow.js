/* Write a function that calculates x^y, where x is given as the base and y is given as the power.
 * Use recursion!
 */

function pow(base, power) {
  //base case is base raised to power of 0 = 1
  //recursive case lowering the power
  let result = 1;
  while (power !== 0) {
    result *= base;
    pow(base, power -= 1)
  }
  return result;
}

console.log(pow(3, 4));

module.exports = pow;
