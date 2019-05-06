/**
* Part 1:
* You are given an array of arrays.  The subarrays are first names and phone numbers.
*
* Example:
*   jazbook = [
*     ['alex','301-844-3421'],
*     ['jae','301-844-1211'],
*     ['david','301-844-0978'],
*     ['travis','301-844-8505']
*     ['jasmine','1800-974-4539'],
*   ];
*
* jazbooks are not always sorted...
*
* Develop a function that takes in a jazbook and a name, searches through the jazbook and
* returns the persons phone number. If the person does not exists, return false.
*
* How efficient can you make this?

* Part 2: 
* Why are we storing names and phone numbers in an array?
* develop a function that takes in the poorly constructed jazbook and returns a proper phonebook 
* complete with methods to add new names and look up and remove existing entries
*/

// jazbook = [
//   ['alex','301-844-3421'],
//   ['jae','301-844-1211'],
//   ['david','301-844-0978'],
//   ['travis','301-844-8505'],
//   ['jasmine','1800-974-4539'],
// ];

//  return the number associated with the name in the jazbook
function findName(jazbook, name) {
  jazbook.sort((a, b) => (a[0]+'').localeCompare(b[0]));
  let low = 0;
  let high = jazbook.length - 1;
  if(name === jazbook[low][0]) return jazbook[low][1];
  if(name === jazbook[high][0]) return jazbook[high][1];
  while(low < high) {
    let mid = Math.floor((high + low)/2);
    if(jazbook[mid][0] === name) return jazbook[mid][1];
    else if(name < jazbook[mid][0]) high = mid;
    else low = mid;
    if(mid === low || mid === high) return false;
  } return false;
}
//console.log(findName(jazbook, 'travi'));
// return an object literal representing the jazbook
function makePhoneBookObject(jazbook){
  const obj = {};
  jazbook.forEach(item => { obj[item[0]] = item[1]; })
  return obj;
}
//console.log(makePhoneBookObject(jazbook));

const objectToExport = {
  findName,
  makePhoneBookObject,
};

module.exports = objectToExport;
