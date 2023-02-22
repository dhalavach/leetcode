//optimized

function characterReplacement(s, k) {
  let hash = {};
  let res = 0;
  let l = 0;
  let maxFreq = 0;

  for (let r = 0; r < s.length; r++) {
    if (hash[s[r]]) hash[s[r]]++;
    else hash[s[r]] = 1;
    maxFreq = Math.max(maxFreq, hash[s[r]]);

    while (maxFreq + k < r - l + 1) {
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
