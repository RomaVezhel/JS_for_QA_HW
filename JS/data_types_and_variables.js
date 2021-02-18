// Попробуйте:

// Cколько шариков нужно вашей подруге?

const airBalloons = (15 + 9) * 2;
console.log(airBalloons);

// Оператор *=

let airBalloons1 = 100;
airBalloons1 *= 2;
console.log(airBalloons1);

// Оператор /=

let airBalloons2 = 100;
airBalloons2 /= 4;
console.log(airBalloons2);


// Меняем "эЙ, кАК деЛа?" на "Эй, как дела?".

let howAreU = "эЙ, кАК деЛа?";
console.log(howAreU[0].toUpperCase() + howAreU.slice(1).toLowerCase());


// Может ли ребенок попасть в кинотеатр
let age = 11;
let accompanied = true;

if (age >= 12) {
  console.log("You can enter");
} else if (accompanied) {
  console.log("You can enter");
} else if (age < 12 || !accompanied) {
  console.log("No entry");
} else {
  console.log("No entry");
}
