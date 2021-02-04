//////////////
/* FOR EACH */
//////////////

/* Direct Argument */
var addition = (a, b) => {
  return a + b;
};

var x = 2;
var y = 3;

var result = addition(x, y);
console.log(result);

var result = addition(2, 3);
console.log(result);

/* Direct Callback */
var direct = (arr, cb) => {
  return cb(arr);
};

var nums = [1, 2, 3];
var lenFn = (xyz) => {
  return xyz.length;
};

/* first */
var result = direct(nums, lenFn);
console.log(result);

/* second */
var result = direct([1, 2, 3], (xyz) => {
  return xyz.length;
});
console.log(result);

/* For Each : Loop */

var nums = [1, 2, 3];

var cb = (val) => {
  console.log(`Loop ${val}`);
};

nums.forEach(cb);

/* For Each : value on index */

var nums = [1, 2, 3];

nums.forEach((val, idx) => {
  console.log(`Index ke ${idx} : ${val}`);
});

/* For Each : multiple by two */

var nums = [1, 2, 3];
var result = [];

nums.forEach((val) => {
  result.push(val * 2);
});

console.log(result);

/* For Each : highest and lowest */

var numbers = [39, 101, 1, 5, 25, 13];
var min, max;

numbers.forEach((val, idx) => {
  // nilai pada index nol akan menjadi min dan max
  if (idx == 0) {
    min = max = val;
    // jika nilai baru lebih kecil dari min
  } else if (val < min) {
    min = val;
    // jika nilai baru lebih besar dari max
  } else if (val > max) {
    max = val;
  }
});

console.log(`Array: ${numbers}\nMin: ${min}\nMax: ${max}`);

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
  });

  return [odds, evens];
};

var result = oddEven([11, 22, 34, 41, 52, 63, 71, 86]);
console.log(result);
console.table(result);
