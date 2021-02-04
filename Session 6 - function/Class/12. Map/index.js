//////////
/* MAP */
/////////

/*
  1. Callback function akan me-return suatu nilai (tipe data apapun), dimana setiap nilai yang direturn akan masuk ke dalam array baru yang dibuat oleh function map secara internal, bukan karena kita yang menulis kodenya.

  2. Map akan me-return array baru yang sudah berisi nilai yang di return oleh callback function
*/

/* Multiple number by 2 */
// gunakan val lalu ubah jadi number

var numbers = [1, 2, 3];

var numsResult = numbers.map((number) => {
  return number * 2;
});

console.log(numbers);
console.log(numsResult);

/* Man or Woman */

var persons = [
  ["Janette", "Woman"],
  ["Kim Shin", "Man"],
  ["Tony", "Man"],
];

var personsResult = persons.map((person) => {
  if (person[1] == "Woman") {
    return `Mrs. ${person[0]}`;
  }

  return `Mr. ${person[0]}`;
});

console.log(persons);
console.log(personsResult);

//////////////////////////////////////////////////////////////////
// Sebuah function yang dapat menentukan nilai genap dan ganjil //
// [1, 2, 3, 4]                                                 //
// [ [1, "Ganjil"], [2, "Genap"], [3, "Ganjil"], [4, "Genap"] ] //
//////////////////////////////////////////////////////////////////

var nums = [1, 2, 3, 4];

var oddEven = (numbers) => {
  return numbers.map((number) => {
    if (number % 2 == 1) return [number, "Ganjil"];

    return [number, "Genap"];
  });
};

var oddEvenResult = oddEven([1, 2, 3, 4]);
console.log(oddEvenResult);
console.table(oddEvenResult);
