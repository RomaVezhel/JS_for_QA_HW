//Отложенное выполнение кода и setTimeout

// setTimeout(func, timeout);
//----------------------------------

// let timeUp = function () {
//   alert("Время вышло!");
// };
//
// setTimeout(timeUp, 2000);
//----------------------------------------------------------------------------

// Отмена действия таймера clearTimeout();
// установили таймер «сделай домашку»

// let doHomeworkAlarm = function () {
//   alert("Эй! Пора делать домашку!");
// };
// let timeoutId = setTimeout(doHomeworkAlarm, 2000); // хранится id таймера
//
// clearTimeout(timeoutId);
//-------------------------------------------------------------------------------

// пример не из книги
// отправить API запрос, а потом подождать ответ
//
// function first() {
//   // Симулируем задержку кода
//   setTimeout(function () {
//     console.log(1);
//   }, 2000);
// }
//
// function second() {
//   console.log(2);
// }
//
// first();
// second();
// ---------------------------------------------------------------------------------
// Многократный запуск кода и setInterval

// setInterval(func, interval);
//----------------------------------------------------
// Выводим сообщение в console

// let counter = 1;
// const printMessage = function () {
//   console.log(`Ты смотришь в консоль уже ${counter} сек`);
//   counter++;
// };
// let intervalId = setInterval(printMessage, 1000);
//
// clearInterval(intervalId);

// -----------------------------------------------------------

//сдвигаем элемент вправо на 200px

// let leftOffset = 0;
//
// const moveHeading = function () {
//   $("#heading").offset({ left: leftOffset });
//   leftOffset++;
//
//   if (leftOffset > 200) {
//     leftOffset = 0;
//   }
// };
// setInterval(moveHeading, 30); // код вызывается примерно 33 раза в секунду, смещаясь на 1 пиксель
//    каждые 30 миллисекунд

//---------------------------------------------------------------------------------

// Реакция на действия пользователя (события)

// Реакция на клики

// let clickHandler = function (event) {
//   console.log("Клик! " + event.pageX + " " + event.pageY);
// };
// $("h1").click(clickHandler);

// -----------------------------------------------------------------------------------------

//Событие mousemove, перемещение мышки

// $("html").mousemove(function (event) {
//   // добавили обработчик события mousemove
//   $("#heading").offset({
//     left: event.pageX,
//     top: event.pageY,
//   });
// });
