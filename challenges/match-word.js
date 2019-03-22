// Some languages have "if" statements that are closed by "fi" instead of curly brackets. Or they close a "case" with "esac", 
//i.e. the same keyword backwards. for this problem we'll check that all words in a string are "closed". Write a function that 
//takes a string and returns true if every word is closed by its backwards counterpart. Words must be separated by space or 
//punctuation.

// matchWord('__END_DNE-----');  -> true
// matchWord('__ENDDNE__');  -> false       (not separated by a space)
// matchWord('IF()()fi[]');  -> true        (should be case-insensitive)
// matchWord('for__if__rof__fi');  -> false     not properly closed. like ( [) ] 
// matchWord('%%$@$while  try ! yrt  for if_fi rof #*#  elihw');  -> true
// matchWord('');  -> true

function matchWord(str) {
  const stack = [];
  const brackets = {
    '}': '{',
    ']': '[',
    ')': '('
  }
  str = str.toLowerCase();
  let currentWord = '';

  for (let i = 0; i < str.length; i += 1) {
    const currentChar = str[i];
    if (currentChar.match(/[A-Za-z]/)) currentWord += currentChar;
    
    if (currentChar.match(/[\s_{[(]/) || i === str.length - 1) {
      if (currentWord !== '') isReversed(stack[stack.length - 1], currentWord) ? stack.pop() : stack.push(currentWord);
      currentWord = '';
    }
    
    // if (currentChar.match(/[[({}]/)) {
    //   if (currentWord !== '') isReversed(stack[stack.length - 1], currentWord) ? stack.pop() : stack.push(currentWord);
    //   currentWord = '';
    //   stack.push(currentChar)
    // }
    
    // if (currentChar.match(/[}\])]/) && stack[stack.length - 1] === brackets[currentChar]) {
    //   stack.pop();
    // }
  }
  return stack.length === 0
}

function isReversed(original, testWord) {
  const reversed = testWord.split('').reverse().join('')
  return original === reversed;
}

console.log(matchWord('__END_DNE__')); //true
console.log(matchWord('__ENDDNE__')); //false
console.log(matchWord('for__if__rof__fi')); //false
console.log(matchWord('%%$@$while  try ! yrt  for if_fi rof #*#  elihw')); // true
console.log(matchWord('')); //true
console.log(matchWord('IF()()fi[]')) // true


module.exports = matchWord;
