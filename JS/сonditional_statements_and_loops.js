
// Попробуейте

for (let i = 3; i < 10000; i = i * 3) {
    console.log(i);
}

//Переписать цикл for на while

let i = 1;

while(i < 10000) {
console.log(i);
    i = i * 3;
}

// #1. Прекрасные животные

let animals = ["Кот", "Рыба", "Лемур", "Комодский варан"];

for (let i = 0; i < animals.length; i++){
    animals[i] = animals[i] += " - прекрасное животное";
}

console.log(animals);


// #2. Генератор случайных строк

const alphabet = "абвгдеёжзийклмнопрстуфхцчшщъыьэюя";

let randomString = "";
const stringLenght = 8;

while(randomString.length < stringLenght) {
    randomString += alphabet[Math.floor(Math.random() *   alphabet.length)];
}

console.log(randomString);

// #3. h4ck3r sp34k перевести на хакерский язык

const input = "javascript is awesome";
let output = "";

 for(let i = 0; i < input.length; i++ ) {
     if(input[i] === "a") {
         output += 4;
     } else if (input[i] === "e") {
         output += 3;
     } else if (input[i] === "i") {
         output += 1;
     } else if (input[i] === "o") {
         output += 0;
     } else {
         output += input[i];
     }
 }

 console.log(output);
