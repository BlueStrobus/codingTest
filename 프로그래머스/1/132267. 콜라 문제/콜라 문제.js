let getCola = 0;
function solution(a, b, n) {
    if (n < a) {
        return;
    }
    // 다시 받는 콜라 수량
    let returnC = Math.floor(n / a) * b;
    console.log("returnC : ", returnC);
    // 빈 병
    solution(a, b, (n % a) + returnC);

    getCola += returnC;
    console.log("getCola : ", getCola);
    return getCola;
}
