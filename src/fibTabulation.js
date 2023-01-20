function fibTab(n) {
  const tab = Array(n + 1).fill(0);
  tab[1] = 1;

  for (let i = 0; i <= n; i++) {
    tab[i + 1] += tab[i];
    tab[i + 2] += tab[i];
  }
  return tab[n];
}

var fib2 = function(n) {

  let sequence = [0, 1];

  for (let i = 2; i <= n; i++ ) {
      sequence.push(sequence[i-2] + sequence[i-1])
  }
  return sequence[n]
};

console.log(fibTab(7));
console.log(fibTab(64));
