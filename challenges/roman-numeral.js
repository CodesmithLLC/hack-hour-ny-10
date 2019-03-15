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
  // let numStr = n.toString()
  let romanNum = '';

  const romanObj = {
    'I'   : 1,
    'IV'  : 4,
    'V'   : 5,
    'IX'  : 9,
    'X'   : 10,
    'XL'  : 40,
    'L'   : 50,
    'XC'  : 90,
    'C'   : 100,
    'CD'  : 400,
    'D'   : 500,
    'CM'  : 900,
    'M'   : 1000
  }

  // for (let key in romanObj) {
  //   while (n >= romanObj[key]) {
  //     romanNum += key;
  //     n -= romanObj[key]
      
      
      // if (romanNum === 'IIII') {
      //   romanNum = 'IV'
      // }
      // if (romanNum === 'IVI') {
      //   romanNum = 'V'
      // }
      // if (romanNum === 'VIIII') {
      //   romanNum = 'IX'
      // }
      // if (romanNum === 'IXI') {
      //   romanNum = 'X'
      // }
      // if (romanNum === 'IXI') {
      //   romanNum = 'X'
      // }
      
      // console.log(romanNum)
    }
  }
  
  //return roman numeral
  return romanNum

  
  
}

console.log(romanNumeral(1))
console.log(romanNumeral(3))
console.log(romanNumeral(5))
console.log(romanNumeral(8))
console.log(romanNumeral(9))
console.log(romanNumeral(10))
console.log(romanNumeral(40))
// console.log(romanNumeral(50))
// console.log(romanNumeral(90))
// console.log(romanNumeral(100))
// console.log(romanNumeral(400))
// console.log(romanNumeral(500))
// console.log(romanNumeral(900))
// console.log(romanNumeral(1000))

module.exports = romanNumeral;
