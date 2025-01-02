function solution(s) {
    let arrAnswer = [];
    let lastIndexMap = {}; // 문자의 마지막 등장 위치를 저장

    [...s].forEach((char, idx) => {
        if (lastIndexMap[char] !== undefined) {
            arrAnswer.push(idx - lastIndexMap[char]); // 현재 인덱스 - 마지막 등장 인덱스
        } else {
            arrAnswer.push(-1); // 처음 등장하는 경우
        }
        lastIndexMap[char] = idx; // 마지막 등장 위치 갱신
    });

    console.log(lastIndexMap);
    return arrAnswer;
}