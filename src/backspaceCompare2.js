// brute force approach

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */

var backspaceCompare = function (s, t) {
  let i = s.length - 1;
  let j = t.length - 1;

  let skipsS = 0;
  let skipsT = 0;

  while (i >= 0 || j >= 0) {
    while (i >= 0) {
      if (s[i] === '#') {
        skipsS++;
        i--;
      } else if (skipsS > 0) {
        skipsS--;
        i--;
      } else break;
    }
    console.log(i)

    while (j >= 0) {
      if (t[j] === '#') {
        skipsT++;
        j--;
      } else if (skipsT > 0) {
        skipsT--;
        j--;
      } else break;
    }

    //console.log('t skips: ', skipsT);

    if (i >= 0 && j >= 0 && s[i] !== t[j]) return false;

    if (i >= 0 != j >= 0) return false;
    j--;
    i--;
  }

  return true;
};

console.log(backspaceCompare('ab#c', 'ad#c'));
