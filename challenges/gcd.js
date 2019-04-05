/**
 * Given two integers, return the greatest common divisor.
 *
 * Example:
 * gcd(10, 8) -> 2
 * gcd(10, 9) -> 1
 *
 */

// function gcd(a, b) {
//   if (a < b) {
//     [a, b] = [b, a];
//   }
//   for (let i = b; i >= 1; i--) {
//     if (a % i === 0 && b % i === 0) return i;
//   }
// }
// euclidian
function gcd(a, b) {
  if (b === 0) return a;
  return gcd(b, a % b);
}

// console.log(gcd(10, 3));
// console.log(gcd(10, 40));

module.exports = gcd;
