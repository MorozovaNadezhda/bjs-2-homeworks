"use strict";

// Task 1

function solveEquation(a, b, c) {
  const discriminant = b ** 2 - 4 * a * c;
  if (discriminant < 0) {
    return [];
  }
  if (discriminant === 0) {
    return [-b / (2 * a)];
  } else {
    return [((-b + Math.sqrt(discriminant)) / 2) * a, ((-b - Math.sqrt(discriminant)) / 2) * a];
  }
}

// Task 2

function calculateTotalMortgage(percent = "", contribution = "", amount = "", countMonths = "") {
  const args = [percent, contribution, amount, countMonths];

  for (let i = 0; i < args.length; i++) {
    if (typeof args[i] === "string" && args[i].trim() === "") return false;
    if (isNaN(args[i])) return false;
  }

  percent = +percent / 100 / 12;
  const creditBody = +amount - +contribution;
  const monthPay = creditBody * (percent + percent / ((1 + percent) ** +countMonths - 1));
  return +(monthPay * countMonths).toFixed(2);
}
