function longestPalindrome(string) {
  if (string.length == 1) return 1;
  let counter = 0;
  let arr = string.split('').sort();

  let i = 0;
  while (i < arr.length) {
    if (arr[i] === arr[i + 1]) {
      counter++;
      i += 2;
    } else {
      i += 1;
    }
  }

  if (string.length > counter * 2) return counter * 2 + 1;
  return counter * 2;
}

console.log(longestPalindrome('aaaa'));
console.log(longestPalindrome('bb'));
console.log(longestPalindrome('abccccdd'));
