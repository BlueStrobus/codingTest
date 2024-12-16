function solution(price, money, count) {
  let pay = ((count * (count + 1)) / 2) * price;
  return Math.max(pay - money, 0);
}