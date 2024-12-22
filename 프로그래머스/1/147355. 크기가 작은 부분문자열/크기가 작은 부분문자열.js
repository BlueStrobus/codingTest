function solution(t, p) {
  let count = 0;
  const pNum = +p;
  const pLen = p.length;

  for (let i = 0, len = t.length - pLen + 1; i < len; i++) {
      if (+t.slice(i, i + pLen) <= pNum) count++;
  }

  return count;
}
