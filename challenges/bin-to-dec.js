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

// function binToDec(binary) {
//   const split = binary.split("");
//   let converted = 0;
//   let exp = binary.length - 1;
//   split.forEach(num => {
//     converted += parseInt(num) * Math.pow(2, exp);
//     exp -= 1;
//   });
//   return converted;
// }

/* RECURSIVE */

const binToDec = (bin, res = 0) => {
  if (!bin.length) return res;
  const split = bin.split("");
  return binToDec(
    bin.slice(1),
    (res += parseInt(split[0]) * Math.pow(2, bin.length - 1))
  );
};

console.log(binToDec("0"));
console.log(binToDec("11"));
console.log(binToDec("100"));
console.log(binToDec("101"));
console.log(binToDec("0101"));

module.exports = binToDec;
