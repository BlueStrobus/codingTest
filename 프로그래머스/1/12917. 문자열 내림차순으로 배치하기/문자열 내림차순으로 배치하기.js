function solution(s) {
    let arrS = s.split("");
    arrS.sort((a, b) => (a > b ? -1 : a < b ? 1 : 0));
    return arrS.join('');
}
