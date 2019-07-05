/**
* Part 1:
* You are given an array of arrays.  The subarrays are first names and phone numbers.
*
* Example:
*   jazbook = [
*     ['alex','301-844-3421'],
*     ['jae','301-844-1211'],
*     ['david','301-844-0978'],
*     ['travis','301-844-8505'],
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

//  return the number associated with the name in the jazbook
function findName(jazbook, name) {
  if (!jazbook) return;
  let index = 0;
  while (jazbook[index][0] !== name && index < jazbook.length) index++;
  return jazbook[index][0] === name ? jazbook[index][1] : false;
}
// return an object literal representing the jazbook
function makePhoneBookObject(jazbook) {
  this.directory = jazbook.reduce((accumulator, current) => {
    const [name, phoneNumber] = current;
    accumulator[name] = phoneNumber;
    return accumulator;
  }, {});
}
makePhoneBookObject.prototype.addName = function(name, phoneNumber) {
  this.directory[name] = phoneNumber;
  return [name, phoneNumber];
};
makePhoneBookObject.prototype.removeName = function(name) {
  if (!this.directory.hasOwnProperty(name)) return;
  delete this.directory[name];
  return name;
};
makePhoneBookObject.prototype.lookUpPhoneNumber = function(name) {
  return this.directory.hasOwnProperty(name) ? this.directory[name] : false;
};
makePhoneBookObject.prototype.lookUpName = function(phoneNumber) {
  const name = Object.keys(this.directory).find(
    key => this.directory[key] === phoneNumber,
  );
  return name ? name : false;
};

const jazbook = [
  ['alex', '301-844-3421'],
  ['jae', '301-844-1211'],
  ['david', '301-844-0978'],
  ['travis', '301-844-8505'],
  ['jasmine', '1800-974-4539'],
];

console.log(findName(jazbook, 'alex'));

const phoneBook = new makePhoneBookObject(jazbook);
console.log(phoneBook.directory);
console.log(phoneBook.addName('Luis', '1234567890'));
console.log(phoneBook.removeName('Luis'));
console.log(phoneBook.lookUpPhoneNumber('travis'));
console.log(phoneBook.lookUpPhoneNumber('Luis'));
console.log(phoneBook.lookUpName('1800-974-4539'));
console.log(phoneBook.lookUpName('1800'));

const objectToExport = {
  findName,
  makePhoneBookObject,
};

module.exports = objectToExport;
