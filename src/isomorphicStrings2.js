function isIsomorphic(s, t) {
  if (s.length !== t.length) return false;

  for (let i = 0; i < s.length; i++) {
    let char1 = s[i];
    let char2 = t[i];
    for (let j = 0; j < s.length; j++) {
      if ((s[j] === char1 && t[j] !== char2) || t[j] === char2 && s[j] !== char1) return false;
    }
  }
  return true;
}

// let test = 'badc'
// for (let k = 0; k < test.length; k++) {
//   console.log(test[k])
// }

console.log(isIsomorphic('egg', 'add'));
console.log(isIsomorphic('foo', 'bar'));
console.log(isIsomorphic('paper', 'title'));
console.log(isIsomorphic('badc', 'baba'));
