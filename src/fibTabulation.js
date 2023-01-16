function fibTab(n) {
  const tab = Array(n + 1).fill(0);
  tab[1] = 1;

  for (let i = 0; i <= n; i++) {
    tab[i + 1] += tab[i];
    tab[i + 2] += tab[i];
  }
  return tab[n];
}

console.log(fibTab(7));
console.log(fibTab(64));
