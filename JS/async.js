// function loadScript(src) {
//   let script = document.createElement("script");
//   script.src = src;
//   document.head.append(script);
// }
//
// console.log(loadScript("./JS/object.js"));
// // ...
// //
//------------------------------------------
//
// loadScript("./JS/object.js"); // в скрипте есть "function newFunction() {…}"
//
// newFunction();
// такой функции не существует!
// у браузера не было времени загрузить скрипт.
// - Скрипт загружается, а потом выполняется

//--------------------------------------------------------- !!!

//передаем функцию callback вторым аргументом в loadScript,
// чтобы вызвать её, когда скрипт загрузится:

// function loadScript(src, callback) {
//   let script = document.createElement("script");
//   script.src = src;
//
//   script.onload = function () {
//     //вызываем функцию из скрипта в колбэке
//     callback(script);
//   };
//   document.head.append(script);
// }
//
// loadScript("./JS/functions.js", function () {
//   // эта функция вызовется после того, когда загрузится скрипт
//   console.log(multiply(2, 5));
// });

// function loadScript(src, callback) {
//   let script = document.createElement("script");
//   script.src = src;
//
//   // script.onload = function () {                  // не отрабатывает onload
//   //   callback(script);
//   // };
//   document.head.append(script);
//   callback(script);
// }
//
// loadScript("./JS/functions.js", function () {
//   console.log(multiply(2, 5));
// });
//-----------------------------------------------------------------------------------

//колбэк в колбэке  (загружаем два скипта один за другим)

// function loadScript(src, callback) {
//   let script = document.createElement("script");
//   script.src = src;
//
//   script.onload = function () {
//     callback(script);
//   };
//   document.head.append(script);
// }
//
// loadScript("./JS/functions.js", function () {
//   console.log(multiply(2, 5));
//
//   loadScript("./JS/functions2.js", function () {
//     console.log(add(2, 5));
//   });
// });
//-------------------------------------------------------------------------
// перехват ошибок     не можем быть уверенными, что функции без ошибок

// function loadScript(src, callback) {
//   let script = document.createElement("script");
//   script.src = src;
//
//   script.onload = () => callback(null, script);
//   script.onerror = () =>
//     callback(new Error(`Не удалось загрузить скрипт ${src}`));
//
//   document.head.append(script);
// }
//
// loadScript("./JS/functions.js", function (error, script) {
//   if (error) {
//     console.log(error);
//     // обрабатываем ошибку
//   } else {
//     console.log(multiply(2, 5));
//   }
// });
//--------------------------------------------------------------------
// пример с if пирамида

// loadScript("1.js", function (error, script) {
//   if (error) {
//     handleError(error);
//   } else {
//     // ...
//     loadScript("2.js", function (error, script) {
//       if (error) {
//         handleError(error);
//       } else {
//         // ...
//         loadScript("3.js", function (error, script) {
//           if (error) {
//             handleError(error);
//           } else {
//             // ...и так далее, пока все скрипты не будут загружены (*)
//           }
//         });
//       }
//     });
//   }
// });
//--------------------------------------------------------------------------------

// Promise синтаксис
// let promise = new Promise(function (resolve, reject) {
//   // функция-исполнитель (executor)
//   // "курьер"
// });
//-----------------------------------------------------------------------------

// let promise = new Promise(function (resolve, reject) {
//   // через 2 секунды сигнализировать, что задача выполнена с результатом "done"
//   setTimeout(() => resolve("done"), 2000);
// });
// console.log(promise);
// //
// // // !!!
// //
// // метод then, у которого 2 параметра
// promise.then(
//   function (result) {
//     /* обработает успешное выполнение */
//   },
//   function (error) {
//     /* обработает ошибку */
//   }
// );
//--------------------------------------------------------------------------
// // реакция на успешно выполненный промис
// let promise = new Promise(function (resolve, reject) {
//   setTimeout(() => resolve("done!"), 2000);
// });
//
// // resolve запустит первую функцию, переданную в .then
// promise.then(
//   (result) => alert(result), // выведет "done!" через две секунды
//   (error) => alert(error) // не будет запущена
// );
//----------------------------------------------------------------------------

