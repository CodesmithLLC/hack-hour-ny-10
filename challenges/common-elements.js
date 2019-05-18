// given 4 arrays that may contain both numbers and strings
// return a new array with the numbers and/or strings that appear in all 4 arrays
// duplicates are only counted once;
// for example == given the following input

// var array1 = [1,4,6,7,'ferret',12,12,99,2000,'dog','dog',99,1000];
// var array2  = [15,9,9,'ferret',9,26,12,12,'dog'];
// var array3 = [23,12,12,77,'ferret',9,88,100,'dog'];
// var array4 = ['ferret',12,12,45,9,66,77,78,2000];

// your output would be [ 12, 'ferret']

// if there are no common numbers or strings return the string "Nothing in Common!"

function commonElements(array1, array2, array3, array4) {
  // ! edge case for not having all 4 arrays
  if (!array1 || !array2 || !array3 || !array4) return [];
  // ! create dictionary of first array
  let i = 0;
  let dict1 = {};
  for (;;) {
    dict1[array1[i]] = true;
    i += 1;
    if (i === array1.length) break;
  }
  i = 0;
  let dict2 = {};
  for (;;) {
    if (dict1[array2[i]]) dict2[array2[i]] = true;
    i += 1;
    if (i === array2.length) break;
  }
  i = 0;
  dict1 = {};
  for (;;) {
    if (dict2[array3[i]]) dict1[array3[i]] = true;
    i += 1;
    if (i === array3.length) break;
  }
  i = 0;
  dict2 = {};
  for (;;) {
    if (dict1[array4[i]]) dict2[array4[i]] = true;
    i += 1;
    if (i === array4.length) break;
  }
  return Object.keys(dict2);
}

module.exports = commonElements;
