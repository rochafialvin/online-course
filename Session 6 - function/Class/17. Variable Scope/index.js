////////////////////
/* VARIABLE SCOPE */
////////////////////

/*
  Variable Scope : Cakupan wilayah yang dimiliki oleh variabel

  Global scope : Dapat diakses dari manapun
  Local scope : Memiliki ruang terbatas untuk diakses (function scope dan block scope)
*/

/*
  VAR

  1. Function scope : Saat dibuat didalam function, maka hanya dapat diakses dari dalam function itu saja.
*/
var name1 = "Christopher";

var fnScope = () => {
  var name2 = "Shaun";
  console.log(`fnScope : ${name1}`);
  console.log(`fnScope : ${name2}`);
};

fnScope();
console.log(`Diluar fnScope : ${name1}`);
console.log(`Diluar fnScope : ${name2}`);

if (true) {
  var name3 = "Lisa";
  console.log(`if : ${name3}`);
}

console.log(`Diluar if : ${name3}`);

while (true) {
  var name4 = "Mikasa";
  console.log(`while : ${name4}`);
  break;
}

console.log(`Diluar while : ${name4}`);

/*
  LET

  1. Function scope : Saat dibuat didalam function, maka hanya dapat diakses dari dalam function itu saja.
  2. Block scope : Saat dibuat didalam kurung kurawal (if , swicth, for, while, do while)

  Note :
    - Tidak dapat melakukan deklarasi ulang pada scope yang sama

*/

let color = "White";

console.log(`Outside : ${color}`);

let fnScope = () => {
let color1 = "Purple";
console.log(`fnScope : ${color}`);
console.log(`fnScope : ${color1}`);
};

fnScope();
console.log(`Diluar fnScope : ${color1}`);

if (true) {
  let color2 = "Navy";
  console.log(`if : ${color}`);
  console.log(`if : ${color2}`);
}

console.log(`Diluar if : ${color2}`);

while (true) {
  let color3 = "Maroon";
  console.log(`while : ${color}`);
  console.log(`while : ${color3}`);
  break;
}

console.log(`Diluar while : ${color3}`);

/*
  CONST

  1. Function scope : Saat dibuat didalam function, maka hanya dapat diakses dari dalam function itu saja.
  2. Block scope : Saat dibuat didalam kurung kurawal (if , swicth, for, while, do while)

  Note :
    - Tidak dapat melakukan deklarasi ulang pada scope yang sama
    - Nilai yang disimpan tidak dapat diubah

*/

var color = "white";
color = "blue";

let day = "sunday";
color = "monday";

const PI = 3.14;
PI = 3.15;
