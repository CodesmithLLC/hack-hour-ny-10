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
  //console.log(s1.indexOf(s2))
  return s1.indexOf(s2) >= 0;
}
console.log(isSubstring("red", "red"))

function stringRotation(s1, s2) {
  let stringToCheck = s1.concat(s1);  // or s1 + s1

  //rotation must be same length as original string
  //rotation must be a subset of the string concatenation

  return (s1.length === s2.length) && isSubstring(stringToCheck, s2)

}



console.log(stringRotation("hello", "hello"))
console.log(stringRotation("hello", "llohe"))

module.exports = {isSubstring: isSubstring, stringRotation: stringRotation};
