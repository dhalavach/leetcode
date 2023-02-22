/**
 * @param {string} s
 * @return {string}
 */
var decodeString = function (s) {
  let stack = [];

  let bracketsCounter = 0;
  let j;

  for (let i = s.length - 1; i >= 0; i--) {
    while (s[i] !== '[' && s[i] !== ']' && isNaN(Number(s[i]))) {
      stack.push(s[i]);
      i--;
    }
    if (s[i] === ']') {
      bracketsCounter++;
      j = i - 1;

      while (bracketsCounter > 0) {
        //if (s[j] === '[') bracketsCounter--;
        if (s[j] === '[') {
          stack.push(s.slice(j + 1, i));
          bracketsCounter--;
        }
        if (s[j] === ']') bracketsCounter++;
        j--;
      }
      let k = s[j];
      while (k > 1) {
        stack.push(s.slice(j + 1, i));
        k--;
      }
    }
  }

  let res = '';
  while (stack.length > 0) {
    res += stack.pop();
  }

  return res;
};

console.log(decodeString('3[a]2[bc]')); // expected: aaabcbc
console.log(decodeString('2[abc]3[cd]ef')); // expected: abcabccdcdcdef
console.log(decodeString('3[a2[c]]')); // expected: "accaccacc"
