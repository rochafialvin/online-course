////////////////////////
/* DEFAULT PARAMETER */
///////////////////////

/* Parameter yang memiliki nilai awal yang akan digunakan jika tidak dapat menerima argument */

// a dan b => parameter
// var x = (a, b) => {}
// 3 dan 5 => argument
// x(3, 5)

// 8 * 8
// Pangkat 2 , Perkalian 1
// 8 * 8 * 8
// Pangkat 3 , Perkalian 2

var power = (num1, num2 = 2) => {
  var result = num1;

  for (var i = 1; i < num2; i++) {
    result *= num1;
  }

  return [num1, num2, result];
};

var result = power(8, 3);
console.log(`${result[0]} pangkat ${result[1]} adalah ${result[2]}`);

/* Gunakan undefined untuk melewati parameter yang memiliki nilai default */

var addition = (a, b = 2, c) => {
  return [
    ["a", a],
    ["b", b],
    ["c", c],
  ];
};

console.log(addition(2, undefined, 3));
