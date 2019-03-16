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
  const conversionObj = {
    '0' : 1,
    '1' : 2,
    '2' : 4,
    '3' : 8,
    '4' : 16,
    '5' : 32,
    '6' : 64,
    '7' : 128
  }
  let sum = 0;
  const binArr = binary.split('').reverse()
  //console.log(binArr)
  for(let i = binArr.length-1; i >=0 ; i--){
    if(binArr[i] === '1') {
      sum += conversionObj[i]
    } 
  }
  return sum;
}

function decToBin (dec) {

  const conversionArr = [1, 2, 4, 8, 16, 32, 64, 128]
  let binaryNum = [];
  let currVal = dec;
  for(let i = conversionArr.length-1; i >= 0; i--) {
    if (currVal >= conversionArr[i]) {
      binaryNum.push('1');
      currVal -= conversionArr[i];
    } 
    if (currVal === 0 && i > 0) {
      binaryNum.push('0');
    }
  }
  return binaryNum.join('');
}

console.log(binToDec('0'))  // -> 0
console.log(binToDec('11'))  //-> 3
console.log(binToDec('100')) //-> 4
console.log(binToDec('101')) //-> 5
console.log(binToDec('0101')) //-> 5
console.log(binToDec('11111111')) //-> 255

console.log(decToBin(1)) //-> '1'
console.log(decToBin(3)) //-> '11'
console.log(decToBin(4)) //-> '100'
console.log(decToBin(255)) //-> '11111111'
console.log(decToBin(128))

module.exports = binToDec;
