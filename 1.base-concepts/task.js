function solveEquation(a, b, c) {
  let arr;
  // код для задачи №1 писать здесь
  'use strict';
  let d = (b ** 2) - 4 * a * c;
  if (d > 0) {
    let x1 = (-b + Math.sqrt(d)) / (2 * a);
    let x2 = (-b - Math.sqrt(d)) / (2 * a);
    arr = [x1, x2];
  } else if (d === 0) {
    let x = -b / (2 * a);
    arr = [x];
  } else if (d < 0) {
    arr = [];
  }
  return arr; // array
}



function calculateTotalMortgage(percent, contribution, amount, date) {
  let totalAmount;

  // код для задачи №2 писать здесь
  'use strict';
  let p = +percent / 12 / 100;
  let s = +amount - +contribution;
  let n = Math.round((date - new Date()) / 1000 / 3600 / 24 / (365 / 12));
  let pay = s * (p + p / (((1 + p) ** n) - 1));
  let result = +(pay * n).toFixed(2);
  console.log(result);
  
  if (Number.isNaN(+percent)) {
    return `Параметр "Процентная ставка" содержит неправильное значение ${percent}`;
  } else if (Number.isNaN(+contribution)) {
    return `Параметр Начальный взнос содержит неправильное значение ${contribution}`;
  } else if (Number.isNaN(+amount)) {
    return `Параметр Общая стоимость содержит неправильное значение ${amount}`;
  } else {
    totalAmount = result;
  }
  
  return totalAmount;
}
