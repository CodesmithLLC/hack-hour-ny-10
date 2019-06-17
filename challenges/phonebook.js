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
* returns the persons phone number. If the person does not exist, return false.
*
* How efficient can you make this?

* Part 2:
* Why are we storing names and phone numbers in an array?
* develop a function that takes in the poorly constructed jazbook and returns a proper phonebook
* complete with methods to add new names and look up and remove existing entries
*/

//  return the number associated with the name in the jazbook
function findName(jazbook, name) {}

// return an object literal representing the jazbook
class makePhoneBookObject {
  constructor(jazbook) {
    this.phonebook = {};
    jazbook.forEach((entry) => {
      this.phonebook[entry[0]] = entry[1];
    });
  }

  add(name, number) {
    this.phonebook[name] = number;
    return this.phonebook;
  }

  lookup(name) {
    if (this.phonebook[name]) {
      return this.phonebook[name];
    } return 'no such name in phonebook';
  }

  remove(name) {
    if (this.phonebook[name]) {
      const toDelete = this.phonebook[name];
      delete this.phonebook[name];
      return toDelete;
    } return 'no such name in phonebook';
  }
}

const jazbook = [
  ['alex', '301-844-3421'],
  ['jae', '301-844-1211'],
  ['david', '301-844-0978'],
  ['travis', '301-844-8505'],
  ['jasmine', '1800-974-4539'],
];
// const phonebook = new makePhoneBookObject(jazbook);
// phonebook.add('nel', '1234567');
// console.log(phonebook);
// console.log(phonebook.remove('nel'));
// console.log(phonebook.lookup('alex'));

const objectToExport = {
  findName,
  makePhoneBookObject,
};

module.exports = objectToExport;

// // helper function that converts initial pb into an object
// // time complexity for sorting is typically O(nlogn)
// function parseContacts (jazbook) {
//   return jazbook.reduce((acc,contact)=>{
//     acc[contact[0]] = contact[1]
//     return acc;
//   },{})
// }

// //  return the number associated with the name in the jazbook
// function findName(jazbook, name) {
//   const convertedObj = parseContacts(jazbook)
//   return name in convertedObj ? convertedObj[name] : 'Name does not exist'
// }

// // return an object literal representing the jazbook
// function makePhoneBookObject(jazbook) {
//   this.phonebook = parseContacts(jazbook);
// }

// makePhoneBookObject.prototype.add = function (name, number) {
//   this.phonebook[name] = number;
//   return this.phonebook;
// }

// makePhoneBookObject.prototype.lookup = function (name) {
//   return name in this.phonebook ? this.phonebook[name] : 'Name does not exist'
// }

// makePhoneBookObject.prototype.remove = function (name, number) {
//   if (name in this.phonebook) {
//     delete this.phonebook[name];
//     return `deleted ${name}`
//   }
//   return 'Name does not exist';
// }
