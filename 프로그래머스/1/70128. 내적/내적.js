function solution(a, b) {
    var answer = 0;
    a.forEach((value, i) => {
   answer += value * b[i] 
});
    /*arr.forEach((value, index) => {
   console.log(index, value); 
});*/
    
    
    return answer;
}