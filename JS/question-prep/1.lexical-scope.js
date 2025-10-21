function test() {
  if (true) {
    var a = 10;
    let b = 20;
    const c = 30;
  }
  //   console.log(a); // ?
  //   console.log(b); // ?
  //   console.log(c); // ?
}
test();

/*
 a is 10 
 and we get reference error for b and c 
 */

// 2 Q.

// console.log(a);
// console.log(b);
var a = 10;
let b = 20;

/*
a = undefined
b = hoisted in temporal dead zone, - so can't access before initialization
*/

// 3Q

let ab = 10;
function fn() {
  let ab = 20;
  //   console.log(ab);
}
fn();
// console.log(ab);

// 4Q

// foo(); // ?
// bar(); // ?

function foo() {
  console.log("foo");
}

var bar = function () {
  console.log("bar");
};

// 5Q

(function () {
  var aot = 100;
})();
// console.log(aot); // ?

// 6Q

let top = 10;

function outer() {
  let b = 20;
  function inner() {
    let c = 30;
    // console.log(top, b, c);
  }
  inner();
}
outer();

// 7Q

function makeCounter() {
  let count = 0;
  return function () {
    count++;
    return count;
  };
}

const c1 = makeCounter();
// console.log(c1());
// console.log(c1());

const c2 = makeCounter();
// console.log(c2());

// 8Q

for (var i = 0; i < 3; i++) {
  //   setTimeout(() => console.log(i), 1000);
}

// 9Q

function outer() {
  let name = "JS";
  return function () {
    console.log(name);
  };
}

const f = outer();
// f();

// 10Q

function counter() {
  let val = 0;
  return {
    inc: () => ++val,
    dec: () => --val,
  };
}
const c = counter();
// console.log(c.inc());
// console.log(c.dec());

// 11Q. - Important

function createFunctions() {
  const result = [];
  for (var i = 0; i < 3; i++) {
    result.push(() => i);
  }
  return result;
}

const arr = createFunctions();
// console.log(arr[0](), arr[1](), arr[2]());

// 12Q

function createAccount() {
  let balance = 100;
  return {
    deposit: (amt) => (balance += amt),
    getBalance: () => balance,
  };
}
const acc = createAccount();
acc.deposit(50);
// console.log(acc.getBalance());

// 13Q

function delayedLogger(msg, delay) {
  setTimeout(() => {
    console.log(msg);
  }, delay);
}

// for (let i = 1; i <= 3; i++) {
//   delayedLogger(i, i * 1000);
// }

// 14Q

let x = 1;
function modify() {
  x = 10;
  return function () {
    console.log(x);
  };
}

const func = modify();
x = 20;
// func();

// 15Q

function createBigObject() {
  const big = new Array(1000000).fill("data");
  return function () {
    console.log("Using closure");
  };
}
// const leak = createBigObject();
// big not garbage collected due to closure reference

// 16 Q

var xt = 10;
function foo() {
  console.log(xt);
}
function barX() {
  var xt = 20;
  foo();
}
// barX();

// 17 Q

function makeObj() {
  let count = 0;
  return {
    inc: function () {
      count++;
      console.log(count);
    },
  };
}

// const obj = makeObj();
// obj.inc();
// obj.inc();

// 18 Q

let val = 5;
function outer() {
  let val = 10;
  function inner() {
    console.log(val);
  }
  return inner;
}
const fnc = outer();
// fnc();
