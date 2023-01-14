function isSubsequence(s, t) {
  if (s === t) return true;
  if (s.length > t.length) return false;

  const TLength = t.length;
  let matchCounter = 0;

  for (let i = 0; i < TLength; i++) {
    if (s[matchCounter] === t[i]) matchCounter++;
  }

  return matchCounter === s.length;
}
