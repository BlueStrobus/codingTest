function solution(number, limit, power) {
    const getDivisorCount = (n) => {
        let count = 0;
        for (let i = 1; i <= Math.sqrt(n); i++) {
            if (n % i === 0) {
                count += (i === n / i) ? 1 : 2; // 제곱근인 경우 1 추가, 아니면 2 추가
            }
        }
        return count;
    };

    return Array.from({ length: number }, (_, i) => {
        const divisorCount = getDivisorCount(i + 1);
        return divisorCount > limit ? power : divisorCount;
    }).reduce((acc, curr) => acc + curr, 0);
}
