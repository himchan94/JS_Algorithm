// 떡볶이 떡 자르기

// 떡의 개수(N)와 요청한 떡의 길이(M)를 입력
let n = 4;
let m = 6;
let arr = [19, 15, 10, 17]; // 각 떡의 개별 높이 정보
// 이진 탐색을 위한 시작점(start)과 끝점(end) 설정
let start = 0;
let end = arr.reduce((a, b) => Math.max(a, b));
// 이진 탐색 수행(반복적)
let result = 0;
while (start <= end) {
  let mid = parseInt((start + end) / 2); // 현재의 중간점
  let total = 0;
  for (x of arr) {
    if (x > mid) total += x - mid; // mid로 잘랐을 때 얻을 수 있는 떡의 양 계산
  }
  if (total < m)
    end = mid - 1; // 떡의 양이 부족한 경우 더 많이 자르기(왼쪽 부분 탐색)
  else {
    // 떡의 양이 충분한 경우 덜 자르기(오른쪽 부분 탐색)
    result = mid; // 최대한 덜 잘랐을 때가 정답이므로, result 기록
    start = mid + 1;
  }
}
console.log(result);
