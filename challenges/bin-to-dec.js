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
  let decimal = 0;
  for (let i = 0; i < binary.length ; i += 1) {
    const currentNumber = parseInt(binary[i]);
    const power = (binary.length - i - 1)
    decimal += currentNumber * 2 ** power;
  }
  return decimal;
}
// console.log('---- binToDec ----')
// console.log(binToDec('0'))
// console.log(binToDec('11'))
// console.log(binToDec('100'))
// console.log(binToDec('101'))
// console.log(binToDec('0101'))

function decToBin(decimal) {
  if (decimal === 0) return '0'; 
  
  let binary = '';
  while (decimal > 0) {
    binary += decimal % 2;
    decimal = Math.floor(decimal / 2);
  }
  return binary;
}

// console.log('---- decToBin ----')
// console.log(decToBin(0))
// console.log(decToBin(3))
// console.log(decToBin(4))
// console.log(decToBin(5))
// console.log(decToBin(5))

function decToHex(decimal) {
  if (decimal === 0) return '0'; 
  const choices = 'ABCDEF'
  let hex = '';
  while (decimal > 0) {
    let hexNum = decimal % 16;
    hex = hexNum <= 9 ? hexNum + hex : choices[hexNum - 10] + hex;
    decimal = Math.floor(decimal / 16);
  }
  return hex;
}

// console.log('---- decToHex ----')
// console.log(decToHex(123))
// console.log(decToHex(542))
// console.log(decToHex(35145))

module.exports = binToDec;
