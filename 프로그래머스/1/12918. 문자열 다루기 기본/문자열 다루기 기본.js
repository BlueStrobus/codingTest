function solution(s) {
    // 문자열 길이 확인
    if (s.length !== 4 && s.length !== 6) {
        return false;
    }

    // 문자열의 각 문자가 숫자인지 확인
    // 공백 예외처리 추가
    for (let i = 0; i < s.length; i++) {
        if (isNaN(Number(s[i])) || s[i] === ' ') {
            return false;
        }
    }
    return true;
}
