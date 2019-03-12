/* Given two strings, write a function to check if the second one is a rotation of the first,
 * using only one call to isSubstring. The function isSubstring takes in two strings and returns
 * true if the second string is found in the first, false otherwise.
 *
 * h->e->l->l->o   ===   l->l-o->h->e
 * h->e->l->l->o   !==   o->l-l->h->e
 *
 * For example: stringRotation("hello", "hello") -> true
 *              stringRotation("hello", "llohe") -> true
 *              stringRotation("hello", "he") -> false
 *              stringRotation("hello", "ollhe") -> false (not a rotation, just an anagram)
 */

 /**
  * Summary - takes in two strings and evaluates if the second is found in the first
  * @param {string} s1 
  * @param {string} s2
  * @returns {boolean} returns true if string is found, false otherwise 
  */
function isSubstring(s1, s2) {
  return s1.indexOf(s2) >= 0;
}

function stringRotation(s1, s2) {
  return (s1.length === s2.length) 
  && isSubstring(s1 + s1, s2);
}

// console.log(stringRotation('hello', 'hello'))
// console.log(stringRotation('hello', 'llohe'))
// console.log(stringRotation('hello', 'heoll'))
// console.log(isSubstring('hello', 'he'))
// console.log(isSubstring('hello', 'llo'))

module.exports = {isSubstring: isSubstring, stringRotation: stringRotation};
