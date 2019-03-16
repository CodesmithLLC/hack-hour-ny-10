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
    return binary.split("").reverse().reduce((accumulator, current, index) => {
       return accumulator += parseInt(current) * Math.pow(2,index);
    }, 0);
}


console.log(binToDec('0'))
console.log(binToDec('11'))
console.log(binToDec('100'))
console.log(binToDec('101'))
console.log(binToDec('0101'))

module.exports = binToDec;
