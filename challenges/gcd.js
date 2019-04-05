/**
 * Given two integers, return the greatest common divisor.
 *
 * Example:
 * gcd(10, 8) -> 2
 * gcd(10, 9) -> 1
 *
 */

function gcd(a, b) {
  a = Math.abs(a);
  b = Math.abs(b);

  if (b > a) {
    let temp = a;
    a = b;
    b = temp;
  }
  while (true) {
    if (b === 0) return a;
    a = a % b;
    if (a === 0) return b;
    b = b % a
  }
}


console.log(gcd(10, 8)) //-> 2
console.log(gcd(10, 9)) //-> 1
console.log(gcd(9, 10)) //-> 1
console.log(gcd(-15, 10)) //-> 1

module.exports = gcd;