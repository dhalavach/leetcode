function getHint(secret, guess) {
  let bullCounter = 0;
  let cowCounter = 0;
  let numbers = [];

  for (let i = 0; i < guess.length; i++) {
    
    let s = secret.charCodeAt(i);
    let g = guess.charCodeAt(i);
    if (s === g) bullCounter++
    else {
      if (numbers[s] < 0) cowCounter++;
      if (numbers[g] > 0) cowCounter++;
      numbers[s]++;
      numbers[g]--;
    }
  }

  return `${bullCounter}A${cowCounter}B`;
}

const secret = '1807';
const guess = '7810';

const secret2 = '1123';
const guess2 = '0111';

console.log(getHint(secret, guess));
//console.log(getHint(secret2, guess2));