var isMatch = function (s, p) {
  let re = new RegExp(p);
  return re.test(s);
};

console.log(isMatch('aa', 'a'));
