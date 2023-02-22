function longestPalindrome(s) {
  /**
   * @param {string} s
   * @return {string}
   */

  if (s.length === 1) return 1;

  let left = 0;
  let pal = '';
  let maxPal = '';

  function checkIfPalindrome(str) {
    for (let i = 0; i < str.length / 2; i++) {
      if (str[i] !== str[str.length - 1 - i]) return false;
    }
    return true;
  }

  let i = 0;
  let temp = pal;
  while (checkIfPalindrome((temp += s[i])) === true && i < s.length) {
    pal += s[i];
    temp = pal;
    i++;
  }
  
  while (checkIfPalindrome((temp + s[i])) === false && i < s.length) {
    pal += s[i];
    temp = pal;
    i++;
    //console.log('cycle 2 working...');
  }

  if (pal.length > maxPal.length) maxPal = pal;

  return maxPal;
}

console.log(longestPalindrome('aaSzxcvvcxz'));
