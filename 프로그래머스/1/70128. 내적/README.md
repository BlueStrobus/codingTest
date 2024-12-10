# [level 1] 내적 - 70128 

[문제 링크](https://school.programmers.co.kr/learn/courses/30/lessons/70128) 

### 성능 요약

메모리: 33.4 MB, 시간: 0.09 ms

### 구분

코딩테스트 연습 > 월간 코드 챌린지 시즌1

### 채점결과

정확성: 100.0<br/>합계: 100.0 / 100.0

### 제출 일자

2024년 12월 11일 08:51:30

### 문제 설명

<p style="user-select: auto !important;">길이가 같은 두 1차원 정수 배열 a, b가 매개변수로 주어집니다. a와 b의 <a href="https://en.wikipedia.org/wiki/Dot_product" target="_blank" rel="noopener" style="user-select: auto !important;">내적</a>을 return 하도록 solution 함수를 완성해주세요.</p>

<p style="user-select: auto !important;">이때, a와 b의 내적은 <code style="user-select: auto !important;">a[0]*b[0] + a[1]*b[1] + ... + a[n-1]*b[n-1]</code> 입니다. (n은 a, b의 길이)</p>

<hr style="user-select: auto !important;">

<h5 style="user-select: auto !important;">제한사항</h5>

<ul style="user-select: auto !important;">
<li style="user-select: auto !important;">a, b의 길이는 1 이상 1,000 이하입니다.</li>
<li style="user-select: auto !important;">a, b의 모든 수는 -1,000 이상 1,000 이하입니다.</li>
</ul>

<hr style="user-select: auto !important;">

<h5 style="user-select: auto !important;">입출력 예</h5>
<table class="table" style="user-select: auto !important;">
        <thead style="user-select: auto !important;"><tr style="user-select: auto !important;">
<th style="user-select: auto !important;">a</th>
<th style="user-select: auto !important;">b</th>
<th style="user-select: auto !important;">result</th>
</tr>
</thead>
        <tbody style="user-select: auto !important;"><tr style="user-select: auto !important;">
<td style="user-select: auto !important;"><code style="user-select: auto !important;">[1,2,3,4]</code></td>
<td style="user-select: auto !important;"><code style="user-select: auto !important;">[-3,-1,0,2]</code></td>
<td style="user-select: auto !important;">3</td>
</tr>
<tr style="user-select: auto !important;">
<td style="user-select: auto !important;"><code style="user-select: auto !important;">[-1,0,1]</code></td>
<td style="user-select: auto !important;"><code style="user-select: auto !important;">[1,0,-1]</code></td>
<td style="user-select: auto !important;">-2</td>
</tr>
</tbody>
      </table>
<hr style="user-select: auto !important;">

<h5 style="user-select: auto !important;">입출력 예 설명</h5>

<p style="user-select: auto !important;">입출력 예 #1</p>

<ul style="user-select: auto !important;">
<li style="user-select: auto !important;">a와 b의 내적은 <code style="user-select: auto !important;">1*(-3) + 2*(-1) + 3*0 + 4*2 = 3</code> 입니다.</li>
</ul>

<p style="user-select: auto !important;">입출력 예 #2</p>

<ul style="user-select: auto !important;">
<li style="user-select: auto !important;">a와 b의 내적은 <code style="user-select: auto !important;">(-1)*1 + 0*0 + 1*(-1) = -2</code> 입니다.</li>
</ul>


> 출처: 프로그래머스 코딩 테스트 연습, https://school.programmers.co.kr/learn/challenges