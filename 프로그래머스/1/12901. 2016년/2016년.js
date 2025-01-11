function solution(a, b) {
    const day2016 = new Date(`${a} ${b}, 2016 3:15:30`);
    const getDay = day2016.getDay();
    console.log(getDay);
    const answer = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];

    return answer[getDay];
}