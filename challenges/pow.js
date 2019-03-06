/* Write a function that calculates x^y, where x is given as the base and y is given as the power.
 * Use recursion!
 */

function pow(base, power, result = 1) {
  if (power === 0) return result;
  while (power > 0) {
    return pow(base, --power, result *= base);
}

module.exports = pow;
