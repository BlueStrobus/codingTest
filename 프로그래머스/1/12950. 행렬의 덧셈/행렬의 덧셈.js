function solution(arr1, arr2) {
  var answer = [];
  arr1.forEach((v, i) => {
    if (typeof v === "number") {
      answer.push(v + arr2[i]);
    } else {
      let arr = [];
      v.forEach((v2, j) => {
        arr.push(v2 + arr2[i][j]);
      });
      answer.push(arr);
    }
  });
  return answer;
}