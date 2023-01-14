function isIsomorphic(s, t) {
  if (s.length !== t.length) return false;

  function transform(string) {
    const dict = {};
    let res = '';
    for (let i = 0; i < string.length; i++) {
      if (string[i] in dict) res += dict[string[i]] + '*';
      dict[string[i]] = i;
      res += dict[string[i]] + '*';
    }
    return res;
  }

  //console.log('transS: ' + transform(s), 'transT: ' + transform(t));
  return transform(s) === transform(t);
}

console.log(isIsomorphic('egg', 'add'));
console.log(isIsomorphic('foo', 'bar'));
console.log(isIsomorphic('paper', 'title'));
console.log(isIsomorphic('badc', 'baba'));
