/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function (s) {
  if (!s) return 0;
  let i = s.length - 1;
  while (s[i] === ' ' && i >= 0) {
    i--;
  }
  let count = 0;
  while (s[i] !== ' ' && i >= 0) {
    i--;
    count++;
  }
  return count;
};
