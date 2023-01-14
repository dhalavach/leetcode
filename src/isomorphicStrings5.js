function isIsomorphic(s, t) {
  if (s.length !== t.length) return false;

  const map1 = [];
  const map2 = [];

  for (let i = 0; i < s.length; i++) {
    if (map1[s.charAt(i)] !== map2[t.charAt(i)]) return false;

    map1[s.charAt(i)] = i;
    map2[t.charAt(i)] = i;
  }
  return true;
}

console.log(isIsomorphic('egg', 'add'));
console.log(isIsomorphic('foo', 'bar'));
console.log(isIsomorphic('paper', 'title'));
console.log(isIsomorphic('badc', 'baba'));
