// Pollyfill for map

// Map - callback fn on array element and return new array

Array.prototype.myMap = function (cb) {
  if (typeof cb != "function") throw Error(cb + " is not a function");
  let len = this.length;
  let arr = [];
  for (let i = 0; i < len; i++) {
    let ele = this[i];
    //  handle undefined , not null or 0
    if (i in this) {
      let ans = cb(ele, this, i);
      arr.push(ans);
    }
  }
  return arr;
};

// Filter PollyFill
// filter pollyfill has a cb, arr.filter((ele)=>condition)

Array.prototype.myFilter = function (callback) {
  if (typeof callback != "function")
    throw Error(callback + " is not a function");

  let len = this.length;
  let arr = [];

  for (let i = 0; i < len; i++) {
    // order matters for cb args
    const satisfyCondition = callback(this[i], i, this);
    if (satisfyCondition) {
      arr.push(this[i]);
    }
  }

  return arr;
};

// reduce prototype

// arr.reduce((ele,pre)=>ele+pre,0)

Array.prototype.myReduce = function (callback, initialValue) {
  if (typeof callback != "function")
    throw Error(callback + " is not a function");

  if (this.length == 0 && initialValue == undefined)
    throw Error("Reducer can't work on empty array");

  // when no initial value it starts from first value
  let result = initialValue;
  let i = 0;

  if (initialValue === undefined) {
    i = 1;
    result = this[0];
  }

  for (i; i < this.length; i++) {
    if (i in this) result = callback(result, this[i], i, this);
  }

  return result;
};

let arr = [1, 2, 3, 4];

function checkPollyFill(arr) {
  console.log(arr);
}

checkPollyFill(arr.myMap((ele) => ele * 2));
checkPollyFill(arr.myFilter((ele) => ele > 2));
checkPollyFill(arr.slice(0, 1).myReduce((pre, ele) => ele + pre));

checkPollyFill(arr.slice(0, 1).reduce((pre, curr, i) => curr + pre));

checkPollyFill(arr.myReduce((pre, ele) => ele + pre));

checkPollyFill(arr.reduce((pre, curr, i) => curr + pre));
checkPollyFill([].reduce((pre, curr, i) => curr + pre, 10));

checkPollyFill([].myReduce((pre, ele) => ele + pre, 10));
