//#1. Подсчет очков
let scores = {
  denis: 20,
  nikita: 30,
};

scores.denis += 10;
scores.nikita += 30;

console.log(scores);

//#2. Вглубь объектов и массивов
const myCrazyObject = {
  name: "Нелепый объект",
  "some array": [7, 9, { purpose: "путаница", number: 123 }, 3.3],
  "random animal": "Банановая акула",
};

console.log(myCrazyObject["some array"][2].number);
