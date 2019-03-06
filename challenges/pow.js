/* Write a function that calculates x^y, where x is given as the base and y is given as the power.
 * Use recursion!
 */

function pow(base, power, answer = 1) {
  const negative = power < 0 ? true: false;
  if (power === 0) return answer;
  return pow(base, negative ? power + 1 : power - 1, negative ? answer / base : answer * base);
}

module.exports = pow;
