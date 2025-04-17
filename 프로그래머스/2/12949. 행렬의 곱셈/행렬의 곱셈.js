function solution(arr1, arr2) {
    return arr1.map((row, i) =>
        arr2[0].map((_, j) =>
            row.reduce((sum, val, k) => sum + val * arr2[k][j], 0)
        )
    );
}