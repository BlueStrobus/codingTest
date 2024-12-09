function solution(s) {
    var answer = '';
    let arr = s.split(''); 
    let length = arr.length;
    let halfN = Math.floor(length / 2); 

    if (length % 2 === 0) {
        // 짝수일 때
        answer = arr[halfN - 1] + arr[halfN]; // 가운데 두 글자
    } else {
        // 홀수일 때
        answer = arr[halfN]; // 가운데 한 글자
    }
    return answer;
}
