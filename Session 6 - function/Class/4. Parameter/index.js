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

// introduction("Nagisa");

var fullName = (firstName, lastName) => {
  console.log(`Halo, nama lengkap saya adalah ${firstName} ${lastName}`);
};

// fullName("Kyojuro", "Rengoku");
// fullName("Isaac", "Newton");

var addition = (num1, num2) => {
  var result = num1 + num2;
  console.log(`Hasil penjumlahan ${num1} dan ${num2} adalah ${result}`);
};

// addition(7, 3);
// addition(5, 11);

var multiplication = (num1, num2) => {
  var result = num1 * num2;
  console.log(`${num1} * ${num2} = ${result}`);
};

// multiplication(7, 3);
// multiplication(5, 11);

/* Array Checking */
var days = [3, 26, 999, 23, 2, 1, 2, 3, 12];

/*
  Array ini memiliki 3 data sebagai berikut : sunday, monday, tuesday
*/

var arrChecking = (arr) => {
  // mencari tahu banyaknya data pada array ? length
  var arrLen = arr.length;
  // menggabungkan setiap data pada array dengan koma dan spasi ? join
  var arrJoin = arr.join(", ");

  console.log(`Array ini memiliki ${arrLen} data sebagai berikut: ${arrJoin}`);
};

// arrChecking(days);

/* Array Caculator */

var numbers = [1, 2, 3];

var arrCalculator = (arr, operation, operand) => {
  var arrResult = [];

  switch (operation) {
    case "addition":
      for (var i = 0; i < arr.length; i++) {
        arrResult.push(arr[i] + operand);
      }

      console.log(`Before : ${arr}\nAfter : ${arrResult}`);

      break;

    case "multiplication":
      for (var i = 0; i < arr.length; i++) {
        arrResult.push(arr[i] * operand);
      }

      console.log(`Before : ${arr}\nAfter : ${arrResult}`);

      break;

    default:
      console.log(`Invalid Operation`);
      break;
  }
};

arrCalculator(numbers, "multiplication", 10);
