/**
 * Given a single input string, write a function that produces all possible anagrams
 * of a string and outputs them as an array. At first, don't worry about
 * repeated strings.  What time complexity is your solution?
 *
 * Extra credit: Deduplicate your return array without using uniq().
 */

/**
  * example:
  * var result = anagrams('abc');
  * console.log(result); // [ 'abc', 'acb', 'bac', 'bca', 'cab', 'cba' ]
  */

function anagrams(string) {
  const arr = [];
  const chars = string.split("");

  function inner (str, newStr) {
    if (!str.length) {
      arr.push(newStr.join(""));
    }
    for (let i = 0; i < str.length; i++) {
      let copy = str.slice();
      copy.splice(i, 1)
      inner(copy, newStr.concat(str[i]))
    } 
  }
  inner(chars, []);
  return arr;
}

const result = anagrams('abc');
console.log(result); // [ 'abc', 'acb', 'bac', 'bca', 'cab', 'cba' ]


module.exports = anagrams;
