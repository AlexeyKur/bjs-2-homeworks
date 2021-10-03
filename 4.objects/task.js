function Student(name, gender, age) {
    // Ваш код
  this.name = name;
  this.gender = gender;
  this.age = age;
}

Student.prototype.setSubject = function (subjectName) {
  //ваш код
  this.subject = subjectName;
}

// ваш код для остальных методов
Student.prototype.addMark = function (mark) { 
  if(this.marks === undefined){ 
    this.marks = [];
    this.marks.push(mark);
  } else {
    this.marks.push(mark);
  }
  let sum = 0;
  this.marks.reduce((acc, item) => {
    sum = sum + item;
    return sum;
  }, 0);
  this.average = (sum / this.marks.length).toFixed(2);
}

Student.prototype.exclude = function (reason) {
  this.excluded = reason;
  if (this.excluded !== undefined) {
    delete this.subject;
    delete this.marks;
  }
}
