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
  stringArr = string.split('');
  let output = [];

  const helper = (chosen, options) => {
    // base case
    if (chosen.length === string.length) {
      let chosenStr = chosen.join('')
      if (!output.includes(chosenStr)) {
        output.push(chosenStr);
      }
      return;
    }
    for (let i = 0; i < options.length; i += 1) {
      // choose
      let choice = options[i];
      chosen = chosen.concat(choice); // insert in chosen
      options.splice(i, 1);
      // explore
      helper(chosen, options);
      // unchoose
      chosen.pop();
      options.splice(i, 0, choice);
    }
  };
  helper([], stringArr);
  return output;
}

module.exports = anagrams;
