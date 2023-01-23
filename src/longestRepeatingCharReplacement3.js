//this is so cool

function characterReplacement(s, k) {
  let hash = {};
  let res = 0;
  let l = 0;

  for (let r = 0; r < s.length; r++) {
    if (hash[s[r]]) hash[s[r]]++;
    else hash[s[r]] = 1;

    while (r - l + 1 - Math.max(...Object.values(hash)) > k) {
      hash[s[l]]--;
      l++;
    }
    res = Math.max(res, r - l + 1);
  }

  return res;
}

console.log(characterReplacement('abab', 2)); //expected 4
console.log(characterReplacement('abab', 1)); //expected 3
console.log(characterReplacement('AABABBA', 1)); //expected 4
console.log(characterReplacement('AABA', 0)); //expected 2
console.log(characterReplacement('ABAA', 0)); // expected 2
