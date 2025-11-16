// 1Q

let aone = 10;
function test() {
  let aone = 20;
  console.log(aone);
}
// test();
// console.log(aone);

// 2Q

let b = 100;
{
  let b = 200;
  //   console.log(b); // ?
}
// console.log(b); // ?

// 3Q

let a = 1;
function outer() {
  let a = 2;
  {
    let a = 3;
    console.log(a); // ?
  }
  console.log(a); // ?
}
outer();
console.log(a); // ?
