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
  if (!str) return false;
  if (str.length === 1) return true;
  const count = {};
  let letter;
  let sum = 0;
  for (let i = 0; i < str.length; i += 1) {
    letter = str[i];
    count[letter] = 0;
    count[letter] += 1;
  }
  for (const countLetters in count) {
    sum += count[countLetters];
  }
  return sum % 2;
}

console.log(permPalin("cbaba"));

module.exports = permPalin;
