function longestPalindrome(string) {
  const freq = new Map();
  for (let char of string) {
    freq.set(char, freq.get(char) + 1 || 1);
  }

  let remainder = 0;

  freq.forEach((count) => (remainder += count % 2));

  return string.length - remainder + !!remainder;
}

console.log(longestPalindrome('aaaa'));
console.log(longestPalindrome('bb'));
console.log(longestPalindrome('abccccdd'));
