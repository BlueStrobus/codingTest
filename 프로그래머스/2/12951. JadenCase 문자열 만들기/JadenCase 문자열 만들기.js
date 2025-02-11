function solution(s) {
  return s
    .split(" ")  // 공백 기준으로 단어 분할
    .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())  // 첫 글자는 대문자, 나머지는 소문자로 변환
    .join(" ");  // 다시 문자열로 합치기
}
