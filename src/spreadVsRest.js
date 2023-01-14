function sum(...args) {
  return args.reduce((a, b) => a + b, 0);
}

const arr = [1, 2, 4, 6, 2];

console.log(sum(...arr));
// console.log(sum.apply(null, arr));
// const testArr = Array.prototype.concat.apply([], arr);
// console.log(sum(testArr));
// console.log(sum(arr));
