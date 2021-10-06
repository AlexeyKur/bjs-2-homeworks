function compareArrays(arr1, arr2) {
  let result;
  
  result = (arr1.length === arr2.length) ? arr1.every((item, index) => arr1[index] === arr2[index] && arr2[index] === arr2[index]) : false;
  
  return result;
}

function advancedFilter(arr) {
  let resultArr;

  // Ваш код
  resultArr = arr.filter((item) => item > 0).filter((item) => item % 3 === 0).map((item) => item * 10);
  

  return resultArr; // array
}
