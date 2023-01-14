//console.log(JSON.stringify('-'.repeat(1e4)));

function test1(a, b, d, ...rest) {
  return JSON.stringify(test1.arguments);
}

function test2(a, b, c, ...rest) {
  return test2.arguments[0];
}

const str = '-'.repeat(1e4);

// console.log(test1(str) === test2(str));
// console.log(test1(str));

// function memo(fn) {
//   const cache = {};
//   return function func(...args) {
//     const key = Array.from(func.arguments).join(-);

//     if (cache.hasOwnProperty(key)) return cache[key];
//     const y = fn(...args);
//     cache[key] = y;
//     return y;
//   };
// }

console.log(str);
