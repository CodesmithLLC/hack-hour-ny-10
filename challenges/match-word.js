// Some languages have "if" statements that are closed by "fi" instead of curly brackets. Or they close a "case" with "esac",
// i.e. the same keyword backwards. for this problem we'll check that all words in a string are "closed". Write a function that
// takes a string and returns true if every word is closed by its backwards counterpart. Words must be separated by space or
// punctuation.

// matchWord('__END_DNE-----');  -> true
// matchWord('__ENDDNE__');  -> false       (not separated by a space)
// matchWord('IF()()fi[]');  -> true        (should be case-insensitive)
// matchWord('for__if__rof__fi');  -> false     not properly closed. like ( [) ]
// matchWord('%%$@$while  try ! yrt  for if_fi rof #*#  elihw');  -> true
// matchWord('');  -> true

// Verbose but more efficient
function matchWord(str) {
  let current = 0;
  const stack = [];
  // Main loop moving forward in string
  while (current < str.length) {
    // While current is not a letter, increment current pointer
    while (str[current] && !str[current].match(/[A-Z|a-z]/i)) {
      current++;
    }
    let currentWord = '';
    let currentWordReverse = '';    
    // While current character in string is a letter...
    // ... add to currentWord and currentWordReverse while incrementing current
    while (str[current] && str[current].match(/[A-Z|a-z]/i)) {
      currentWord += str[current].toLowerCase();
      currentWordReverse = str[current].toLowerCase() + currentWordReverse;
      current++;
    }
    // if current word equal to previous word's reverse, pop off previous word from stack
    if (stack.length && currentWord === stack[stack.length-1].reverseWord) {
      stack.pop()
    }
    // else if currentWord exists, push object with current word and its reverse on to the stack
    else if (currentWord) {
      stack.push({word: currentWord, reverseWord: currentWordReverse});
    }
  }
  // If stack is empty, return true, else return false
  return stack.length === 0 ? true : false;
}
​
// Less efficient but more concise
function matchWord(str) {
  const stack = []
  // String.prototype.match returns an array of strings matched against regex
  const wordArray = str.match(/[a-zA-Z]+/g) || [];
  for (let currentWord of wordArray) {
    let word = currentWord.toLowerCase();
    let reverseWord = word.split('').reverse().join('');
    // if current word equal to previous word's reverse, pop off previous word from stack
    if (stack.length && word === stack[stack.length-1].reverseWord) {
      stack.pop()
    }
    // else push object with current word and its reverse on to the stack
    else {
      stack.push({word, reverseWord});
    }
  }
  // If stack is empty, return true, else return false
	return stack.length === 0 ? true : false;
}

module.exports = matchWord;
