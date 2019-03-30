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

  let arr = str.split('');
  const letterCounts = {};
  let letter;
  let palindromeSum = 0;

 //count all the letters, store in object
  for (let i = 0; i < arr.length; i++) {
    letter = arr[i];
    letterCounts[letter] = letterCounts[letter] || 0;
    letterCounts[letter] += 1;
  }
  //console.log(letterCounts)
  //check if there are letters with odd counts. 
  //if even, will add zero. if odd, will add a value > 1
  for (let letterCount in letterCounts) {
    palindromeSum += letterCounts[letterCount] % 2;
  }
  //if palidromeSum greater than 1, number cannot be a palidrome
  //i.e. there is more than one number that occurred once
 if (palindromeSum < 2) return true;
 return false;
}


console.log(permPalin('abab')) // => true
console.log(permPalin('cbaba')) //=> true
console.log(permPalin('cbac'))  //=> false
console.log(permPalin('a'))  //=> true


module.exports = permPalin;