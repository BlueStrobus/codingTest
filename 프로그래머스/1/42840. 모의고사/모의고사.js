const guessed1 = [1, 2, 3, 4, 5];
const guessed2 = [2, 1, 2, 3, 2, 4, 2, 5];
const guessed3 = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];

function solution(answers) {
    const patterns = [guessed1, guessed2, guessed3];
    const scores = patterns.map(pattern => 
        answers.filter((v, i) => v === pattern[i % pattern.length]).length
    );

    const maxScore = Math.max(...scores);
    return scores.map((score, i) => (score === maxScore ? i + 1 : null)).filter(v => v);
}