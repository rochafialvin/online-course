///////////////////////////
/* CALLING OTHER FUNCTION */
//////////////////////////

/* sebuah function dapat memanggil function lainnya secara langsung */
var first = () => {
  console.log("Function first dijalankan");
};

var second = () => {
  console.log("Function second dijalankan");
  first();
};

second();

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
var calculator = (a, b, operation) => {
  switch (operation) {
    case "addition":
      var result = addition(a, b);
      return result;
      break;

    case "multiplication":
      return multiplication(a, b);
      break;

    default:
      console.log(`invalid operation: ${operation}`);
      break;
  }
};

var calResult = calculator(2, 3, "addition");
console.log(calResult);

/* Array Calculator */
var arrCalculator = (arr, operation, operand) => {
  var arrResult = [];
  var result;

  switch (operation) {
    case "addition":
      for (var i = 0; i < arr.length; i++) {
        result = addition(arr[i], operand);
        arrResult.push(result);
      }
      return arrResult;
      break;

    case "multiplication":
      for (var i = 0; i < arr.length; i++) {
        result = multiplication(arr[i], operand);
        arrResult.push(result);
      }
      return arrResult;
      break;

    default:
      console.log(`invalid operation: ${operation}`);
      break;
  }
};

var numbers = [23, 12, 39];
var arrResult = arrCalculator(numbers, "division", 2);
console.log(`Before : ${numbers}`);
console.log(`After : ${arrResult}`);
