function solution(k, m, score) {
    // 내림차순 정렬
    score.sort((a, b) => b - a);
    let sumCost = 0;

    // m개씩 묶어서 처리
    for (let i = 0; i + m - 1 < score.length; i += m) {
        sumCost += score[i + m - 1] * m; // m번째로 작은 값 * m
    }

    return sumCost;
}
