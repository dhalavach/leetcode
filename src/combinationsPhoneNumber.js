function letterCombinations(digits) {
  const res = [];
  const dict = {
    2: ['a', 'b', 'c'],
    3: ['d', 'e', 'f'],
    4: ['g', 'h', 'i'],
    5: ['j', 'k', 'l'],
    6: ['m', 'n', 'o'],
    7: ['p', 'q', 'r', 's'],
    8: ['t', 'u', 'v'],
    9: ['w', 'x', 'y', 'z'],
  };

  if (digits.length === 1) return dict[Number(digits[0])];

  for (let k = 0; k < digits.length - 2; k++) {
    for (let i = 0; i < dict[Number(digits[k])].length; i++) {
      for (let j = 0; j < dict[Number(digits[k + 1])].length; j++) {
        for (let n = 0; n < dict[Number(digits[k + 2])].length; n++) {
          res.push(
            dict[Number(digits[k])][i] +
              dict[Number(digits[k + 1])][j] +
              dict[Number(digits[k + 2])][n]
          );
        }
      }
    }
  }
  return res;
}

console.log(letterCombinations('234'));
