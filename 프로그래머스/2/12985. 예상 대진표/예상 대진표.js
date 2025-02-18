function solution(N, A, B) {
    let r = 0;
    while (A !== B) A = (A + 1) >> 1, B = (B + 1) >> 1, r++;
    return r;
}