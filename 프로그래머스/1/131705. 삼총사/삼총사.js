function solution(number) {
    // 학생 1,2,3의 번호 합이 0이 되야함
    let count = 0;
    number.forEach((v1, i) => {
        for (let j = i + 1; j < number.length; j++) {
            // 학생1  = i
            for (let k = j + 1; k < number.length; k++) {
                if (v1 + number[j] + number[k] === 0) {
                    // console.log(v1, " ", number[j], " ", number[k]);
                    count++;
                }
            }
        }
    });
    return count;
}