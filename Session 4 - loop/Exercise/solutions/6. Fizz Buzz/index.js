//////////////
// FIZZ BUZZ
/////////////

/*
    Jika suatu angka dapat dibagi 3. Gantikan dengan kata Fizz

    Jika suatu angka dapat dibagi 5. Gantikan dengan kata Buzz

    Jika suatu angka dapat dibagi 3 dan 5. Gantikan dengan kata FizzBuzz

    Jika kita ingin mencari nilai yang dapat dibagi oleh dua angka tertentu, maka bagilah dengan angka hasil perkalian dari dua nilai tersebut.

    FizzBuzz akan muncul saat suatu angka dapat dibagi 15 .
*/

var number = 15;

for (var i = 1; i <= number; i++) {
  if (i % 15 == 0) {
    console.log("FizzBuzz");
  } else if (i % 3 == 0) {
    console.log("Fizz");
  } else if (i % 5 == 0) {
    console.log("Buzz");
  } else {
    console.log(i);
  }
}
