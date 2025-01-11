function solution(cards1, cards2, goal) {
  let [t1, t2] = [cards1, cards2];
  
  for (let v of goal) {
    if (t1[0] === v) {
      t1.shift(); 
    } else if (t2[0] === v) {
      t2.shift();
    } else {
      return 'No'; 
    }
  }
  
  return 'Yes'; 
}
