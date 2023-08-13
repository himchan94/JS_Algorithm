# Sorting

### builtin sort

```js
array.sort();
```

- If it returns a negative number, a should come before b
- If it returns a positive number, a should come after b
- If it returns 0, a and b are the same as far as the sort is concerned.

```js
function numberCompare(num1, num2) {
  console.log("num1", num1, "num2", num2);
  return num1 - num2;
}

[6, 4, 15, 10].sort(numberCompare);
// [4, 6, 10, 15]
```

### bubble sort

- bubble sort is not commonly used.
- bubble sort is not effective.
- 다른 알고리즘이 왜 버블정렬보다 좋은지 이해하기 좋다.

- How to swap? 스왑하는 방법

```js
//ES5
function swap(arr, idx1, idx2) {
  var temp = arr[idx1];
  arr[idx1] = arr[idx2];
  arr[idx2] = temp;
}

// ES2015
const swap = (arr, idx1, idx2) => {
  [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
};
```

- BubbleSort Pseudocode

1. Start looping from with a variable called i the end of the array towards the beginning.
2. Start an innter loop with a variable called j from the beginning until i - 1;
3. If arr[j] is greater than arr[j+1], swap those two values
4. Return the sorted array.

- 버블정렬의 빅오는 보통 O(N^2)이지만, 최적화가 되어있고, 거의 정렬된 배열임을 알고있다면 O(N)이 될 수도 있다.

### selection sort(선택정렬)

- Similar to bubble sort, but insted of first placing large values into sorted position, it places small values into sorted position.

- 최솟값을 찾아 마지막에 맨 앞에 둔다.

- Selection Sort Pseudocode

1. Store the first element as the smallest value you've seen so far.
2. Compare this item to the next item in the array until you find a smaller number.
3. If a smaller number is found, designate that smaller number to be the new "minimum" and continueuntil the end of the array.
4. If the "minimum" is not the value (index) you initially began with, swap the two values.

- O(N^2)

* 버블정렬은 매 번 swap하지만, 선택정렬은 마지막 한 번만 swap한다.

### insertion sort

- Start by picking the second element in the array
- Now compare the second element with the one before it ans swap if necessary.
- Continue to the next element and if it is in the incorrect order, iterate through the sorted portion(i, e the left side) to place the element in the correct place.

- 어떤 값이 들어오더라도 정렬된다(online algorithm)

### Big O of Sorting Algorithms

| Algorithm      | Time Complexity(Best) | TimeComplexity(Average) | Time Complexity(Worst) | Space Complexity |
| -------------- | --------------------- | ----------------------- | ---------------------- | ---------------- |
| Bubble Sort    | O(n)                  | O(n^2)                  | O(n^2)                 | O(1)             |
| Insertion Sort | O(n)                  | O(n^2)                  | O(n^2)                 | O(1)             |
| Selection Sort | O(n^2)                | O(n^2)                  | O(n^2)                 | O(1)             |

### Recap

- Sorting is fundamental
- Bubble sort, selection sort, and insertion sort are all roughly equivalent.
- All have average time complexities that are quadratic
