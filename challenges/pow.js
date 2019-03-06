/* Write a function that calculates x^y, where x is given as the base and y is given as the power.
 * Use recursion!
 */

function pow(base, power) {
  if (power === undefined || base === undefined) return undefined;
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



module.exports = pow;
