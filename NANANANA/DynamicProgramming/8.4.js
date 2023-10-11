// 효율적인 화폐구성

// 정수 N, M을 입력받기
let [n, m] = [2, 15];
let arr = [2, 3]; // N개의 화폐 단위 정보를 입력받기
// 한 번 계산된 결과를 저장하기 위한 DP 테이블 초기화
let d = new Array(m + 1).fill(10001);
// 다이나믹 프로그래밍(Dynamic Programming) 진행(보텀업)
d[0] = 0;
for (let i = 0; i < n; i++) {
  for (let j = arr[i]; j <= m; j++) {
    // (i - k)원을 만드는 방법이 존재하는 경우
    console.log(i, j, d[j - arr[i]]);
    if (d[j - arr[i]] != 10001) {
      d[j] = Math.min(d[j], d[j - arr[i]] + 1);
    }
    console.log(d);
  }
}
// 최종적으로 M원을 만드는 방법이 없는 경우
if (d[m] == 10001) console.log(-1); // 계산된 결과 출력
else console.log(d[m]);
