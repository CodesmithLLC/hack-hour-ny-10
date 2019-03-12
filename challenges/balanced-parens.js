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
  let openParens = 0;
  let closeParens = 0;
  let openCurly = 0;
  let closeCurly = 0;
  let openBracket = 0;
  let closeBracket = 0;
  for (let i = 0; i < input.length; i += 1) {
    if (input[i] === '(') openParens += 1;
    if (input[i] === ')') closeParens += 1;
    if (input[i] === '{') openCurly += 1;
    if (input[i] === '}') closeCurly += 1;
    if (input[i] === '[') openBracket += 1;
    if (input[i] === ']') closeBracket += 1;
  }
  return (
    openParens === closeParens
    && openCurly === closeCurly
    && openBracket === closeBracket
  );
}

// const balancedParens = () => {
//     input = [...input];
//     input.reduce((count, current) => {
//         return ((current === '(' && count += 1 ||
//         current === ')' && count -= 1)) &&
//         ((current === '{' && count += 1 ||
//         current === '}' && count -= 1)) &&
//         ((current === '[' && count += 1 ||
//         current === ']' && count -= 1))
//         return count;
//     }, 0)}

console.log(balancedParens(' var wow  = { yo: thisIsAwesome() }'));
console.log(balancedParens(' var hubble = function() { telescopes.awesome();'));

module.exports = balancedParens;
