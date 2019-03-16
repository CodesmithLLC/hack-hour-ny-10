/* Given a positive integer, return it as a string in Roman Numeral form.
 * Some basic conversions are given below:
 *
 *      1     ->    I
 *      4     ->    IV
 *      5     ->    V
 *      9     ->    IX
 *      10    ->    X
 *      40    ->    XL
 *      50    ->    L
 *      90    ->    XC
 *      100   ->    C
 *      400   ->    CD
 *      500   ->    D
 *      900   ->    CM
 *      1000  ->    M
 *
 */

function romanNumeral(n) {
  const stringifiedNum = n.toString();
  const dict = {
    1: "I",
    5: "V",
    10: "X",
    50: "L",
    100: "C",
    500: "D",
    1000: "M"
  };

  const vals = [1, 5, 10, 50, 100, 500, 1000];
  const reversevals = vals.reverse();

  const result = "";

  for (let i = 0; i < reversevals.length; i++) {
    if ((n / vals).toFixed() >= 1) {
    }
  }
  // const temp;
  // reversevals.reduce((acc, val) => {
  //   console.log("n / val to fixed", (n / val).toFixed(), "n", n, "val", val);

  //   if ((n / val).toFixed() > 0) {
  //     acc += dict[val];
  //   }
  //   return acc;
  // }, result);

  // if (stringifiedNum.length === 1 || n % 5 === 0) {
  //   return dict[n];
  // } else if (n % 4 === 0) {
  // }

  const split = [];

  for (let i = 0; i < stringifiedNum.length; i++) {
    if (stringifiedNum.length === 1) {
      split.push(parseInt(stringifiedNum));
    } else {
      split.push(parseInt(stringifiedNum[i]) * (i * 10));
    }
  }
  console.log(split);
}

console.log(romanNumeral(1)); // I
console.log(romanNumeral(4)); // IV
console.log(romanNumeral(10)); // X
console.log(romanNumeral(100)); // C
console.log(romanNumeral(1000)); // M
console.log(romanNumeral(50)); // L
console.log(romanNumeral(40)); // XL
console.log(romanNumeral(500)); // D

module.exports = romanNumeral;
