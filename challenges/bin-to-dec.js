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
  return binary
    .toString()
    .split('')
    .reverse()
    .reduce(
      (accumulator, current, index) =>
        (accumulator += parseInt(current) * Math.pow(2, index)),
      0,
    );
}

function binToDec2(binary) {
  let counter = binary.toString().length - 1;
  return binary
    .toString()
    .split('')
    .reduce(
      (accumulator, current, index) =>
        (accumulator += parseInt(current) * Math.pow(2, counter - index)),
      0,
    );
}

function decToBin(decimal, counter = 0) {
  if (decimal <= 1 && !counter) return '0'.repeat(counter) + decimal.toString();
  if (!counter) counter = Math.floor(Math.log2(decimal));
  if (decimal - Math.pow(2, counter) >= 0) {
    decimal -= Math.pow(2, counter);
    return '1' + decToBin(decimal, counter - 1);
  } else {
    return '0' + decToBin(decimal, counter - 1);
  }
}

function decToHex(decimal) {
  let hexObj = {
    10: 'A',
    11: 'B',
    12: 'C',
    13: 'D',
    14: 'E',
    15: 'F',
  };
  let hex = '';
  let remainder = 0;
  while (decimal) {
    remainder = decimal % 16;
    decimal = Math.floor(decimal / 16);
    hex = (remainder >= 10 ? hexObj[remainder] : remainder.toString()) + hex;
  }
  return hex;
}

console.time('bin');
binToDec(1000000000000);
console.timeEnd('bin');
console.time('bin2');
binToDec2(1000000000000);
console.timeEnd('bin2');
console.log(decToBin(100));
console.log(decToHex(300000));
module.exports = binToDec;
