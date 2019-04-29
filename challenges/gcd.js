/**
 * Given two integers, return the greatest common divisor.
 *
 * Example:
 * gcd(10, 8) -> 2
 * gcd(10, 9) -> 1
 *
 */

function gcd(a, b) {
  // edge cases where b is 0 - cannot further divide with 0
  if (a === 0 && b === 0) return undefined;
  let remainder = 0;
  // what this loop is doing is continously resetting based on the remainder of what was calcualted on the previous iteration to further simplify calculation
  while (a % b > 0) {
    remainder = a % b;
    a = b;
    b = remainder;
  }
  return b;
}
/**
 * recursive approach
 */

function gcd(a, b) {
  // base case defined based on number theory where gcd
  // of (k,0) always returns k
  if (b === 0) return a;
  return gcd(b, a % b);
}

module.exports = gcd;
