function solution(n) {
    const MOD = 1234567;
    let a = 1, b = 2;

    for (let i = 3; i <= n; i++) {
        let temp = (a + b) % MOD;
        a = b;
        b = temp;
    }

    return n === 1 ? 1 : b;
}
