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
  let output = '';
  const roman = [ 
    [ '1', 'I' ],
    [ '4', 'IV' ],
    [ '5', 'V' ],
    [ '9', 'IX' ],
    [ '10', 'X' ],
    [ '40', 'XL' ],
    [ '50', 'L' ],
    [ '90', 'XC' ],
    [ '100', 'C' ],
    [ '400', 'CD' ],
    [ '500', 'D' ],
    [ '900', 'CM' ],
    [ '1000', 'M' ]]

  while (n > 0) {
    if (roman[roman.length - 1][0] > n) {
      roman.pop();
      continue;
    }

    output += roman[roman.length - 1][1];
    n -= roman[roman.length - 1][0]
  }

  return output;
}

// Naive Approach
function romanNumeralNaive(n) {
  let output = '';

  while (n > 0) {
    if (n >= 1000) {
      output += 'M'
      n -= 1000;
    } else if (n >= 900) {
      output += 'CM'
      n -= 900
    } else if (n >= 500) {
      output += 'D'
      n -= 500
    } else if (n >= 400) {
      output += 'CD'
      n -= 400
    } else if (n >= 100) {
      output += 'C'
      n -= 100
    } else if (n >= 90) {
      output += 'XC'
      n -= 90
    } else if (n >= 50) {
      output += 'L'
      n -= 50
    } else if (n >= 40) {
      output += 'XL'
      n -= 40
    } else if (n >= 10) {
      output += 'X'
      n -= 10
    } else if (n >= 9) {
      output += 'IX'
      n -= 9
    } else if (n >= 5) {
      output += 'V'
      n -= 5
    } else if (n >= 4) {
      output += 'IV'
      n -= 4
    } else if (n >= 1) {
      output += 'I'.repeat(n);
      n = 0;
    }
  }

  return output;
}

console.log(romanNumeral(14));
console.log(romanNumeral(350));
console.log(romanNumeral(5321))
console.log(romanNumeral(-1))

module.exports = romanNumeral;
