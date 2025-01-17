function solution(number, limit, power) {
    let divisorCount = [];
    for (let i = 1; i <= number; i++) {
        // i의 약수 개수
        let count = 0; // 약수 개수
        for (let j = 1; j <= Math.sqrt(i); j++) {
            if (i % j === 0) {
                count++; // j가 약수인 경우
                if (j !== i / j) {
                    count++; // 대칭되는 약수 추가
                }
            }
        }
        divisorCount.push(count);
    }
    divisorCount = divisorCount.map((num) => (num > limit ? power : num));
    let sum = divisorCount.reduce((acc, curr) => acc + curr, 0);
    return sum;
}
