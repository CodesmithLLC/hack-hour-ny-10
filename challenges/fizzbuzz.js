// Write a function that returns an array containing the numbers 1 to NUM. Put "fizz" in place of numbers divisble by 3, "buzz" in place of numbers divisble by 5, and "fizzbuzz" in place of numbers divisble by both 3 and 5
// fizzbuzz(16);  -> [ 1,
//                     2,
//                     'fizz',
//                     4,
//                     'buzz',
//                     'fizz',
//                     7,
//                     8,
//                     'fizz',
//                     'buzz',
//                     11,
//                     'fizz',
//                     13,
//                     14,
//                     'fizzbuzz',
//                     16 ]

function fizzbuzz(num) {
  const fizzBuzzArray = [];
  for (let i = 1; i <= num; i += 1) {
    let itemToAdd;

    i % 15 === 0
      ? (itemToAdd = "fizzbuzz")
      : i % 5 === 0
      ? (itemToAdd = "buzz")
      : i % 3 === 0
      ? (itemToAdd = "fizz")
      : (itemToAdd = i);

    fizzBuzzArray.push(itemToAdd);
  }
  return fizzBuzzArray;
}

console.log(fizzbuzz(16));

module.exports = fizzbuzz;
