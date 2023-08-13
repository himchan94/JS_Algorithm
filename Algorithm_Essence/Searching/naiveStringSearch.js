// function naiveStringSearch(targetStr, searchStr) {
//   let count = 0;
//   const searchStrLength = searchStr.length;

//   for (const targetIdx in targetStr) {

//     if (count === searchStrLength) break;
//     for (const searchIdx in searchStr) {
//       if (targetStr[(+targetIdx) + (+searchIdx)] === searchStr[searchIdx]) count++;
//       else {
//         count = 0; // reset count
//         break;
//       }
//     }
//   }

//   return (searchStrLength === count )
// }

// console.log(naiveStringSearch("wowmgzomg", "omg"))

// solution
function naiveSearch(long, short) {
  var count = 0;
  for (var i = 0; i < long.length; i++) {
    for (var j = 0; j < short.length; j++) {
      if (short[j] !== long[i + j]) break;
      if (j === short.length - 1) count++;
    }
  }
  return count;
}

console.log(naiveSearch("lorie loled", "lo"));
