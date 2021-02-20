// #1. Математические расчеты и функции

const number1 = 36325;
const number2 = 9824;
const number3 = 777;

function add(a, b) {
  return a + b;
}

function multiply(c, d) {
  return c * d;
}

const result = add(multiply(number1, number2), number3);

console.log(result);
// 356857577

// #2. Совпадают ли массивы?

const areArraysSame = function (a, b) {
  if (a.length !== b.length) {
    return false;
  }

  for (let i = 0; i < a.length; i++) {
    if (a[i] !== b[i]) {
      return false;
    }
  }

  return true;
};

console.log(areArraysSame([1, 2, 3], [4, 5, 6]));
// false

console.log(areArraysSame([1, 2, 3], [1, 2, 3]));
// true

console.log(areArraysSame([1, 2, 3], [1, 2, 3, 4]));
// false
