/**
 * @param {string[]} words
 * @return {string}
 */
var longestWord = function (words) {
  let set = new Set();
  for (let word of words) {
    set.add(word);
  }
  let max = '';
  for (let i = 0; i < words.length; i++) {
    if (set.has(words[i])) {
      let k = -1;
      let temp = words[i].slice(0, k);
      let mismatch = false;
      while (temp.length > 0) {
        temp = words[i].slice(0, k)
        if (!set.has(temp)) {
          mismatch = true;
          break;
          
        }
        k--
        //console.log(temp);
      }

     if (words[i].length > max.length && mismatch === false) max = words[i];

    }
  }
  return max;
};

console.log(longestWord(['w', 'wo', 'wor', 'worl', 'world']));
