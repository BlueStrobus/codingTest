function solution(brown, yellow) {
    for (let yX = 1; yX * yX <= yellow; yX++) {
        if (yellow % yX === 0) {
            let bX = yellow / yX + 2, bY = yX + 2;
            if (brown === 2 * (bX + bY - 2)) return [bX, bY];
        }
    }
}
