function Student(name, gender, age) {
    this.name = name;
    this.gender = gender;
    this.age = age;
    this.marks = [];
  }
  
  Student.prototype.setSubject = function (subjectName) {
    this.subject = subjectName;
  };
  
  Student.prototype.addMarks = function (...marks) {
    if (this.marks) {
      this.marks.push(...marks);
    }
  };
  
  Student.prototype.getAverage = function () {
    if (this.marks && this.marks.length) {
      const summ = this.marks.reduce((a, b) => a + b, 0);
      return summ / this.marks.length;
    } else {
      return 0;
    }
  };
  
  Student.prototype.exclude = function (reason) {
    delete this.subject;
    delete this.marks;
    this.excluded = reason;
  };
  