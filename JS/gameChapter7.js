//  «Виселица»

// создаем игровой массив + добавляем в массив еще слова
const words = [
  "программа",
  "макака",
  "прекрасный",
  "оладушек",
  "собака",
  "лампа",
];

// Выбираем случайное слово
const word = words[Math.floor(Math.random() * words.length)];

//создаем игровой массив
const answerArray = [];
for (let i = 0; i < word.length; i++) {
  answerArray[i] = "_";
}

let remainingLetters = word.length;
let guesses = 15;

// игровой цикл
while (remainingLetters > 0 && guesses > 0) {
  alert(answerArray.join(" "));

  // Запрашиваем вариант ответа
  let guess = prompt("Угадайте букву, или нажмите Отмена для выхода из игры.");
  if (guess === null) {
    break;
  } else if (guess.length !== 1) {
    alert("Пожалуйста введите одиночную букву.");
  } else {
    guesses--;
    guess = guess.toLowerCase();
    for (let k = 0; k < word.length; k++) {
      if (word[k] === guess && answerArray[k] === "_") {
        answerArray[k] = guess;
        remainingLetters--;
      }
    }
  }
}
alert(answerArray.join(" "));
if (guesses > 0) {
  alert(`Отлично! Было загадано слово ${word}`);
} else {
  alert(`Не угадали! Было загадано слово ${word}`);
}
