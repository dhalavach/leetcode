const makeLooper =
  (str, i = 0) =>
  (l = str.length) =>
    str[i++ % l];

const abcLooper = makeLooper('abc');

console.log(abcLooper());
console.log(abcLooper());
console.log(abcLooper());
console.log(abcLooper());
