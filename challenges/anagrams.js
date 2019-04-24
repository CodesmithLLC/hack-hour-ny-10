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

function anagrams(string, perm = '', output = []) {
  if (!string) return output.push(perm);
  for (let i = 0; i < string.length; i++) {
    const cand = string[i];
    string = string.slice(0, i) + string.slice(i + 1);
    anagrams(string, perm + cand, output);
    string = string.slice(0, i) + cand + string.slice(i);
  }
  return output;
}

module.exports = anagrams;
