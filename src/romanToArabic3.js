/**
 * @param {string} s
 * @return {number}
 */
function romanToInt(s) {
  const map = new Map();
  map.set('I', 1);
  map.set('V', 5);
  map.set('X', 10);
  map.set('L', 50);
  map.set('C', 100);
  map.set('D', 500);
  map.set('M', 1000);

  const numString = s
    .replace(/IV/gi, 'IIII')
    .replace(/IX/gi, 'VIIII')
    .replace(/XL/gi, 'XXXX')
    .replace(/XC/gi, 'LXXXX')
    .replace(/CD/gi, 'CCCC')
    .replace(/CM/gi, 'DCCCC');

  return numString.split('').reduce((prev, curr) => prev + map.get(curr), 0);

  return res;
}
