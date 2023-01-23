function getHint(secret, guess) {
  let hash = new Map();
  let bullCounter = 0;
  let cowCounter = 0;

  secret
    .toString()
    .split('')
    .map((el, i) => hash.set(el, i));

  for (let i = 0; i < guess.length; i++) {
    if (hash.has(guess[i]) && i === hash.get(guess[i])) bullCounter++;
    if (hash.has(guess[i]) && i !== hash.get(guess[i])) cowCounter++;
  }

  return `${bullCounter}A${cowCounter}B`;
}

const secret = '1807';
const guess = '7810';

const secret2 = '1123';
const guess2 = '0111';

console.log(getHint(secret, guess));
console.log(getHint(secret2, guess2));
