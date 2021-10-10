// task 1

function parseCount(parse) {
  let count = Number.parseInt(parse);
  if (Number.isNaN(count)) {
    throw new Error("Невалидное значение")
  }
  
  return count;
}

function validateCount(parse) {
  try {
    return parseCount(parse);
  } catch (err) {
    return err;
  }
}



// task 2

class Triangle {
  
  constructor(a, b, c) {
    this.a = a;
    this.b = b;
    this.c = c;
    
    if (a + b < c || b + c < a || a + c < b) {
      throw new Error("Треугольник с такими сторонами не существует");
    }
  }
  
  getPerimeter() {
    return this.a + this.b + this.c;
  }
  
  getArea() {
    let p = (this.a + this.b + this.c) / 2;
    return +Math.sqrt(p * (p - this.a) * (p - this.b) * (p - this.c)).toFixed(3);
  }
}

const triangle = new Triangle(6,10,15)
console.log(triangle.getArea());
console.log(triangle.getPerimeter());


function getTriangle(a, b, c) {
  try {
    return new Triangle(a, b, c);
  } catch {
    return {
      getArea: () => {
        return "Ошибка! Треугольник не существует";
      }, 
      getPerimeter: () => {
        return "Ошибка! Треугольник не существует";
      }
    }
  }
}
