function parseCount(value) {
  const number = +value;
  if (isNaN(number)) {
    throw new Error("Невалидное значение");
  }
  return number;
}

function validateCount(value) {
  try {
    return parseCount(value);
  } catch (err) {
    return err;
  }
}

// HW2

class Triangle {
  constructor(a, b, c) {
    if (a + b < c || a + c < b || b + c < a) {
      throw new Error("Треугольник с такими сторонами не существует");
    }
    this.a = a;
    this.b = b;
    this.c = c;
  }

  get perimeter() {
    return this.a + this.b + this.c;
  }

  get area() {
    const p = 0.5 * this.perimeter;
    return +Math.sqrt(p * (p - this.a) * (p - this.b) * (p - this.c)).toFixed(3);
  }
}

function getTriangle(a, b, c) {
  try {
    return new Triangle(+a, +b, +c);
  } catch (err) {
    return {
      get area() {
        return "Ошибка! Треугольник не существует";
      },
      get perimeter() {
        return "Ошибка! Треугольник не существует";
      },
    };
  }
}
