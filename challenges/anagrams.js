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
  rec('', string, arr);
  return arr;
}
function rec(prefix, string, arr) {
  const len = string.length;
  if(len === 0) arr.push(prefix);
  else {
    for(let i = 0; i < len; i++) {
      rec(prefix + string[i], string.substring(0, i) + string.substring(i+1, len), arr)
    }
  }
}

console.log(anagrams('abc'));

module.exports = anagrams;
