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

//special cases are when the digit is 4 or 9
function romanNumeral(n, place = null) {
  if (place === null) {
    let numString = n + "";
    let output = "";
    let i = numString.length - 1;
    for (let digit of numString) {
      let numnum = parseInt(digit);
      output += romanNumeral(numnum, i); //append the largest digit's numeral to the end
      i--;
    }
    return output;
  }
  switch (place) {
    case 0:
      if (n === 4) return "IV";
      if (n === 9) return "IX";
      if (n < 5) return "I".repeat(n);
      if (n >= 5) return "V" + "I".repeat(n - 5);
      break;
    case 1:
      if (n === 4) return "XL";
      if (n === 9) return "XC";
      if (n < 5) return "X".repeat(n);
      if (n >= 5) return "L" + "X".repeat(n - 5);
      break;
    case 2:
      if (n === 4) return "CD";
      if (n === 9) return "CM";
      if (n < 5) return "C".repeat(n);
      if (n >= 5) return "D" + "C".repeat(n - 5);
      break;
    case 3:
      if (n < 5) return "M".repeat(n);
      throw console.error("outside the scope of this program");
      break;
  }
}

module.exports = romanNumeral;
