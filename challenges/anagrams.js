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
  const arrFromString = string.split('');
  const permutations = [];
  if (arrFromString.length < 1) { return permutations.push(arrFromString.join('')); }
  for (let i = 0; i < arrFromString.length; i += 1) {
    const copyOfArr = arrFromString.slice();
    if (i % 2 === 0) {
      [copyOfArr[i], copyOfArr[copyOfArr.length - 1]] = [
        copyOfArr[copyOfArr.length - 1],
        copyOfArr[i],
      ];
      permutations.push(copyOfArr);
    } else if (i % 2 === 1) {
      [copyOfArr[1], copyOfArr[copyOfArr.length - 1]] = [
        copyOfArr[copyOfArr.length - 1],
        copyOfArr[1],
      ];
      permutations.push(copyOfArr);
    }
  }
  return permutations;
}

console.log(anagrams('abc'));

module.exports = anagrams;
