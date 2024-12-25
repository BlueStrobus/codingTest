let numE = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];

function solution(s) {
    let arrNew = [];
    let temp = "";

    for (let char of s) {
        if (!isNaN(char)) {
            // 숫자인 경우
            arrNew.push(Number(char));
        } else {
            // 숫자가 아닌 경우
            temp += char; // 임시로 문자를 누적
            let index = numE.indexOf(temp); // `numE` 배열에서 검색
            if (index !== -1) {
                // 단어가 완성되었을 경우
                arrNew.push(index);
                temp = ""; // 누적 초기화
            }
        }
    }

    return Number(arrNew.join(""));
}

console.log(solution("4fourfive5six79"));
