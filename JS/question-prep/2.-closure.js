// 1Q
function outer() {
  let x = 10;
  return function inner() {
    console.log(x);
  };
}
const fn = outer();
// fn(); // ?

// 2Q

function makeCounter() {
  let count = 0;
  return function () {
    return ++count;
  };
}
const c1 = makeCounter();
const c2 = makeCounter();
// console.log(c1());
// console.log(c2());
// console.log(c1());

// 3Q

function outer() {
  let a = 10;
  function inner() {
    console.log(a);
  }
  a = 20;
  return inner;
}
const fnc = outer();
// fnc(); // ?

// 4Q

for (var i = 0; i < 3; i++) {
  (function (x) {
    // setTimeout(() => console.log(x), 1000);
  })(i);
}

// 5Q

function greet(lang) {
  return function (name) {
    if (lang === "en") console.log("Hello", name);
    if (lang === "es") console.log("Hola", name);
  };
}
const greetEn = greet("en");
// greetEn("Yash");

// 6Q

function makeAccount() {
  let balance = 0;
  return {
    deposit: (amt) => (balance += amt),
    getBalance: () => balance,
  };
}
const acc = makeAccount();
acc.deposit(100);
// console.log(acc.getBalance());

// 7Q

function outerFn() {
  const obj = { val: 10 };
  return function () {
    obj.val++;
    console.log(obj.val);
  };
}
const fnct = outerFn();
// fnct();
// fnct();

// 8Q
