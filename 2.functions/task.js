// Задание 1
function getArrayParams(arr) {
  let min = 100;
  let max = -100;
  let sum = 0;
  let avg;

  // Ваш код
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i]; 
    } 
    if (arr[i] < min) {
      min = arr[i];
    }
    sum = sum + arr[i];
    avg = +(sum / arr.length).toFixed(2);
  }
  return { min:min, max:max, avg:avg };
}

// Задание 2
function worker(arr) {
  let sum = 0;

  // Ваш код
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
}

function makeWork(arrOfArr, func) {
  let max = 0;

  // Ваш кода
  // for ...
  for (let i = 0; i < arrOfArr.length; i++) {
    worker(arrOfArr[i]);
    if (worker(arrOfArr[i]) > max) {
      max = worker(arrOfArr[i]);
    }
  }
//  for (let i = 0; i < arrOfArr.length; i++) {
//    worker2(arrOfArr[i])
//    if (worker2(arrOfArr[i]) > max) {
//      
//      max = worker2(arrOfArr[i]);
//    }
//  }
  return max
}

// Задание 3
function worker2(arr) {
  // Ваш код
  let sum;
  let min = 100;
  let max = -100;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
    if (arr[i] < min) {
      min = arr[i];
    }
  }
  sum = max - min;
  return sum
}
