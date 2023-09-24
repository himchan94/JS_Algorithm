// 계수정렬

// 모든 원소의 값이 0보다 크거나 같다고 가정
let arr = [7, 5, 9, 0, 3, 1, 6, 2, 9, 1, 4, 8, 0, 5, 2];
// 모든 범위를 포함하는 리스트 선언(모든 값은 0으로 초기화)
let maxValue = arr.reduce((a, b) => Math.max(a, b));
let cnt = Array(maxValue + 1).fill(0);
for (let i = 0; i < arr.length; i++) {
  cnt[arr[i]]++; // 각 데이터에 해당하는 인덱스의 값 증가
}
// 리스트에 기록된 정렬된 정보 확인
answer = "";
for (let i = 0; i < cnt.length; i++) {
  // 띄어쓰기를 구분으로 등장한 횟수만큼 인덱스 출력
  for (let j = 0; j < cnt[i]; j++) {
    answer += i + " ";
  }
}
console.log(answer);
