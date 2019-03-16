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
  const map = [
    [1000, "M"],
    [900, "CM"],
    [500, "D"],
    [400, "CD"],
    [100, "C"],
    [90, "XC"],
    [50, "L"],
    [40, "XL"],
    [10, "X"],
    [9, "IX"],
    [5, "V"],
    [4, "IV"],
    [1, "I"]
  ];

  let value = "";
  for (let i = 0; n > 0 && i < map.length; i++) {
    while (n >= map[i][0]) {
      value += map[i][1];
      n -= map[i][0];
    }
  }
  return value;
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
