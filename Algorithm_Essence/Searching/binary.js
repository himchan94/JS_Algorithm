// binarySearch([1,2,3,4,5],2) // 1

// const binarySearch = (arr, target) => {
//   let mid, leftPos = 0, rightPos = arr.length - 1;

//   while (leftPos < rightPos) {
//     if (Math.abs(leftPos - rightPos) === 1) return -1;

//     mid = Math.floor((leftPos + rightPos) / 2);
//     if (arr[mid] === target) return mid;

//     if (arr[mid] > target) { rightPos = mid; };

//     if (arr[mid] < target) { leftPos = mid; };

//   }

// }

// console.log(binarySearch([1,2,3,4,5],2))
// console.log(binarySearch([5, 6, 10, 13, 14, 18, 30, 34, 35, 37, 40, 44, 64, 79, 84, 86, 95, 96, 98, 99], 10))

// solution

function binarySearch(arr, elem) {
  let start = 0;
  let end = arr.length - 1;
  let middle = Math.floor((start + end) / 2);

  while (arr[middle] !== elem && start <= end) {
    if (elem < arr[middle]) end = middle - 1;
    else start = middle + 1;
    middle = Math.floor((start + end) / 2);
  }
  // console.log(start, end, middle)
  return arr[middle == elem] ? middle : -1;
}

console.log(binarySearch([2, 5, 6, 9, 13, 15, 28, 30], 50));
// binarySearch([
//   5, 6, 10, 13, 14, 18, 30, 34, 35, 37,
//   40, 44, 64, 79, 84, 86, 95, 96, 98, 99
// ], 100)
