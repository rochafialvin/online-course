// Jika kita ingin mencari nilai yang dapat dibagi oleh dua angka tertentu, maka bagilah dengan angka hasil perkalian dari dua nilai tersebut.
// FizzBuzz akan dimunculkan ketika suatu angka dapat dibagi oleh 3 dan 5. Berarti FizzBuzz akan muncul saat dapat dibagi 15 dan tidak memiliki sisa. (angka % 15 == 0)

var number = 15

// Loop mulai dari satu hingga number
for(i = 1 ; i <= number ; i++){

    // Saat number habis dibagi 15
    if(i % 15 == 0) {

        console.log('FizzBuzz')

    // Saat number habis dibagi 3
    } else if (i % 3 == 0){

        console.log('Fizz')

    // Saat number habis dibagi 5
    } else {
        
        console.log('Buzz');

    }

}