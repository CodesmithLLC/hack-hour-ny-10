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
    jazbook.forEach(entry => {
      this.phonebook[entry[0]] = entry[1];
    });
  }

  add(name, number) {
    this.phonebook[name] = number;
    return this.phonebook;
  }

  lookup(name) {
    if (this.phonebook.hasOwnProperty(name)) {
      return this.phonebook[name];
    } else return 'no such name in phonebook';
  }

  remove(name) {
    if (this.phonebook.hasOwnProperty(name)) {
      const toDelete = this.phonebook[name];
      delete this.phonebook[name];
      return toDelete;
    } else return 'no such name in phonebook';
  }
}

const jazbook = [
  ['alex', '301-844-3421'],
  ['jae', '301-844-1211'],
  ['david', '301-844-0978'],
  ['travis', '301-844-8505'],
  ['jasmine', '1800-974-4539']
];
// const phonebook = new makePhoneBookObject(jazbook);
// phonebook.add('nel', '1234567');
// console.log(phonebook);
// console.log(phonebook.remove('nel'));
// console.log(phonebook.lookup('alex'));

const objectToExport = {
  findName,
  makePhoneBookObject
};

module.exports = objectToExport;
