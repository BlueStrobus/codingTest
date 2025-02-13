function solution(s) {
    let ans = [0, 0];

    while (s !== "1") {
        let oldLen = s.length;
        s = s.replace(/0/g, "");
        let newLen = s.length;

        ans[1] += oldLen - newLen;
        s = newLen.toString(2);
        ans[0]++;
    }

    return ans;
}
