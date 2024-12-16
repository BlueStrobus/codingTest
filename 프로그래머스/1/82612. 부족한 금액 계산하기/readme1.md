# [level 1] 부족한 금액 계산하기 - 82612

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

---

## 풀이 과정

### 접근 방법

1. **n번째 이용 요금**
   \[price\*n\]

2. **총 비용 계산**  
   놀이기구를 `count`번 이용할 때 필요한 총 비용은 다음과 같이 계산할 수 있습니다.

   ```javascript
   for (let i = 0; i < count; i++) {
     pay += price * i;
   }
   ```

3. **부족 금액 계산**  
   현재 금액 `money`와 비교하여 부족한 금액을 계산합니다.  
   부족 금액이 음수면 `0`을 반환합니다.

   ```javascript
   let insufficientM = pay - money;
   if (insufficientM > 0) {
     return insufficientM;
   } else {
     return 0;
   }
   ```

4. **답1**
   코드 줄이기
   ```javascript
   function solution(price, money, count) {
     let pay = 0;
     for (let i = 1; i <= count; i++) {
       pay += price * i;
     }
     console.log(pay);
     let insufficientM = pay - money;
     if (insufficientM > 0) {
       return insufficientM;
     } else {
       return 0;
     }
   }
   ```

---

## 최종 코드

```javascript
function solution(price, money, count) {
  // 총 비용 계산
  const totalCost = (price * count * (count + 1)) / 2;

  // 부족 금액 계산 (음수일 경우 0 반환)
  return Math.max(totalCost - money, 0);
}
```

### 성능 최적화 및 분석

1. **효율성**  
   등차수열 공식을 사용하여 연산을 상수 시간(`O(1)`)에 처리합니다.  
   반복문(`for`)을 사용한 풀이보다 빠르고 간결합니다.

2. **다른사람 코드 비교**  
   다른 풀이에서는 비용 계산 시 한 번의 연산으로 금액 비교를 끝냅니다.
   속도가 미세하게 빨라집니다.
   ```javascript
   function solution(price, money, count) {
     const tmp = (price * count * (count + 1)) / 2 - money;
     return tmp > 0 ? tmp : 0;
   }
   ```
