/* Write a function that calculates x^y, where x is given as the base and y is given as the power.
 * Use recursion!
 */

function pow(base, power) {
  if (power === undefined || base === undefined) return undefined
  switch (true) {
    case (power === 0):
      return 1;
      break;
    case (power !== 0 && (power < 1 && power > -1)):
      return base ** (power);
      break;
    case (power > 0):
      return base * pow(base, power - 1);
      break;
    case (power < -0):
      return (1 / base) * pow(base, power + 1)
      break;
  }
}
console.log(pow(3, -2)) // expect 0.11111111111
console.log(pow(3, -3)) // expect 0.03703703703
console.log(pow(3, 0.5)) // expect 1.73205080757
console.log(pow(3, 1.5)) // expect 5.19615242271
console.log(pow(3, -1.5)) // expect 0.19245008973



module.exports = pow;
