/*
 * write a function that takes a string of text and returns true if
 * the parentheses are balanced and false otherwise.
 *
 * Example:
 *   balancedParens('(');  // false
 *   balancedParens('()'); // true
 *   balancedParens(')(');  // false
 *   balancedParens('(())');  // true
 *
 * Step 2:
 *   make your solution work for all types of brackets
 *
 * Example:
 *  balancedParens('[](){}'); // true
 *  balancedParens('[({})]');   // true
 *  balancedParens('[(]{)}'); // false
 *
 * Step 3:
 * ignore non-bracket characters
 * balancedParens(' var wow  = { yo: thisIsAwesome() }'); // true
 * balancedParens(' var hubble = function() { telescopes.awesome();'); // false
 *
 *
 */

function balancedParens(input) {
  // Create stack to keep track of parens
  const stack = [];
  const parens = {
    "[": "]",
    "(": ")",
    "{": "}"
  };
  // Loop through characters in string
  for (let i = 0; i < input.length; i++) {
    const currentCharacter = input[i];
    // If current character is an open bracket, push onto stack
    if (parens[currentCharacter]) stack.push(currentCharacter);
    // Else if current character is a close bracket...
    else if (
      currentCharacter === ")" ||
      currentCharacter === "]" ||
      currentCharacter === "}"
    ) {
      // if current character is not the corresponding closing paren to last paren on stack
      // return false
      if (parens[stack.pop()] !== currentCharacter) {
        return false;
      }
    }
  }
  // If stack is empty, return true. Else, return false.
  return !stack.length;
}

console.log(balancedParens(" var wow  = { yo: thisIsAwesome() }"));
console.log(balancedParens(" var hubble = function() { telescopes.awesome();"));

module.exports = balancedParens;
