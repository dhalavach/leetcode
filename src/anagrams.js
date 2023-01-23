//first attempt at sliding window

function findAnagrams(s, p) {
  const result = [];

  function compareHashes(h1, h2) {
    if (!h1 || !h2) return false;
    if (h1.length !== h2.length) return false;
    let keys = Object.keys(h1);
    for (let key of keys) {
      if (h1[key] !== h2[key]) return false;
    }
    return true;
  }
  const hash1 = {};
  for (let i = 0; i < p.length; i++) {
    if (p[i] in hash1) hash1[p[i]]++;
     else hash1[p[i]] = 1;
  }

  const hash2 = {};
  for (let j = 0; j < p.length; j++) {
    if (s[j] in hash2) hash2[s[j]]++;
    else hash2[s[j]] = 1;
  }

  if (compareHashes(hash1, hash2)) result.push(0);

  for (let i = 1; i < s.length; i++) {
    let prev = s[i - 1];
    hash2[prev]--;
    let next = s[i + p.length -1];
    if (next in hash2) hash2[next]++;
    else hash2[next] = 1;
    if (compareHashes(hash1, hash2)) result.push(i);
  }

  return result;
}

console.log(findAnagrams('cbaebabacd', 'abc'));
console.log(findAnagrams('abab', 'ab'));
