//works but very slow;

function findAnagrams(s, p) {
  const pArr = p.split('').sort();
  let res = [];

  function compareArrays(arr1, arr2) {
    if (!arr1 || !arr2) return false;
    if (arr1.length !== arr2.length) return false;
    for (let i = 0; i < arr1.length; i++) {
      if (arr1[i] !== arr2[i]) return false;
    }
    return true;
  }

  for (let i = 0; i < s.length; i++) {
    let temp = [];
    for (let j = i; j < i + p.length; j++) {
      if (j < s.length) temp.push(s[j]);
    }
    temp.sort();
    if (compareArrays(pArr, temp)) res.push(i);
  }

  return res;
}
