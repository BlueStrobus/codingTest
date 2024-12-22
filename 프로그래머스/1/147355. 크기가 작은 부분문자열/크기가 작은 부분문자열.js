function solution(t, p) {
    let count = 0;
    let pNum = +p; // p를 숫자로 변환

    for (let i = 0; i <= t.length - p.length; i++) {
        let subNum = +t.slice(i, i + p.length); // 부분 문자열을 숫자로 변환
        if (subNum <= pNum) {
            count++;
        }
    }

    return count;
}
