/////////
/* MAP */
/////////

/*
  1. Callback function harus me-return suatu nilai (tipe data apapun), dimana setiap nilai yang direturn akan masuk ke dalam array baru yang dibuat oleh function map secara internal, bukan karena kita yang menulis kodenya.

  2. Map akan me-return array baru yang sudah berisi nilai yang di return oleh callback function
*/

// return nilai
// nilai masuk ke array baru
// array baru akan di return oleh map

/* Multiple by two : For Each */

var numbers = [1, 2, 3];
var arrResult = [];

numbers.forEach((number) => {
  arrResult.push(number * 2);
});

console.log(`for each : ${arrResult}`);

/* Multiple by two : Map */

var numbers = [1, 2, 3];

var mapResult = numbers.map((number) => {
  return number * 2;
});

console.log(`map : ${mapResult}`);

/* Man or Woman */

/* Mrs. Janette */
/* Mr. Kim Shin */

var persons = [
  ["Janette", "Woman"],
  ["Kim Shin", "Man"],
  ["Tony", "Man"],
];

var mapResult = persons.map((person) => {
  // person = ["Tony", "Man"];
  // name = "Tony";
  // arr = [mrs janette, mr. kim shin, mr. tony]
  var name = person[0];

  if (person[1] == "Woman") {
    return `Mrs. ${name}`;
  } else {
    return `Mr. ${name}`;
  }
});

console.log(mapResult);

//////////////////////////////////////////////////////////////////
// Sebuah function yang dapat menentukan nilai genap dan ganjil //
// [1, 2, 3, 4]                                                 //
// [ [1, "Ganjil"], [2, "Genap"], [3, "Ganjil"], [4, "Genap"] ] //
//////////////////////////////////////////////////////////////////

var nums = [1, 2, 3];

var oddEven = (numbers) => {
  // numbers = [1, 2, 3]
  /*
    arrMap = [
      [1 , "Ganjil"],
      [2 , "Genap"],
      [3 , "Ganjil"]
    ]
  */
  return numbers.map((number) => {
    // number = 3
    if (number % 2 == 1) {
      // [3 , "Ganjil"]
      return [number, "Ganjil"];
    } else {
      // [2 , "Genap"]
      return [number, "Genap"];
    }
  });
};

var oddEvenResult = oddEven(nums);
console.table(oddEvenResult);
