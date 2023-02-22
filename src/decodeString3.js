//recursive implementation

function decodeString(s) {
  const queue = [];
  for (let i = 0; i < s.length; i++) {
    queue.push(s[i]);
  }

  return helper(queue);

  function helper(queue) {
    let str = '';
    let n = 0;

    while (queue.length > 0) {
      let c = queue.shift();
      if (!isNaN(Number(c))) {
        n = n * 10 + (c - '0'); //hack to read unknown number of integers
      } else if (c === '[') {
        let sub = helper(queue);
        for (let j = 0; j < n; j++) {
          str += sub;
        }
        n = 0;
      } else if (c === ']') {
        break;
      } else {
        str += c;
      }
    }

    return str;
  }
}

console.log(decodeString('3[a]2[bc]')); // expected: aaabcbc
console.log(decodeString('2[abc]3[cd]ef')); // expected: abcabccdcdcdef
console.log(decodeString('3[a2[c]]')); // expected: "accaccacc"
