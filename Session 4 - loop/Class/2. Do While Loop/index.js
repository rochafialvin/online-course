// Print five texts
// Compare while and do while

// Akan terus mengulang statement selama condition bernilai true
// Saat pertama dijalankan, akan menjalankan statement terlebih dahulu

// do{
    // statement
// }while(condition)


// Menampilkan angka
var number = 6
while(number <= 5){
    console.log(`WHILE : ${number}`);
    // Menjumlahkan number dengan satu
    number++
    // setelah baris terakhir di proses
    // akan check condition pada while
}

console.log('\n\n')

var number = 6
do{
    console.log(`DO WHILE : ${number}`);
    // Menjumlahkan number dengan satu
    number++
    // setelah baris terakhir di proses
    // akan check condition pada while
}while(number <= 5)


// Genap
var number = 0
do {
    if(number % 2 == 0){
        console.log(`${number} adalah bilangan genap`)
    }

    number++
} while (number <= 10);

// Ganjil
var number = 0
do {
    if(number % 2 == 1){
        console.log(`${number} adalah bilangan genap`)
    }

    number++
} while (number <= 10);


// Ganjil & Genap
var number = 0
do {
    if(number % 2 == 1){
        console.log(`${number} adalah bilangan ganjil`)
    } else {
        console.log(`${number} adalah bilangan genap`)
    }

    number++
} while (number <= 10);