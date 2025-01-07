function solution(k, score) {
    // Math.min(...arr)
    // let index = arr.findIndex(num => num > 25);
    // array.splice(start, deleteCount, item1, item2, ...);
    let ranking = [];
    let result = [];
    score.forEach((v, i) => {
        // 현재 점수를 랭킹 배열에 추가
        ranking.push(v);

        // 랭킹 배열의 길이가 k를 초과하면 최솟값 제거
        if (ranking.length > k) {
            let minIndex = ranking.indexOf(Math.min(...ranking));
            ranking.splice(minIndex, 1);
        }

        // 현재 랭킹 배열의 최솟값을 결과 배열에 추가
        result.push(Math.min(...ranking));
    });
    return result;
}