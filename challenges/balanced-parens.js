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

function balancedParens(input){
  let newInput = input.split('');
  let parenCount = 0;
  let sqBracketCount = 0;
  let curlyBracketCount = 0;
  for (let i = 0; i < newInput.length; i++) {
    if (newInput[i] === '(') {
      parenCount += 1;
      for (let j = 0; j < newInput.length; j++) {
        if (newInput[j] === ')') {
          parenCount += 1;
        }
      } 
    }
    if (newInput[i] === '[') {
      sqBracketCount += 1;
      for (let j = 0; j < newInput.length; j++) {
        if (newInput[j] === ']') {
          sqBracketCount += 1;
        }
      } 
    }
    if (newInput[i] === '{') {
      curlyBracketCount += 1;
      for (let j = 0; j < newInput.length; j++) {
        if (newInput[j] === '}') {
          curlyBracketCount += 1;
        }
      } 
    }
  } 
  if (parenCount === 2 || sqBracketCount === 2 || curlyBracketCount === 2) {
    return true;
  } else return false;
}

console.log(balancedParens("(Fred Flinstone)"))
console.log(balancedParens("(Fred []Flinstone)"))
console.log(balancedParens("(Fred [Flinstone"))
console.log(balancedParens("(Fr{ed [}Flinstone)"))

module.exports = balancedParens;
