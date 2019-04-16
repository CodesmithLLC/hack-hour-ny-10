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

// console.log(isSubstring("hello", "hello"))
// console.log(isSubstring("hello", "llohe"))
// console.log(isSubstring("hello", "he"))
// console.log(isSubstring("hello", "ollhe"))

function stringRotation(s1, s2) {
  if(s1.length !== s2.length) return false;

  for(let i = 0; i<s2.length; i++){
    if(s2[i] === s1[0]){
      console.log(s2[i])
    }
  }
}


uctelet

console.log(stringRotation("hello", "hello"))
console.log(stringRotation("hello", "llohe"))
console.log(stringRotation("hello", "he"))
console.log(stringRotation("hello", "ollhe"))

module.exports = {isSubstring: isSubstring, stringRotation: stringRotation};
