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
  let dictionary = {};
  let oddCount = 0;

  for (let i = 0; i < str.length; i++) {
    let currentCharacter = str[i].toLowerCase();
    if (!dictionary[currentCharacter]) dictionary[currentCharacter] = 1;
    else dictionary[currentCharacter]++;
  }

  for (let character in dictionary) {
    let characterCount = dictionary[character];
    if (characterCount % 2 > 0) oddCount++;
    if (oddCount > 1) return false;
  }

  return true;
}

module.exports = permPalin;