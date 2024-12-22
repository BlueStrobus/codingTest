function solution(sizes) {
    sizes = sizes.map((v) => {
        if (v[0] < v[1]) {
            let tempW = v[0];
            v[0] = v[1];
            v[1] = tempW;
        }
        return v; // 수정된 배열 반환
    });
    console.log(sizes);
    let mW = 0;
    let mH = 0;
    sizes.forEach((vMax) => {
        vMax[0] > mW ? (mW = vMax[0]) : (mW = mW);
        vMax[1] > mH ? (mH = vMax[1]) : (mH = mH);
    });
    console.log("w : ", mW);
    console.log("h : ", mH);
    return mW * mH;
}