// // ошибка в промисе
// let promise = new Promise(function (resolve, reject) {
//   setTimeout(() => reject(new Error("Whoops!")), 2000);
// });
//
// // reject запустит вторую функцию, переданную в .then
// promise.then(
//   (result) => alert(result), // не будет запущена
//   (error) => alert(error) // выведет "Error: Whoops!" спустя две секунды
// );
//----------------------------------------

// если заинтересованы только в успешном выполнении

// let promise = new Promise((resolve) => {
//   setTimeout(() => resolve("done!"), 2000);
// });
//
// promise.then(alert); // выведет "done!" спустя две секунды
//
// // метод catch

// если б хотели только обрабатывать ошибку можно использовать
// .then(null, errorHandlingFunction)

// let promise = new Promise((resolve, reject) => {
//   setTimeout(() => reject(new Error("Ошибка!")), 2000);
// });
//
// // // .catch(f) это тоже самое, что promise.then(null, f)
// promise.catch(alert); // выведет "Error: Ошибка!" спустя 2 секунды (пример с then!)

// finally

//------------------------------------------------------

// // вариант с колбэками
// function loadScript(src, callback) {
//   let script = document.createElement("script");
//   script.src = src;
//
//   script.onload = () => callback(null, script);
//   script.onerror = () => callback(new Error(`Ошибка загрузки скрипта ${src}`));
//
//   document.head.append(script);
// }

// // перепишем на промисы (цепь)
// function loadScript(src) {
//   return new Promise(function (resolve, reject) {
//     let script = document.createElement("script");
//     script.src = src;
//
//     script.onload = () => resolve(script);
//     script.onerror = () => reject(new Error(`Ошибка загрузки скрипта ${src}`));
//
//     document.head.append(script);
//   });
// }
//
// //
// let promise = loadScript(
//   "https://cdnjs.cloudflare.com/ajax/libs/lodash.js/4.17.11/lodash.js"
// );
// //
// promise.then(
//   (script) => alert(`${script.src} загружен!`),
//   (error) => alert(`Ошибка: ${error.message}`)
// );
//
// promise.then((script) => alert("Ещё один обработчик...")); // ...
// promise.then((script) => alert("Ещё один обработчик..."));
// promise.then((script) => alert("Ещё один обработчик..."));
// promise.then((script) => alert("Ещё один обработчик..."));
// ------------------------------------------------------------------------------------------

// Async/await
// функция async всегда возвращает промис
// async function f() {
//   return 1;
// }
// //
// console.log(f());

//----------------------------------------------------------------------------

// await

// async function f() {
//   let promise = new Promise((resolve, reject) => {
//     setTimeout(() => resolve("готово!"), 1000);
//   });
//
//   let result = await promise; // будет ждать, пока промис не выполнится
//   // результат в result
//
//   console.log(result); // "готово!"
// }
//
// f();

//----------------------------------------------------------------------
// // перепишем пример с помощью async/await

// function toDo() {
//   console.log("started...");
//   return delay(2000)
//     .then(function () {
//       return fetch(url);
//     })
//     .then(function (response) {
//       return response.json(); // метод fetch возвращает промис
//     });
// }
//
// toDo()
//   .then(function (data) {
//     console.log("Ответ", data);
//   })
//   .catch(function (err) {
//     console.log(err);
//   });

//---

// const delay = function (ms) {
//   return new Promise(function (resolve) {
//     setTimeout(function () {
//       resolve();
//     }, ms);
//   });
// };
//
// const url = "https://jsonplaceholder.typicode.com/todos/1";
//
// async function asyncToDo() {
//   console.log("started...");
//   await delay(2000); // try/catch
//   const response = await fetch(url);
//   const data = await response.json();
//   console.log("Ответ", data);
// }
//
// asyncToDo();

//--------------------------------------------------------------------------

// // перепишем пример с помощью async/await
//
// function loadJson(url) {
//   return fetch(url).then((response) => {
//     if (response.status === 200) {
//       return response.json();
//     } else {
//       throw new Error(response.status);
//     }
//   });
// }
//
// loadJson("https://jsonplaceholder.typicode.com/todos/1").catch(alert); // Error: 404

//  ---
// async function loadJson(url) {
//   let response = await fetch(url);
//   if (response.status === 200) {
//     let json = await response.json();
//     console.log(json);
//     return json;
//   }
//
//   throw new Error(response.status);
// }
//
// loadJson("https://jsonplaceholder.typicode.com/todos/1").catch(alert);
// // Error: 404(4);
