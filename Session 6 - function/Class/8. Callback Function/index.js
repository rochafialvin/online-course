////////////////////////
/* CALLBACK FUNCTION */
///////////////////////

// var addition = (num1, num2) => {
//   return num1 + num2;
// };

// var multiplication = (num1, num2) => {
//   return num1 * num2;
// };

/* Calculator */
var calculator = (a, b, cb) => {
  // a = 2
  // b = 5
  // cb = multiplication

  return cb(a, b);
};

// var result = calculator(2, 5, multiplication);
// console.log(result);

/* Array Calculator */

var addition = (num1, num2) => {
  return num1 + num2;
};

var multiplication = (num1, num2) => {
  return num1 * num2;
};

var arrCalculator = (arr, operand, cb) => {
  // arr = [23, 12, 39]
  // operand = 2
  // cb = addition
  var arrResult = [];
  var operationResult;

  // i = 3
  // arr.length = 3
  // arrResult = [25, 14, 41]
  for (var i = 0; i < arr.length; i++) {
    // arr[i] = 39
    operationResult = cb(arr[i], operand);
    arrResult.push(operationResult);
  }

  // arrResult = [25, 14, 41]
  return arrResult;
};

var numbers = [23, 12, 39];
var result = arrCalculator(numbers, 2, multiplication);
console.log(result);
