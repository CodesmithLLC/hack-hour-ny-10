/* You are given a string that represents a binary number
 *
 * Write a function that converts the binary string to a decimal number
 *
 * Example:
* 	binToDec('0')   -> 0
 * 	binToDec('11')  -> 3
 * 	binToDec('100') -> 4
 * 	binToDec('101') -> 5
 *  binToDec('0101') -> 5
 *
 * Extension:
 * Write a function that converts a decimal number to binary (then maybe hexadecimal)
 */

function binToDec(binary) {
    let number = 0
    for (let i=(binary.length-1), x=0; i>=0 && x<binary.length; i--, x++) {
      if (parseInt(binary[i]) === 1) {
        number+=(Math.pow(2, x))
      }
      console.log(parseInt(binary[i]))

    }
    return number;

}

module.exports = binToDec;
