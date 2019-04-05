/**
 * Given two integers, return the greatest common divisor.
 *
 * Example:
 * gcd(10, 8) -> 2
 * gcd(10, 9) -> 1
 *
 */

function gcd(a, b) {
    if(a === b) return a;
    const smallest = (a <= b) ? a : b;
    const biggest = (a <= b) ? b : a;
    if(biggest%smallest === 0) return smallest;
    let half = Math.floor(smallest/2);
    while(half > 1) {
        if(smallest%half === 0 && biggest%half === 0) return half;
        half--;
    } return 1;
}
console.log(gcd(9,12));

module.exports = gcd;