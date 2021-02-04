////////////////////
/* VARIABLE SCOPE */
////////////////////

/* Variable Scope : Membahas mengenai darimana saja sebuah variable dapat di akses */

/*
  VAR
  
  1. Dibatasi oleh function, jika sebuah variable dibuat didalam function maka tidak dapat diakses dari luar function
*/

var name1 = "Christopher";

var fnScope = () => {
  var name2 = "Shaun";
  // console.log(`fnScope : ${name1}`);
  // console.log(`fnScope : ${name2}`);
};

// fnScope();

// console.log(name1);
// console.log(name2);

if (true) {
  var name3 = "Lisa";
  // console.log(`if : ${name1}`);
  // console.log(`if : ${name2}`);
}

while (true) {
  var name4 = "Mikasa";
  // console.log(`while : ${name1}`);
  // console.log(`while : ${name2}`);
  break;
}

// console.log(name3);
// console.log(name4);
