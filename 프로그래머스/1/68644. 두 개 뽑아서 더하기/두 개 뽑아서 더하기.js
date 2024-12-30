function solution(numbers) {
    let arr1 = [];
    numbers.forEach((v, i) => {
        for (let j = i + 1; j < numbers.length; j++) {
            arr1.push(v + numbers[j]);
        }
    });
    console.log(arr1);
    const arr1Set = new Set(arr1.sort((a, b) => a - b));
    console.log(arr1Set);
    return [...arr1Set];
}
