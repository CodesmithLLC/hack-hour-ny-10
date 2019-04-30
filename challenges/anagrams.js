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
  const output = [];

  const helper = (chosen, options) => {
    // base case
    if (chosen.length === string.length) {
      const chosenStr = chosen.join('');
      if (!output.includes(chosenStr)) {
        output.push(chosenStr);
      }
      return;
    }
    for (let i = 0; i < options.length; i += 1) {
      // choose
      const choice = options[i];
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

// ALTERNATIVE

function allAnagrams(word) {
  if (word.length < 2) {
    return [word];
  } else {
    var allAnswers = [];
    for (var i = 0; i < word.length; i++) {
      var letter = word[i];
      var shorterWord = word.substr(0, i) + word.substr(i + 1, word.length - 1);
      var shortwordArray = allAnagrams(shorterWord);
      for (var j = 0; j < shortwordArray.length; j++) {
        allAnswers.push(letter + shortwordArray[j]);
      }
    }
    return allAnswers;
  }
}

// ALTERNATIVE

function anagrams(string) {
  var results = makeAnagrams('', string);
  var noRepeats = results.reduce(function(obj, val, i) {
    obj[val] = 0;
    return obj;
  }, {});
  return Object.keys(noRepeats);
}

function makeAnagrams(head, rest) {
  var intermediate = [];
  if (rest.length === 0) {
    intermediate.push(head);
  }
  var prefix, suffix;
  for (var i = 0; i < rest.length; i++) {
    prefix = rest.slice(0, i);
    suffix = rest.slice(i + 1);
    intermediate = intermediate.concat(makeAnagrams(head + rest.charAt(i), prefix + suffix));
  }
  return intermediate;
}

// ALTERNATIVE

function anagrams(string) {
  var s_array = string.split('');
  return anagramRecursion(s_array);
}

function anagramRecursion(letters) {
  var len = letters.length;
  var results = [];
  var newResults = [];
  var newLetters = [];
  var firstLetter;

  if (len <= 1) {
    results.push(letters.join(''));
    return results;
  }

  for (var i = 0; i < len; i++) {
    firstLetter = letters[i];

    // get all results for words from letters besides firstLetter
    newLetters = letters.slice(0, i).concat(letters.slice(i + 1));
    newResults = anagramRecursion(letters.slice(0, i).concat(letters.slice(i + 1)));

    // add firstLetter to all of the new results
    newResults = newResults.map(function(str) {
      return firstLetter + str;
    });

    // add newResults to results
    results = results.concat(newResults);
  }
  return results;
}

console.log(anagrams('abc'));

module.exports = anagrams;
