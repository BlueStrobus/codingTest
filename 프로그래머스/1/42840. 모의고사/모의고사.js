const guessed1 = [1, 2, 3, 4, 5];
const guessed2 = [2, 1, 2, 3, 2, 4, 2, 5];
const guessed3 = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];

function solution(answers) {
    let score = [0, 0, 0];
    answers.forEach((v, i) => {
        if (v === guessed1[i % guessed1.length]) {
            score[0] += 1;
        }
        if (v === guessed2[i % guessed2.length]) {
            score[1] += 1;
        }
        if (v === guessed3[i % guessed3.length]) {
            score[2] += 1;
        }
    });
    // 배열에서 최대값 찾기
    const maxValue = Math.max(...score);
    // 최대값을 가진 인덱스들을 배열로 반환
    return score.reduce((indices, value, index) => {
        if (value === maxValue) {
            indices.push(index + 1);
        }
        return indices;
    }, []);
}
