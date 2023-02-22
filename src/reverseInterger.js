function reverse1(x) {
  const k = x < 0 ? -1 : 1;
  const n = Number(Math.abs(x).toString().split('').reverse().join(''));
  return n > 2 ** 31 - 1 ? 0 : k * n;
}

function reverse2(x) {
  function rev(num) {
    return Number(num.toString().split('').reverse().join(''));
  }

  function revNeg(num) {
    return -Number(num.toString().slice(1).split('').reverse().join(''));
  }

  let n = x < 0 ? revNeg(x) : rev(x);

  if (n < (-2) ** 31 || n > 2 ** 31 - 1) return 0;
  return n;
}
