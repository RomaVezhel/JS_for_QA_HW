// class Car {
//   constructor(x, y) {
//     this.x = x;
//     this.y = y;
//     this.speed = 5; // #2. Добавьте свойство speed
//     this.draw(); // #1. Рисование в конструкторе Car
//   }
//
//   draw() {
//     const carHtml = '<img src="https://nostarch.com/images/car.png">';
//     this.carElement = $(carHtml);
//
//     this.carElement.css({
//       position: "absolute",
//       left: this.x,
//       top: this.y,
//     });
//
//     $("body").append(this.carElement);
//   }
//
//   moveRight() {
//     this.x += this.speed;
//
//     this.carElement.css({
//       left: this.x,
//       top: this.y,
//     });
//   }
//
//   moveLeft() {
//     this.x -= this.speed;
//
//     this.carElement.css({
//       left: this.x,
//       top: this.y,
//     });
//   }
//   moveUp() {
//     this.y -= this.speed;
//
//     this.carElement.css({
//       left: this.x,
//       top: this.y,
//     });
//   }
//   moveDown() {
//     this.y += this.speed;
//
//     this.carElement.css({
//       left: this.x,
//       top: this.y,
//     });
//   }
// }
//
// const tesla = new Car(10, 20);
// const nissan = new Car(100, 200);

// #3. Гонки

class Car {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.draw();
  }

  draw() {
    const carHtml = '<img src="https://nostarch.com/images/car.png" alt="image">';
    this.carElement = $(carHtml);

    this.carElement.css({
      position: "absolute",
      left: this.x,
      top: this.y,
    });

    $("body").append(this.carElement);
  }

  moveRight(distance) {
    this.x += distance;

    this.carElement.css({
      left: this.x,
      top: this.y,
    });
  }

  moveLeft(distance) {
    this.x -= distance;

    this.carElement.css({
      left: this.x,
      top: this.y,
    });
  }
  moveUp(distance) {
    this.y -= distance;

    this.carElement.css({
      left: this.x,
      top: this.y,
    });
  }
  moveDown(distance) {
    this.y += distance;

    this.carElement.css({
      left: this.x,
      top: this.y,
    });
  }
}

const tesla = new Car(10, 20);
const nissan = new Car(100, 200);

setInterval(() => {
  tesla.moveRight(Math.random() * 5);
  nissan.moveRight(Math.random() * 5);
}, 30);
