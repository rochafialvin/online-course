////////////////////////
/* PARAMETER (INPUT) */
//////////////////////

/*

  Input = Parameter

  Output = Return

*/

var introduction = (name) => {
  console.log(`Halo, nama saya adalah ${name}`);
};

introduction("Nagisa");

var fullName = (firstName, lastName) => {
  console.log(`Halo, nama lengkap saya adalah ${firstName} ${lastName}`);
};

fullName("Kyojuro", "Rengoku");

/* Penjumlahan */

var addition = (a, b) => {
  var result = a + b;
  console.log(`Hasil penjumlahan ${a} dan ${b} adalah ${result}`);
};

/* Pengurangan */

var subtraction = (a, b) => {
  var result = a - b;
  console.log(`${a} - ${b} = ${result}`);
};

/* Perkalian */

var multiple = (a, b) => {
  var result = a * b;
  console.log(`${a} * ${b} = ${result}`);
};

/* Pembagian */

var division = (a, b) => {
  var result = a - b;
  console.log(`${a} - ${b} = ${result}`);
};

addition(7, 4);
subtraction(7, 4);
multiple(7, 4);
division(7, 4);

/* Array Checking */
var arrChecking = (arr) => {
  var arrLength = arr.length;
  var arrJoin = arr.join(", ");

  console.log(
    `Array ini memiliki ${arrLength} data sebagai berikut: ${arrJoin}`
  );
};

var days = ["Sunday", "Monday", "Tuesday"];
arrChecking(days);

/* Array Calculator */
var arrCalculator = (arr, operation, operand) => {
  var arrResult = [];
  var operationResult;

  switch (operation) {
    case "addition":
      for (var i = 0; i < arr.length; i++) {
        operationResult = arr[i] + operand;
        arrResult.push(operationResult);
      }

      console.log(`Before : ${arr}\nAfter: ${arrResult}`);

      break;

    case "multiplication":
      for (var i = 0; i < arr.length; i++) {
        operationResult = arr[i] * operand;
        arrResult.push(operationResult);
      }

      console.log(`Before : ${arr}\nAfter: ${arrResult}`);

      break;

    default:
      console.log(`invalid operation: ${operation}`);
      break;
  }
};

var numbers = [23, 2, 290];

arrCalculator(numbers, "addition", 2);
