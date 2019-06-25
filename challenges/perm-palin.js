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

function permPalin(str, perm = '') {
  const dictionary = {};
  let oddCount = 0;

  for (let i = 0; i < str.length; i++) {
    const currentCharacter = str[i].toLowerCase();
    if (!dictionary[currentCharacter]) dictionary[currentCharacter] = 1;
    else dictionary[currentCharacter]++;
  }

  for (const character in dictionary) {
    const characterCount = dictionary[character];
    if (characterCount % 2 > 0) oddCount++;
    if (oddCount > 1) return false;
  }

  return true;
}

module.exports = permPalin;
