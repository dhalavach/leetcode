/**
 * @param {string} s
 * @return {number}
 */

const romanToInt = function (s) {
  const numString = s
    .replace(/IV/gi, '*4*')
    .replace(/IX/gi, '*9*')
    .replace(/XL/gi, '*40*')
    .replace(/XC/gi, '*90*')
    .replace(/CD/gi, '*400*')
    .replace(/CM/gi, '*900*')
    .replace(/M/gi, '*1000*')
    .replace(/D/gi, '*500*')
    .replace(/C/gi, '*100*')
    .replace(/L/gi, '*50*')
    .replace(/X/gi, '*10*')
    .replace(/V/gi, '*5*')
    .replace(/I/gi, '*1*');

  return numString
    .split('*')
    .reduce((prev, curr) => Number(prev) + Number(curr));
};

module.exports = romanToInt;
