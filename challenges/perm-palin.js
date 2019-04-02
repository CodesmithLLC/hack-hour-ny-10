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
	const status = { 
		odd: 0,
		getNums: function() {
			for(const key in this.data) {
				if(this.data[key]%2 !== 0) this.odd++;
			}
		},
		data: {} 
	}
	for(let i = 0; i < str.length; i++) {
		if(!status.data[str[i]]) status.data[str[i]] = 1;
		else status.data[str[i]]++;
	} status.getNums();
	if(status.odd <= 1) return true;
	else return false;
}
//console.log(permPalin('asdfasdf'));

module.exports = permPalin;