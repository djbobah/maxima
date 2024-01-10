// let n = 1;
// function counter() {
//   n++;
//   console.log(n);
// }

// console.log(n);

// setTimeout(() => {
//   console.log("time1");
//   counter();
// }, 1000);

// counter();

// function foo() {
//   console.log("вызов счетчика");
//   counter();
//   console.log("dspjd foo");
// }

// function bar() {
//   foo();
//   console.log("вызов bar");
// }

// function kva() {
//   bar();
//   console.log("вызов kva");
// }

// kva();

// let promise = new Promise(function (resolve, reject) {
//   if (Math.random() < 0.8) {
//     resolve("успех! Хлеб куплен");
//   } else {
//     reject("что то пошло не так");
//   }
// });

// // promise();
// // console.log(promise);
// promise.then(function (answ) {
//   console.log(answ);
// });

const body = document.body;

fetch("https://fakerapi.it/api/v1/users?_quantity=100&_gender=male")
  .then((res) => res.json())
  .then((data) => {
    if (data.code === 200) {
      console.log(data.data);
      data.data.forEach((user) => {
        body.innerHTML += `<div>${user.firstname}</div>`;
      });
    }
  });
