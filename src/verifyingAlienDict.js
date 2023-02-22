/**
 * @param {string[]} words
 * @param {string} order
 * @return {boolean}
 */
var isAlienSorted = function (words, order) {
  function customSort(a, b) {
    for (let i = 0; i < Math.min(a.length, b.length); i++) {
      if (a[i] !== b[i]) {
        return order.indexOf(a[i]) - order.indexOf(b[i]);
      }
    }
    if (a.length < b.length) return -1;
    if (a.length > b.length) return 1;
    return 0;
  }

  for (let i = 0; i < words.length - 1; i++) {
    if (customSort(words[i], words[i + 1]) > 0) return false;
  }
  return true;
};

console.log(isAlienSorted(['apple', 'app'], 'abcdefghijklmnopqrstuvwxyz'));
