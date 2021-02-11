//////////////
/* FOR EACH */
//////////////

/* Direct Argument */
var addition = (a, b) => {
  return a + b;
};

addition(2, 5);

/* Direct Callback */
var direct = (arr, cb) => {
  return cb(arr);
};

var nums = [1, 2, 3];

var result = direct(nums, (ary) => {
  return ary.length;
});

console.log(result);

/* For Each : Loop */
var nums = [1, 2, 3];

var cb = (val) => {
  console.log(`Loop ${val}`);
};

nums.forEach(cb);

nums.forEach((val) => {
  console.log(`Loop direct ${val}`);
});

/* For Each : value on index */

var nums = ["A", "B", "C"];

var cb = (val, idx) => {
  console.log(`Index ke ${idx} : ${val}`);
};

nums.forEach(cb);

nums.forEach((val, idx) => {
  console.log(`Direct index ke ${idx} : ${val}`);
});

/* For Each : third argument */

var days = ["sunday", "monday", "tuesday"];

days.forEach((val, idx, arr) => {
  console.log(`val : ${val}`);
  console.log(`idx : ${idx}`);
  console.log(`arr : ${arr}`);
});

/* For Each : multple by two */
var nums = [2, 5, 7];
var result = [];

nums.forEach((val) => {
  result.push(val * 2);
});

console.log(result);

/* For Each : highest and lowest */

var nums = [2, 5, 3];
var min, max;
nums.forEach((val, idx) => {
  if (idx == 0) {
    min = max = val;
  } else if (val < min) {
    min = val;
  } else if (val > max) {
    max = val;
  }
});

console.log(`Min : ${min}\nMax : ${max}`);

//////////////////////////////////////////////////////////////////
// Sebuah function yang dapat memisahkan nilai genap dan ganjil //
// [11, 22, 34, 41, 52, 63, 71, 86,]                            //
// [ [11, 41, 63 ,71], [22, 34, 52, 86] ]                       //
//////////////////////////////////////////////////////////////////

var oddEven = (numbers) => {
  var odds = [];
  var evens = [];

  numbers.forEach((number) => {
    if (number % 2 == 1) {
      odds.push(number);
    } else {
      evens.push(number);
    }

    return [odds, evens];
  });
};

var result = oddEven([11, 22, 34, 41, 52, 63, 71, 86]);
console.log(result);
console.table(result);
