function solution(array, commands) {
    let arrK = [];
    commands.forEach((c) => {
        let arr = array.slice(c[0] - 1, c[1]).sort((a, b) => a - b);
        arrK.push(arr[c[2] - 1]);
    });
    return arrK;
}