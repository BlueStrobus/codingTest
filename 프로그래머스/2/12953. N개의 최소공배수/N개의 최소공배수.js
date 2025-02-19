function solution(arr) {
    return arr.reduce((a, b) => (a * b) / gcd(a, b));
}

function gcd(a, b) {
    return b ? gcd(b, a % b) : a;
}
