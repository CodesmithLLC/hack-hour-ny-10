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

//  return the number associated with the name in the jazbook
function findName(jazbook, name) {
  // can't be better time-complexity than linear, sorting then binary searching would be slower
  // let's hope that JS native find is a linear scan
  const entry = jazbook.find(entry => entry[0] === name);
  return entry ? entry[1] : false;
}

// return an object literal representing the jazbook
function makePhoneBookObject(jazbook) {
  class PhoneBookObject {
    constructor(jazbook) {
      this.entries = new Map();
      for (let [name, number] of jazbook) {
        this.entries.set(name, number);
      }
    }

    lookup(name) {
      return this.entries.has(name) ? this.entries.get(name) : false;
    }

    add(name, number) {
      this.entries.set(name, number);
      return this.entries.size;
    }

    remove(name) {
      this.entries.delete(name);
    }
  }

  return new PhoneBookObject(jazbook);
}

const objectToExport = {
  findName,
  makePhoneBookObject,
};

module.exports = objectToExport;
