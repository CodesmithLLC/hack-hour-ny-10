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
    let counter = 0;
    let decNum = 0;
    //moving backwards in the binary string
    for (let i = binary.length - 1; i >= 0; i--) {
        //getting the index to start from 0 

        console.log("char at i", parseInt(binary.charAt(i)))
        decNum += (parseInt(binary.charAt(i)) * Math.pow(2, counter))
        counter++
    }
    return decNum
}

console.log(binToDec('10'))
module.exports = binToDec;
