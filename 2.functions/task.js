// Task 1

function getArrayParams(...arr) {
  return {
    max: Math.max(...arr),
    min: Math.min(...arr),
    avg: +(arr.reduce((partialSum, a) => partialSum + a, 0) / arr.length).toFixed(2),
  };
}

// Task 2

function summElementsWorker(...arr) {
  if (!arr.length) return 0;
  return arr.reduce((partialSum, a) => partialSum + a, 0);
}

function differenceMaxMinWorker(...arr) {
  if (!arr.length) return 0;
  return Math.max(...arr) - Math.min(...arr);
}

function differenceEvenOddWorker(...arr) {
  if (!arr.length) return 0;
  const summEvenElement = arr
    .filter((num) => !(num % 2))
    .reduce((partialSum, a) => partialSum + a, 0);
  const sumOddElement = arr.filter((num) => num % 2).reduce((partialSum, a) => partialSum + a, 0);

  return summEvenElement - sumOddElement;
}

function averageEvenElementsWorker(...arr) {
  if (!arr.length) return 0;
  const evenNumbers = arr.filter((num) => !(num % 2));
  const evenNumbersSumm = evenNumbers.reduce((sum, a) => sum + a, 0);
  return evenNumbersSumm / evenNumbers.length;
}

// Task 3

function makeWork(arrOfArr, func) {
  const newArr = [];
  arrOfArr.map((array) => {
    newArr.push(func(...array));
  });
  return Math.max(...newArr);
}
