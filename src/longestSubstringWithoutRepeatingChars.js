/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  const hash = {};
  let left = 0;
  let right = 0;
  let maxLength = 0;

  while (right < s.length) {
    let r = s[right];
    if (r in hash) hash[r] += 1;
    else hash[r] = 1;

    while (hash[r] > 1) {
      l = s[left];
      hash[l] -= 1;
      left++;
    }

    maxLength = Math.max(maxLength, right - left + 1);
    right++;
  }

  return maxLength;
};

const test = 'tmmzuxt';

console.log(lengthOfLongestSubstring(test));
