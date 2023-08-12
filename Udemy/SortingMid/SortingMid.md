### Sorting Mid

- 빠르다.
- Fast O(n^2) -> O(n log n);

```js
var data = Array.apply(null, { length: 10000 }).map(Function.call, Math.random);

bubbleSort(data);
```

### Merge Sort

- combination of merging and sorting.
- Exploits the fact that arrays of 0 or 1 element are always sorted.
- Works bt decomposing an array into smaller arrays of 0 or 1 elements

1. Merging Arrays

- in order to implement merge sort, it's useful to first implement a function responsible for merging two sorted arrays
- Given two arrays which are sorted, this helper function should create a new array which is also sorted, and consists of all of the elements in the two input arrays.
- This function should run in O(n + m) time and O(n + m) space and should not modify the parameters passed to it.

mergeSort Pseudocode

- Break up the array into halves until you have arrays that are empty or have one element
- Once you have smaller sorted arrays, merge those arrays with other sorted arrays until you are back at the full length of the array
- One the array has been merged back together, return the merged (and sorted!) arrray

2. QuickSort

```js
let arr = [5, 2, 1, 8, 4, 7, 6, 3];
pivot(arr); // 4;

arr;
// any one of these is an acceptable mutation:
// [2,1,4,3,5,8,7,6]
```
