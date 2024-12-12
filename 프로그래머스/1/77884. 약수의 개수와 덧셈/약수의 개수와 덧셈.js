
function solution(left, right) {
    let answer = 0;
    for (let n = left; n <= right; n++) {
        let arrD = [];
        for (let i = 1; i <= Math.sqrt(n); i++) {
            if (n % i === 0) {
                arrD.push(i);
                if (n / i != i) arrD.push(n / i);
            }
        }
        arrD.length % 2 ? (answer -= n) : (answer += n);
    }
    return answer;
}