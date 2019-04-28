/*
How quickly could we check if a given integer is in the array?
Assume the array is sorted.
You can do better than O(n) time

var nums = [1, 4, 6, 7, 9, 17, 45]
findInOrderedSet(nums, 4);  -> true
findInOrderedSet(nums, 2);  -> false

 */


function findInOrderedSet(arr, target) {
  var middle =  Math.floor(arr.length / 2)
   if(!arr.length) return false ; 
 
   if(arr[middle] == target) {
     return true
   } else {
     var newArr = arr[middle] > target 
           ? arr.slice(0,middle)  
           : arr.slice(middle+1)
     return findInOrderedSet(newArr, target) 
   }
}


module.exports = findInOrderedSet;
