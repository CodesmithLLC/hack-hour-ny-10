/**
 * Given a string, determine if any of the permutations of that string is a palindrome
 *
 * Example:
 * 	- permPalin('abab') => true
 * 	- permPalin('cbaba') => true
 * 	- permPalin('cbac') => false
 * 	- permPalin('a') => true
 *
 */

function permPalin(str) {
	let front = 0;
	let end = str.length - 1;
	while(front < end) {
		if(str[front++] !== str[end--]) return false;
	} return true;
}
//console.log(permPalin('abcdadcbaa'))

module.exports = permPalin;