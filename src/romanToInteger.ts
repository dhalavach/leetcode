function romanToInt(s: string): number {

  const romanNumerals = 'IVXLDCM'
  for (let c of s) {
  if (!romanNumerals.includes(c)) throw new Error ('Invalid input!')
  }

  let res = 0;
  let prev = 0;

  function parseNumFromRoman(char: string): number | undefined {
    switch (char) {
      case 'I':
        return 1;
      case 'V':
        return 5;
      case 'X':
        return 10;
      case 'L':
        return 50;
      case 'C':
        return 100;
      case 'D':
        return 500;
      case 'M':
        return 1000;
      default:
        return undefined;
          }

  }

  for (let i = s.length - 1; i >= 0; i--) {
    let num = parseNumFromRoman(s[i]) as number;

    if (num < prev) {
      res -= num;
    } else {
      res += num;
    }
    prev = num;
  }
  return res;
}

module.exports = romanToInt;