/**
 * Given two integers, return the greatest common divisor.
 *
 * Example:
 * gcd(10, 8) -> 2
 * gcd(10, 9) -> 1
 *
 */

function gcd(a, b) {
  let remainder = null;
  while (a % b > 0) {
    remainder = a % b;
    a = b;
    b = remainder;
  }
  return b;
}

module.exports = gcd;
