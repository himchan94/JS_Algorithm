// 퀵 정렬

const arr = [7, 5, 9, 0, 3, 1, 6, 2, 4, 8];

function quickSort(arr, start, end) {
  if (start >= end) return; // 원소가 1개인 경우 종료
  let pivot = start; // 피벗은 첫 번째 원소
  let left = start + 1;
  let right = end;
  while (left <= right) {
    // 피벗보다 큰 데이터를 찾을 때까지 반복
    while (left <= end && arr[left] <= arr[pivot]) left++;
    // 피벗보다 작은 데이터를 찾을 때까지 반복
    while (right > start && arr[right] >= arr[pivot]) right--; // 엇갈렸다면 작은 데이터와 피벗을 교체

    console.log("left", left);
    console.log("right", right);

    if (left > right) [arr[right], arr[pivot]] = [arr[pivot], arr[right]];
    else [arr[left], arr[right]] = [arr[right], arr[left]];

    console.log(arr);
  }

  // console.log(arr);
  // console.log(start, end, right, left);
  // 분할 이후 왼쪽 부분과 오른쪽 부분에서 각각 정렬 수행
  quickSort(arr, start, right - 1);
  quickSort(arr, right + 1, end);
}
quickSort(arr, 0, arr.length - 1);
console.log(arr);
