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

function rotate(str) {
  const temp = str[str.length-1];
  const arr = str.split('');
  for(let i = str.length-1; i > 0; i--) {
    arr[i] = arr[i-1];
  }
  arr[0] = temp;
  return arr.join('');
}

function stringRotation(s1, s2) {
  if(isSubstring(s1, s2)) return true;
  if(s1.length !== s2.length) return false;
  let str = s1;
  for(let i = 0; i < s1.length-1; i++) {
    str = rotate(str);
    if(isSubstring(str,s2)) return true;
  }
  return false;
}
// console.log(stringRotation('hello','hello'));
// console.log(stringRotation('hello','llohe'));
// console.log(stringRotation('hello','elloh'));
// console.log(stringRotation('hello','ollhe'));
// console.log(stringRotation('he','eh'));

module.exports = {isSubstring: isSubstring, stringRotation: stringRotation};
