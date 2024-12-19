function solution(s) {
  // map: 각 요소를 변환하여 새 배열 생성
  let sArr = s.split(" ");
  let sMap = sArr
    .map((ward) => {
      return ward
        .split("")
        .map((v, i) => {
          return i % 2 === 0 ? v.toUpperCase() : v.toLowerCase();
        })
        .join("");
    })
    .join(" ");

  return sMap;
}
