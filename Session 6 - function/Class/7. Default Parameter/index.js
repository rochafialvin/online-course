////////////////////////
/* DEFAULT PARAMETER */
///////////////////////

/* Parameter memiliki nilai awal yang akan digunakan jika tidak mendapatkan nilai */

var power = (a, b = 2) => {
  var result = a;
  for (var i = 1; i < b; i++) {
    result *= a;
  }

  // return result;
  return [a, b, result];
};

var powResult = power(x);
console.log(
  `Hasil ${powResult[0]} pangkat ${powResult[1]} adalah ${powResult[2]}`
);

/* Posisikan default parameter dibagian belakang, dan jumlah default parameter dapat lebih dari satu */

/* Contoh yang salah */
var addition = (a, b = 2, c) => {
  return a + b + c;
};

console.log(addition(1, 3));

/* Contoh yang benar */
var addition = (a, b, c = 3) => {
  return a + b + c;
};

console.log(addition(1, 3));

var addition = (a, b = 2, c = 3) => {
  return a + b + c;
};

console.log(addition(1));
