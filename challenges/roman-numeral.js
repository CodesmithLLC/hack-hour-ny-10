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
  let numerals = {
    0: "",
    1: "i",
    4: "iv",
    5: "v",
    9: "ix",
    10: "x",
    40: "XL",
    50: "L",
    90: "XC",
    100: "C",
    400: "CD",
    500: "D",
    900: "CM",
    1000: "M",
    999999999999999: "*"
  };

  let NUMERALS = Object.keys(numerals);

  let matrix = [];
  for (let i = 0; i < Object.keys(numerals).length - 1; i += 1) {
    let curRow = [];
    for (let j = 0; j <= n; j += 1) {
      curRow.push("");
    }
    matrix.push(curRow);
  }
  for (let i = 1; i < Object.keys(numerals).length - 1; i += 1) {
    currentRoman = parseInt(NUMERALS[i]);
    nextRoman = parseInt(NUMERALS[i + 1]);
    for (let j = 1; j <= n; j += 1) {
      if (currentRoman === j) {
        matrix[i][j] = numerals[currentRoman];
      } else if (nextRoman > j) {
        if (matrix[i - 1][j] !== "") {
          matrix[i][j] = matrix[i - 1][j];
        } else {
          let remainder = j - currentRoman;
          matrix[i][j] = numerals[currentRoman] + matrix[i][remainder];
        }
      } else {
      }
    }
  }
  return matrix[Object.keys(numerals).length - 2][n];
}
module.exports = romanNumeral;
