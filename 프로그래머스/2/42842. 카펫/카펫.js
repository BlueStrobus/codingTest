function solution(brown, yellow) {
    for (let yX = 1; yX <= Math.sqrt(yellow); yX++) {
        if (yellow % yX === 0) {
            let yY = yellow / yX;
            let bX = yY + 2;
            let bY = yX + 2;
            if (brown === 2 * (bX + bY - 2)) {
                return [bX, bY];
            }
        }
    }
}
