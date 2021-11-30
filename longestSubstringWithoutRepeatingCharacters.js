/**
 * Function that accepts a string and returns the length of largest contiguous
 * substring.	
 */

function lengthOfLongestSubstring(s) {
	const substringMap = {};
	let start = 0;
	let longest = 0;
	for (let i = 0; i < s.length; i++) {
		if (s[i] in substringMap) {
			start = Math.max( start, substringMap[s[i]]);
		}
		longest = Math.max( longest, i - start + 1 );
	}
	return longest;

}
