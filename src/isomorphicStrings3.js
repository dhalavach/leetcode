function isIsomorphic(s, t) {
  if (s.length !== t.length) return false;

  const dict1 = new Map();
  const dict2 = new Map();

  for (let i = 0; i < s.length; i++) {
    dict1.set(s[i], t[i]);
    dict2.set(t[i], s[i]);
  }
  let test1 = '';
  let test2 = '';
  for (let j = 0; j < s.length; j++) {
    test1 += dict1.get(s[j]);
    test2 += dict2.get(t[j]);
  }
  return test1 === t && test2 === s;
}

console.log(isIsomorphic('egg', 'add'));
console.log(isIsomorphic('foo', 'bar'));
console.log(isIsomorphic('paper', 'title'));
console.log(isIsomorphic('badc', 'baba'));
