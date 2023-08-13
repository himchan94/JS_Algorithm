// function selectionSort(arr) {
//   let minIdx; // Wrong here;
//   for (let i = 0; i < arr.length; i++) {
//     for (let j = i + 1; j < arr.length; j++) {
//       if (arr[i] < arr[j]) minIdx = i;
//       else if (arr[i] > arr[j]) minIdx = j;

//       console.log(i, j, minIdx);
//     }
//     [arr[i], arr[minIdx]] = [arr[minIdx], arr[i]];
//   }
//   console.log(arr);
//   return arr;
// }

// selectionSort([3, 5, 99, 33, 199, 299, 100]);

// solution

// function selectionSort(arr) {
//   for (let i = 0; i < arr.length; i++) {
//     let lowest = i;
//     for (let j = i + 1; arr.length; j++) {
//       if (arr[j] < arr[lowest]) lowest = j;
//     }
//     if (i !== lowest) {
//       var temp = arr[i];
//       arr[i] = arr[lowest];
//       arr[lowest] = temp;
//     }
//   }
//   return arr;
// }

// selectionSort([34, 22, 10, 19, 17]);
