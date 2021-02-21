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

//#3. «Виселица» и функции

const pickWord = function () {
  const words = [
    "программа",
    "макака",
    "прекрасный",
    "оладушек",
    "собака",
    "лампа",
  ];
  return words[Math.floor(Math.random() * words.length)];
};

const setupAnswerArray = function (word) {
  // Возвращает итоговый массив для заданного слова word
  const answerArray = [];
  for (let i = 0; i < word.length; i++) {
    answerArray[i] = "_";
  }
  return answerArray;
};

const showPlayerProgress = function (answerArray) {
  // С помощью alert отображает текущее состояние игры
  alert(answerArray.join(" "));
};

const getGuess = function () {
  // Запрашивает ответ игрока с помощью prompt
  return prompt("Угадайте букву, или нажмите Отмена для выхода из игры.");
};

const updateGameState = function (guess, word, answerArray) {
  // Обновляет answerArray согласно ответу игрока (guess)
  // возвращает число, обозначающее, сколько раз буква guess
  // встречается в слове, чтобы можно было обновить значение
  // remainingLetters
  let howManyTimes = 0;
  for (let k = 0; k < word.length; k++) {
    if (word[k] === guess) {
      answerArray[k] = guess;
      howManyTimes++;
    }
  }

  return howManyTimes;
};

const showAnswerAndCongratulatePlayer = function (answerArray) {
  // С помощью alert показывает игроку отгаданное слово
  // и поздравляет его с победой
  showPlayerProgress(answerArray);
  alert("Отлично! Было загадано слово " + answerArray.join(""));
};

// word: загаданное слово
const word = pickWord();
// answerArray: итоговый массив
const answerArray = setupAnswerArray(word);
// remainingLetters: сколько букв осталось угадать
let remainingLetters = word.length;

while (remainingLetters > 0) {
  showPlayerProgress(answerArray);
  // guess: ответ игрока
  const guess = getGuess();
  if (guess === null) {
    break;
  } else if (guess.length !== 1) {
    alert("Пожалуйста, введите одиночную букву.");
  } else {
    // correctGuesses: количество открытых букв
    const correctGuesses = updateGameState(guess, word, answerArray);
    remainingLetters -= correctGuesses;
  }
}
showAnswerAndCongratulatePlayer(answerArray);
