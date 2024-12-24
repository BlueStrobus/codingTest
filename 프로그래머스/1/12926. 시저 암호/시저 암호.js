
function solution(s, n) {
    let answer = [...s].map((element) => {
        if (element === " ") return " "; // 공백은 그대로 반환
        let charCode = element.charCodeAt(); // 문자 -> 아스키코드드

        // 소문자 처리
        if (charCode >= 97 && charCode <= 122) {
            return String.fromCharCode(((charCode - 97 + n) % 26) + 97);
        }
        // 대문자 처리
        if (charCode >= 65 && charCode <= 90) {
            return String.fromCharCode(((charCode - 65 + n) % 26) + 65);
        }
        return element; // 알파벳이 아닌 경우 그대로 반환
    });

    return answer.join(""); // 배열을 문자열로 결합
}
