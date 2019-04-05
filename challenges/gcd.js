/**
 * Given two integers, return the greatest common divisor.
 *
 * Example:
 * gcd(10, 8) -> 2
 * gcd(10, 9) -> 1
 *
 */

function gcd(a, b) {
  let decrement = 1;
  let startPoint = 0;
  if (a % b === 0) return b;
  if (b % a === 0) return a;
  if (a % 2 === 0 && b % 2 === 0) decrement = 2;
  if (a > b) startPoint = Math.floor(b / 2);
  else startPoint = Math.floor(a / 2);
  console.log(startPoint);
  for (let divisor = startPoint; divisor >= 1; divisor -= decrement) {
    if (a % divisor === 0 && b % divisor === 0) return divisor;
  }
}

console.log(gcd(8, 44));
console.log(gcd(99, 2));

module.exports = gcd;
