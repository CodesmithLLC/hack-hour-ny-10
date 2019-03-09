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

function isSubstring(s1, s2) {
  return s1.indexOf(s2) >= 0;
}


function stringRotation(s1, s2) {
  if (s2.length !== s1.length) return false
  let checkStr = s1.slice()
  for (let i = 0; i < s1.length; i += 1) {
    checkStr = checkStr.slice(checkStr.length - 1) + checkStr.slice(0, checkStr.length - 1)
    if (isSubstring(checkStr, s2)) return true
  }
  return false
}


module.exports = { isSubstring: isSubstring, stringRotation: stringRotation };
