/**
 * Given two integers, return the greatest common divisor.
 *
 * Example:
 * gcd(10, 8) -> 2
 * gcd(10, 9) -> 1
 *
 */

function gcd(a, b) {
  // let tempA = a
  // a = Math.max(tempA,b)
  // b = Math.min(tempA,b)
  if (a % b === 0) return b;
  return gcd(b, a % b);
}

module.exports = gcd;
