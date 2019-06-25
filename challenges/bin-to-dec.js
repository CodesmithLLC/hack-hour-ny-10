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
  if (!binary) return 0;
  let sum = 0;
  let pointer = 0;
  while (pointer < binary.length) {
    if (binary.toString()[pointer] === '1') {
      sum += 2 ** (binary.length - pointer - 1);
    }
    pointer += 1;
  }
  return sum;
}

function decToBin(int) {
  const binArr = [];
  let curInt = int;
  let numChars;
  if (int % 2 === 0) {
    numChars = getBaseLog(2, int);
    binArr.push('1');
    for (let i = 0; i < numChars - 1; i += 1) {
      binArr.push('0');
    }
  } else {
    numChars = getBaseLog(2, int - 1);
    binArr.push('1');
    for (let i = 0; i < numChars - 2; i += 1) {
      binArr.push('0');
    }
    binArr.push('1');
    curInt -= 1;
  }
  curInt -= 2;
  while (curInt > 0) {
    numChars = getBaseLog(2, curInt);
    binArr[numChars - 1] = 1;
    curInt -= 2;
  }

  return binArr.join('');
}

function getBaseLog(x, y) {
  return Math.log(y) / Math.log(x);
}

module.exports = binToDec;
