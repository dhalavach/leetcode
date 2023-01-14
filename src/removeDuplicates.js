function removeDuplicate(s) {
  let str = s.split('');
  let index = 0;

  for (let i = 0; i < str.length; i++) {
    let j;
    for (j = 0; j < i; j++) {
      if (str[i] == str[j]) {
        break;
      }
    }

    if (j == i) {
      str[index++] = str[i];
    }
  }

  return str.join('').slice(str, index);
}

console.log(removeDuplicate('leeeeeeeeeeeetcode'));
