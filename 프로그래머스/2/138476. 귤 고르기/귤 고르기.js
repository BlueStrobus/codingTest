function solution(k, tangerine) {
    let countMap = new Map();

    // 크기별 개수 세기
    tangerine.forEach(size => {
        countMap.set(size, (countMap.get(size) || 0) + 1);
    });

    // 개수가 많은 순으로 정렬
    let sortedCounts = [...countMap.values()].sort((a, b) => b - a);

    let answer = 0;
    let total = 0;

    // k개를 모을 때까지 반복
    for (let count of sortedCounts) {
        total += count;
        answer++;

        if (total >= k) break;
    }

    return answer;
}
