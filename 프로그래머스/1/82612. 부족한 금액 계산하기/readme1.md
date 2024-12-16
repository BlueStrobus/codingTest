```markdown
# [level 1] 부족한 금액 계산하기 - 82612 

[문제 링크](https://school.programmers.co.kr/learn/courses/30/lessons/82612) 

### 성능 요약

메모리: 33.3 MB, 시간: 0.04 ms

### 구분

코딩테스트 연습 > 위클리 챌린지

### 채점결과

정확성: 100.0<br/>합계: 100.0 / 100.0

### 제출 일자

2024년 12월 16일 09:05:35

### 문제 설명

<p style="user-select: auto !important;">새로 생긴 놀이기구는 인기가 매우 많아 줄이 끊이질 않습니다. 이 놀이기구의 원래 이용료는 price원 인데, 놀이기구를 N 번 째 이용한다면 원래 이용료의 N배를 받기로 하였습니다. 즉, 처음 이용료가 100이었다면 2번째에는 200, 3번째에는 300으로 요금이 인상됩니다.<br style="user-select: auto !important;">
놀이기구를 count번 타게 되면 현재 자신이 가지고 있는 금액에서 얼마가 모자라는지를 return 하도록 solution 함수를 완성하세요.<br style="user-select: auto !important;">
단, 금액이 부족하지 않으면 0을 return 하세요.</p>

<h5 style="user-select: auto !important;">제한사항</h5>

<ul style="user-select: auto !important;">
<li style="user-select: auto !important;">놀이기구의 이용료 price : 1 ≤ price ≤ 2,500, price는 자연수</li>
<li style="user-select: auto !important;">처음 가지고 있던 금액 money : 1 ≤ money ≤ 1,000,000,000, money는 자연수</li>
<li style="user-select: auto !important;">놀이기구의 이용 횟수 count : 1 ≤ count ≤ 2,500, count는 자연수</li>
</ul>

<hr style="user-select: auto !important;">

<h5 style="user-select: auto !important;">입출력 예</h5>
<table class="table" style="user-select: auto !important;">
        <thead style="user-select: auto !important;"><tr style="user-select: auto !important;">
<th style="user-select: auto !important;">price</th>
<th style="user-select: auto !important;">money</th>
<th style="user-select: auto !important;">count</th>
<th style="user-select: auto !important;">result</th>
</tr>
</thead>
        <tbody style="user-select: auto !important;"><tr style="user-select: auto !important;">
<td style="user-select: auto !important;">3</td>
<td style="user-select: auto !important;">20</td>
<td style="user-select: auto !important;">4</td>
<td style="user-select: auto !important;">10</td>
</tr>
</tbody>
      </table>
<h5 style="user-select: auto !important;">입출력 예 설명</h5>

<p style="user-select: auto !important;">입출력 예 #1<br style="user-select: auto !important;">
이용금액이 3인 놀이기구를 4번 타고 싶은 고객이 현재 가진 금액이 20이라면, 총 필요한 놀이기구의 이용 금액은 30 <strong style="user-select: auto !important;">(= 3+6+9+12)</strong> 이 되어 10만큼 부족하므로 10을 return 합니다.</p>

<h3 style="user-select: auto !important;">참고 사항</h3>

<ul style="user-select: auto !important;">
> 출처: 프로그래머스 코딩 테스트 연습, https://school.programmers.co.kr/learn/challenges
---

## 풀이 과정

### 접근 방법
1. **n번째 이용 요금**
   \[price*n\]

1. **총 비용 계산**  
   놀이기구를 `count`번 이용할 때 필요한 총 비용은 다음과 같이 계산할 수 있습니다.
   \[for(let i=0; i<count;i++){
   \pay += price*i
   \}\]
  

2. **부족 금액 계산**  
   현재 금액 `money`와 비교하여 부족한 금액을 계산합니다.  
   부족 금액이 음수면 `0`을 반환합니다.
   \[let insufficientM = pay - money
   \if (insufficientM > 0) {
   \return insufficientM
   \} else{return 0} \]

4. **답1**
   \[function solution(price, money, count) {
   \let pay = 0;
   \for (let i = 1; i <= count; i++) {
   \pay += price * i;
   \}
   \let insufficientM = pay - money;
   \if (insufficientM > 0) {
   \return insufficientM;
   \} else {
   \return 0;
   \}
   \}\]

---

### 최종 코드

```javascript
function solution(price, money, count) {
    // 총 비용 계산
    const totalCost = (price * count * (count + 1)) / 2;

    // 부족 금액 계산 (음수일 경우 0 반환)
    return Math.max(totalCost - money, 0);
}
```

---



## 성능 최적화 및 분석

1. **효율성**  
   등차수열 공식을 사용하여 연산을 상수 시간(`O(1)`)에 처리합니다.  
   반복문(`for`)을 사용한 풀이보다 빠르고 간결합니다.

2. **대안 코드 비교**  
   다른 풀이에서는 비용 계산 시 한 번의 연산으로 금액 비교를 끝냅니다.
   속도가 미세하게 빨라집니다.
   ```javascript
   function solution(price, money, count) {
       const tmp = price * count * (count + 1) / 2 - money;
       return tmp > 0 ? tmp : 0;
   }
   ```

---

### 추가 참고 사항

- 한 줄 풀이를 사용할 경우 코드 가독성이 떨어질 수 있습니다.  
  팀 프로젝트에서는 적절한 변수명을 사용하여 가독성을 유지하는 것이 중요합니다.

---

**작성 일자**: 2024년 12월 16일  
```
