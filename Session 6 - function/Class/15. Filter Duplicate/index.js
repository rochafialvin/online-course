//////////////////////
/* FILTER DUPLICATE */
//////////////////////

/* Filter : for loop */
var filterForLoop = (arr, cb) => {
  // arr = [1, 23, 31, 20]
  // cb = (val) => { return val % 2 == 1};

  // arrLoop = [1, 23, 31]
  var arrLoop = [];

  // i = 4
  // arr.length : 4
  for (var i = 0; i < arr.length; i++) {
    // cb(20)
    var isTrue = cb(arr[i]);
    // isTrue = false

    if (isTrue) {
      arrLoop.push(arr[i]);
    }
  }

  // arrLoop = [1, 23, 31]
  return arrLoop;
};

/* Filter : for each */
var filterForEach = (arr, cb) => {
  // arr = [23, 20]
  // cb =  (val) => { return val % 2 == 1 };

  // arrForEach = [23]
  var arrForEach = [];

  // val = 20
  arr.forEach((val) => {
    // cb(20)
    if (cb(val)) {
      arrForEach.push(val);
    }
  });

  // arrForEach = [23]
  return arrForEach;
};

var numbers = [23, 20];
var odd = (val) => {
  return val % 2 == 1;
};

var forLoopResult = filterForLoop(numbers, odd);
console.log(forLoopResult);

var forEachResult = filterForEach(numbers, odd);
console.log(forEachResult);
