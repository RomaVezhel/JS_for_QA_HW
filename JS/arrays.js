//#1. Новые дразнилки

const randomBodyParts = ["губа", "ухо", "кожа"];
const randomAdjectives = ["кривая", "мерзская", "тонкая"];
const randomAnimals = ["белка", "муха", "котяра", "псина"];

const randomBodyPart = randomBodyParts[Math.floor(Math.random() * 3)];

const randomAdjective = randomAdjectives[Math.floor(Math.random() * 3)];

const randomAnimal = randomAnimals[Math.floor(Math.random() * 4)];

console.log(
  `У тебя ${randomBodyPart} словно ${randomAdjective} ${randomAnimal}`
);

//#2. Изощренные дразнилки

const randomBodyParts2 = ["губа", "ухо", "кожа"];
const randomAdjectives2 = ["кривая", "мерзская", "тонкая"];
const randomAnimalBodyParts = ["шерсть", "клык", "коготь", "клюв"];
const randomAnimals2 = ["белки", "мухи", "котяры", "псины"];

const randomBodyPart2 = randomBodyParts2[Math.floor(Math.random() * 3)];

const randomAdjective2 = randomAdjectives2[Math.floor(Math.random() * 3)];

const randomAnimalBodyPart =
  randomAnimalBodyParts[Math.floor(Math.random() * 4)];

const randomAnimal2 = randomAnimals2[Math.floor(Math.random() * 4)];

console.log(
  `У тебя ${randomBodyPart2} еще более ${randomAdjective2}, чем ${randomAnimalBodyPart} у ${randomAnimal2}`
);

// #3. Оператор + или join?

const newRandomBodyParts = ["губа", "ухо", "кожа"];
const newRandomAdjectives = ["кривая", "мерзская", "тонкая"];
const newRandomAnimals = ["белка", "муха", "котяра", "псина"];

const newRandomBodyPart = newRandomBodyParts[Math.floor(Math.random() * 3)];

const newRandomAdjective = newRandomAdjectives[Math.floor(Math.random() * 3)];

const newRandomAnimal = newRandomAnimals[Math.floor(Math.random() * 4)];

console.log(
  [
    "У тебя",
    newRandomBodyPart,
    "словно",
    newRandomAdjective,
    newRandomAnimal,
  ].join(" ")
);

// #4. Соединение чисел

const numbers = [3, 2, 1];

console.log(numbers.join(" больше, чем "));
