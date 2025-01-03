function solution(food) {
    let arrTemp1 = "";
    let arrTemp2 = [];

    food.forEach((n, i) => {
        if (i !== 0) {
            arrTemp1 += `${i}`.repeat(Math.floor(+n / 2));
        }
    });
    arrTemp2 = arrTemp1 + "0" + [...arrTemp1].reverse().join("");
    
    return arrTemp2;
}
