/**
 * Given a string, determine if any of the permutations of that string is a palindrome
 *
 * Example:
 * 	- permPalin('abab') => true
 * 	- permPalin('cbaba') => true
 * 	- permPalin('cbac') => false
 * 	- permPalin('a') => true
 *
 */

function permPalin(str) {
  if (str.length === 1) return true;
  if (str === '') return false;
  if (!str) return false;
  let dict = {};
  let pointer = 0;
  for (let i = 0; i < str.length; i += 1) {
    if (dict[str[i]]) {
      dict[str[i]] += 1;
    } else {
      dict[str[i]] = 1;
    }
  }

  let oddCount = 0;
  for (letter in dict) {
    if (dict[letter] % 2 !== 0) {
      if (oddCount) return false;
      oddCount += 1;
    }
  }
  return true;
}

module.exports = permPalin;
