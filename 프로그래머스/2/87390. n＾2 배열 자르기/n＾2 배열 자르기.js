const solution = (n, left, right) => {
    let answer = [];

    for (let k = left; k <= right; k++) {
        const [iK, jK] = [Math.floor(k / n) + 1, (k % n) + 1];
        if (iK >= jK) {
            answer.push(iK);
        } else {
            answer.push(jK);
        }
    }
    return answer;
};