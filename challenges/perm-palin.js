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
  const map = {};
  for (let letter of str) {
    map[letter] ? map[letter]++ : (map[letter] = 1);
  }

  let oddCount = 0;

  for (let key of Object.keys(map)) {
    console.log(map[key], key);
    if (map[key] % 2) oddCount++;
  }

  return oddCount > 1 ? false : true;
}

module.exports = permPalin;
