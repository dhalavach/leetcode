// /**
//  * @param {string} s
//  * @param {number} numRows
//  * @return {string}
//  */
// var convert = function (s, numRows) {
//   let arr = [];

//   let k = Math.ceil(s.length / numRows)
//   for (let i = 0; i < s.length; i+=k) {
//     let temp = [];
//     let j = 0;
//     while (j < k && i + j < s.length) {
//       temp.push(s[i + j ]);
//       j++;
//     }
    
//     arr.push(temp);
//   }
//   return arr;
// };
// console.log(convert('PAYPALISHIRING', 3)); //expected: "PAHNAPLSIIGYIR"

