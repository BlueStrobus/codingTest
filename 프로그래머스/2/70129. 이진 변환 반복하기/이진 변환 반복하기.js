function solution(s) {
    var answer = [0, 0];

    let logicX = (x) => {
        let arrX = [...x];
        let zeroCount = arrX.filter((v) => v === "0").length;
        answer[1] += zeroCount;

        let x2 = arrX.length - zeroCount;
        answer[0]++;
        
        return x2.toString(2);
    };

    while (s.length > 1) {
        s = logicX(s);
    }

    return answer;
}
