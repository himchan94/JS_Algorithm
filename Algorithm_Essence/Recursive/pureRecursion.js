function collectOddValues(arr) {
  let newArr = [];

  if (arr.length === 0) return newArr;

  if (arr[0] % 2 !== 0) {
    newArr.push(arr[0])
  }

  newArr = newArr.concat(collectOddValues(arr.slice(1)));

  return newArr;
}


console.log(collectOddValues([1,2,3,4,5])
)

// [1].concant(collectOddValues[2,3,4,5])
//              [].concat(collectOddValues[3,4,5])
//                  .......[]
