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
  let count = 0;
  const map = str.split('').reduce((acc, char) => {
    if (!acc[char]) {
      acc[char] = 0;
      count += 1;
    }

    acc[char] += 1;

    if (acc[char] === 2) {
      acc[char] = 0;
      count -= 1;
    }
    return acc;
  }, {});

  if (count === 0 || count % 2 === 1) {
    return true;
  } else {
    return false;
  }
}

// console.log(permPalin('cbac')); // false
// console.log(permPalin('abab')); // true
// console.log(permPalin('a')); // true
// console.log(permPalin('cbabababa')); // true

module.exports = permPalin;
