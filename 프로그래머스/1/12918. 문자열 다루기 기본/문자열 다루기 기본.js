function solution(s) {
  var re = /^\d{6}$|^\d{4}$/;
  return re.test(s);
}