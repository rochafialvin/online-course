/* Matematika dasar */
var addition = (a, b) => {
  var result = a + b;
  // nilai pada variabel result akan menjadi output
  return result;
};

var subtraction = (a, b) => {
  var result = a - b;
  return result;
};

var multiplication = (a, b) => {
  var result = a * b;
  return result;
};

var division = (a, b) => {
  var result = a / b;
  return result;
};

/* Calculator */
var calculator = (a, b, cb) => {
  var result = cb(a, b);
  return result;
};

var calResult = calculator(2, 3, addition);
console.log(calResult);

/* Array Calculator */
var arrCalculator = (arr, operand, cb) => {
  var arrResult = [];
  var operationResult;

  for (var i = 0; i < arr.length; i++) {
    operationResult = cb(arr[i], operand);
    arrResult.push(operationResult);
  }

  return arrResult;
};

var numbers = [23, 12, 39];
var arrResult = arrCalculator(numbers, 3, subtraction);
console.log(`Before : ${numbers}`);
console.log(`After : ${arrResult}`);
