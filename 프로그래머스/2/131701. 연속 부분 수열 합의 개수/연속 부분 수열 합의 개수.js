const solution = (arr) => {
    const sums = new Set();
    const n = arr.length;
    
    // 배열을 2배로 확장하여 원형 처리
    const extended = arr.concat(arr.slice(0, n-1));
    
    // 길이 1부터 n까지 모든 연속 부분 수열의 합 계산
    for (let len = 1; len <= n; len++) {
        for (let i = 0; i < n; i++) {
            sums.add(extended.slice(i, i + len)
                    .reduce((a, b) => a + b));
        }
    }
    
    return sums.size;
};
