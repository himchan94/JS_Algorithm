// 삽입정렬

// 처리되지 않은 데이터를 하나씩 골라 적절한 위치에 삽입
// 선택 정렬에 비해 구현 난이도가 높은 편이지만, 일반적으로 더 효율적으로 동작한다.
// 시간복잡도는 일반적으로 N^2이지만, 현재 리스트의 데이터가 거의 정렬되어 있는 상태라년 N으로 동작한다.

const arr = [7, 5, 9, 0, 3, 1, 6, 2, 4, 8];

for (let i = 1; i < arr.length; i++) {
  for (let j = i; j > 0; j--) {
    if (arr[j] < arr[j - 1]) {
      let temp = arr[j];
      arr[j] = arr[j - 1];
      arr[j - 1] = temp;
    } else {
      break;
    }
  }
}

console.log(arr);
