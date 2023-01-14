function makeLooper(str) {
  const string = str;
  const length = str.length;
  var index = 0;

  return function () {
    if (index < length) {
      let result = string[index];
      index++;
      return result;
    } else {
      index = 0;
      let result = string[index];
      index++;
      return result;
    }
  };
}

const abcLooper = makeLooper('abc');

console.log(abcLooper());
console.log(abcLooper());
console.log(abcLooper());
