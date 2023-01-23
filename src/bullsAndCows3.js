//works but i do not understand it
/**
 * @param {string} secret
 * @param {string} guess
 * @return {string}
 */
function getHint(secret, guess) {
  var hash = {};
  let bullCounter = 0;
  let cowCounter = 0;
  const secret1 = '18';
  const guess2 = '13';

  for (let i = 0; i < 10; i++) hash[i] = 0;

  for (let i = 0; i < secret.length; i++) {
    if (secret[i] === guess[i]) {
      bullCounter++;
    } else {
      hash[secret[i]]++;
      if (hash[secret[i]] <= 0) cowCounter += 1;
      hash[guess[i]]--;
      if (hash[guess[i]] >= 0) cowCounter += 1;
    }
  }

  return `${bullCounter}A${cowCounter}B`;
}
console.log(getHint('184', '148'));
