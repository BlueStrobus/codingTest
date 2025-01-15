function solution(nums) {
    let count = 0;

    // 소수 판별 함수
    function isPrime(num) {
        if (num < 2) return false;
        for (let i = 2; i <= Math.sqrt(num); i++) {
            if (num % i === 0) return false;
        }
        return true;
    }

    const n = nums.length;

    // 3중 for문으로 3개의 숫자 조합 탐색
    for (let i = 0; i < n - 2; i++) {
        for (let j = i + 1; j < n - 1; j++) {
            for (let k = j + 1; k < n; k++) {
                const sum = nums[i] + nums[j] + nums[k];
                if (isPrime(sum)) {
                    count++;
                }
            }
        }
    }

    return count;
}
