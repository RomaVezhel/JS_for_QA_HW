
//Отложенное выполнение кода и setTimeout

//setTimeout(func, timeout);
//----------------------------------


let timeUp = function () {
    alert("Время вышло!");
};

setTimeout(timeUp, 3000);
//----------------------------------------------------------------------------


// Отмена действия таймера clearTimeout();
// установили таймер «сделай домашку»

// let doHomeworkAlarm = function () {
//     alert("Эй! Пора делать домашку!");
// };
//   let timeoutId = setTimeout(doHomeworkAlarm, 60000);   // хранится id таймера
//
// clearTimeout(timeoutId);
//-------------------------------------------------------------------------------

// Многократный запуск кода и setInterval

// setInterval(func, interval);
//----------------------------------------------------
// Выводим сообщение в console

// let counter = 1;
//  const printMessage = function () {
//     console.log(`Ты смотришь в консоль уже ${counter} сек`);
//  counter++;
// };
//  let intervalId = setInterval(printMessage, 1000);
//
// //clearInterval(intervalId);

// -----------------------------------------------------------

//сдвигаем элемент вправо на 200px

// let leftOffset = 0;
//
//  const moveHeading = function () {
//  $("#heading").offset({ left: leftOffset });
//  leftOffset++;
//
//  if (leftOffset > 200) {
//      leftOffset = 0;
//  }
//  };
//  setInterval(moveHeading, 30);      // код вызывается примерно 33 раза в секунду, смещаясь на 1 пиксель
                                           //    каждые 30 миллисекунд

//---------------------------------------------------------------------------------

// Реакция на действия пользователя (события)

// Реакция на клики

var clickHandler = function (event) {
console.log("Клик! " + event.pageX + " " + event.pageY);
};
$("h1").click(clickHandler);



















































