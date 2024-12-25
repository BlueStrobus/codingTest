function solution(strings, n) {
    return strings
        .map((value) => `${value[n]}${value}`)
        .sort()
        .map((str) => str.substring(1));
}