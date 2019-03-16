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
    binary = binary.split('').map(Number)
    let count = 0;
    let result = 0;
    while(binary.length){
        if (binary.pop() === 1) result += 2**count;
        count++;
    }
    return result;
}
// console.log(binToDec('11'))
// console.log(binToDec('100'))
// console.log(binToDec('101'))
// console.log(binToDec('0101'))

module.exports = binToDec;
