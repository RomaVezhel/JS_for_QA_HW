// #1. Следом за кликами

$("html").click(function (event) {
  // добавили обработчик события mousemove
  $("#heading").offset({
    left: event.pageX,
    top: event.pageY,
  });
});

// #2. Создайте собственную анимацию

let direction = "right";
let offset = 0;

$("#heading").offset({ left: offset, top: offset });

const animatedTitle = function () {
  if (direction === "right") {
    $("#heading").offset({ left: offset });
    offset++;
    if (offset > 200) {
      offset = 0;
      direction = "bottom";
    }
  } else if (direction === "bottom") {
    $("#heading").offset({ top: offset });
    offset++;
    if (offset > 200) {
      offset = 200;
      direction = "left";
    }
  } else if (direction === "left") {
    $("#heading").offset({ left: offset });
    offset--;
    if (offset < 0) {
      offset = 200;
      direction = "top";
    }
  } else if (direction === "top") {
    $("#heading").offset({ top: offset });
    offset--;
    if (offset < 0) {
      offset = 0;
      direction = "right";
    }
  }
};

// #3. Остановка анимации по клику

const intervalId = setInterval(animatedTitle, 30);

$("#heading").click(function () {
  clearInterval(intervalId);
});

// #4. Напишите игру "Кликни по заголовку"

let direction = "right";
let offset = 0;
let intervalLength = 120;
let clicks = 0;

$("#heading").offset({ left: offset, top: offset });

let animatedTitle = function () {
  if (direction === "right") {
    $("#heading").offset({ left: offset });
    offset++;

    if (offset > 200) {
      offset = 0;
      direction = "bottom";
    }
  } else if (direction === "bottom") {
    $("#heading").offset({ top: offset });
    offset++;

    if (offset > 200) {
      offset = 200;
      direction = "left";
    }
  } else if (direction === "left") {
    $("#heading").offset({ left: offset });
    offset--;

    if (offset < 0) {
      offset = 200;
      direction = "top";
    }
  } else if (direction === "top") {
    $("#heading").offset({ top: offset });
    offset--;

    if (offset < 0) {
      offset = 0;
      direction = "right";
    }
  }
};

let intervalId = setInterval(animatedTitle, intervalLength);

$("#heading").click(function () {
  clearInterval(intervalId);
  intervalLength /= 2;
  clicks++;

  if (clicks > 10) {
    $("#heading").text("Your are win!");
  } else {
    intervalId = setInterval(animatedTitle, intervalLength);
  }
});
