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
  const stack = [];
  const match = {
    '{': '}',
    '(': ')',
    '[': ']'
  }

  for (let i = 0; i < input.length; i += 1) {
    const currentChar = input[i];
    if (currentChar === '{' || currentChar === '(' || currentChar === '{') {
      stack.push(currentChar);
    } else if(match[stack[stack.length - 1]] === currentChar) {
      stack.pop();
    }
  }
  return stack.length === 0;
}

// console.log('expect false:', balancedParens('('));  // false
// console.log('expect true:', balancedParens('()')); // true
// console.log('expect false:', balancedParens(')('));  // false
// console.log('expect true: ', balancedParens('(())'));  // true

// console.log('expect true:', balancedParens('[](){}')); // true
// console.log('expect true: ', balancedParens('[({})]'));   // true
// console.log('expect false:', balancedParens('[(]{)}')); // false

// console.log('expect true:', balancedParens(' var wow  = { yo: thisIsAwesome() }')); // true
// console.log('expect false:', balancedParens(' var hubble = function() { telescopes.awesome();')); // false

console.log(balancedParens(' ( 1 0 0 ) 0 0 0 ( 1 0 0 ( 2 0 0 ) 1 0 0 ) 0 0 0 ) -1 0 0 ( 1 0 0 [ 0 1 0 ] 0 0 0 ( 1 0 0 ) 0 0 0 { 0 0 1 } 0 0 0 [ 0 1 0 ( 1 1 0 { 1 1 1 } 1 1 0 ) 0 1 0 ] 0 0 0 [ 0 1 0 ( 1 1 0 ] 1 0 0 { 1 0 1 ) 0 0 1 } 0 0 0 0 0 0 v 0 0 0 a 0 0 0 r 0 0 0 0 0 0 w 0 0 0 o 0 0 0 w 0 0 0 0 0 0 0 0 0 = 0 0 0 0 0 0 { 0 0 1 0 0 1 y 0 0 1 o 0 0 1 : 0 0 1 0 0 1 t 0 0 1 h 0 0 1 i 0 0 1 s 0 0 1 I 0 0 1 s 0 0 1 A 0 0 1 w 0 0 1 e 0 0 1 s 0 0 1 o 0 0 1 m 0 0 1 e 0 0 1 ( 1 0 1 ) 0 0 1 0 0 1 } 0 0 0 0 0 0 v 0 0 0 a 0 0 0 r 0 0 0 0 0 0 h 0 0 0 u 0 0 0 b 0 0 0 b 0 0 0 l 0 0 0 e 0 0 0 0 0 0 = 0 0 0 0 0 0 f 0 0 0 u 0 0 0 n 0 0 0 c 0 0 0 t 0 0 0 i 0 0 0 o 0 0 0 n 0 0 0 ( 1 0 0 ) 0 0 0 0 0 0 { 0 0 1 0 0 1 t 0 0 1 e 0 0 1 l 0 0 1 e 0 0 1 s 0 0 1 c 0 0 1 o 0 0 1 p 0 0 1 e 0 0 1 s 0 0 1 . 0 0 1 a 0 0 1 w 0 0 1 e 0 0 1 s 0 0 1 o 0 0 1 m 0 0 1 e 0 0 1 ( 1 0 1 ) 0 0 1 ; 0 0 1 '))

module.exports = balancedParens;
