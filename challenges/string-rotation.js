/* Given two strings, write a function to check if the second one is a rotation of the first,
 * using only one call to isSubstring. The function isSubstring takes in two strings 
 and returns
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
  if(s1.length !== s2.length || s1.length == 0 ) return false;
  if(s1 == s2) return true; 

  //get first letter pos
  let posToCompare = s2.indexOf(s1[0])

  console.log('Firstchar: ',posToCompare)
  for(let i = 1 ; i < s1.length; i++){
      posToCompare = (nextIndex(posToCompare,s2))
      console.log(posToCompare,s2.charAt(posToCompare), 's1',s1[i])
      if(s2.charAt(posToCompare) !== s1[i])
        return false ;
      ;
      //advance check letter by letter, get next  string 2 
      
  }
  // if u got here without failing, 
  return true;
}

function nextIndex(idx,str) {
    return (str.length-1) === idx ? 0 : idx + 1
}


module.exports = {isSubstring: isSubstring, stringRotation: stringRotation};
