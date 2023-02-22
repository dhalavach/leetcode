/**
 * @param {string[]} words
 * @param {number} k
 * @return {string[]}
 */
var topKFrequent = function (words, k) {
  const hashMap = new Map();
  const result = [];
  for (let word of words) {
    if (hashMap.has(word)) hashMap.set(word, hashMap.get(word) + 1);
    else hashMap.set(word, 1);
  }

  let sorted = [...hashMap.entries()].sort((a, b) => {
    if (b[1] - a[1] !== 0) return b[1] - a[1];
    else return b[0] - a[0]
  });
  console.log(sorted);
  for (let i = 0; i <= k - 1; i++) {
    result.push(sorted[i][0]);
  }

  return result;
};

const test1 = [
  'the',
  'day',
  'is',
  'sunny',
  'the',
  'the',
  'the',
  'sunny',
  'is',
  'is',
];
console.log(topKFrequent(test1, 4));
