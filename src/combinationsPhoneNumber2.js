const  letterCombinations = (digits) => {
  const res = [];
  const hash = {
    2: ['a', 'b', 'c'],
    3: ['d', 'e', 'f'],
    4: ['g', 'h', 'i'],
    5: ['j', 'k', 'l'],
    6: ['m', 'n', 'o'],
    7: ['p', 'q', 'r', 's'],
    8: ['t', 'u', 'v'],
    9: ['w', 'x', 'y', 'z'],
  };

  if (digits.length === 1) return hash[Number(digits[0])];

  const getCombinations = (str, i) => {
    if (i === digits.length) {
      res.push(str);
      return;
    }
    for (let key of hash[digits[i]]) {
      getCombinations(str + key, i + 1);
    }
  };

  getCombinations('', 0);

  return res;
}

console.log(letterCombinations('23'));
