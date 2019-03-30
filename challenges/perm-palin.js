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

  let cand = '';
  let candRev = '';
  for (let i = 0; i < str.length; i  += 1) {
    for (let j = i; j < str.length; j += 1) {
      cand += str[j];
      candRev = str[j] + candRev;
      if (cand.length > 1 && cand === candRev) return true;
    }
    cand = candRev = '';
  }
  return false;
}

// console.log(permPalin('abab'));
// console.log(permPalin('cbaba'));
// console.log(permPalin('cbac'));
// console.log(permPalin('a'));

module.exports = permPalin;