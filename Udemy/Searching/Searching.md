# Searching

- linear search
- binary search
- naive string seraching algorithm
- kmp string searching algorithm

### linear search
하나씩 순회하며 확인한다.(정렬되지 않은 배열일 때 유리하다.)
- indexOf
- includes
- find
- findIndex


### binarySearch
```js
function binarySearch(arr, elem) {
  let start = 0;
  let end = arr.length - 1;
  let middle = Math.floor((start + end) / 2);


  while (arr[middle] !== elem && start <= end) {
    if (elem < arr[middle]) end = middle - 1;
    else start = middle + 1;
    middle = Math.floor((start + end) / 2);
  }
  return arr[middle == elem] ? middle : -1;  
}
```
