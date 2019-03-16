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
    if (binary.toString()[pointer] === "1") {
      sum += 2 ** (binary.length - pointer - 1);
    }
    pointer += 1;
  }
  return sum;
}

module.exports = binToDec;
