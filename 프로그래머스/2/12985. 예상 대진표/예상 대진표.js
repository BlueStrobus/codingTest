function solution(N, A, B) {
    let round = 1;
    
    while (A !== B) {
        A = Math.ceil(A / 2);
        B = Math.ceil(B / 2);
        round++;
    }
    
    return round - 1;
}
