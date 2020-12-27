// LOOP STATEMENTS
// Statement yang memungkinkan kita untuk mengulang suatu proses / task

//////////////
// WHILE LOOP
//////////////

/*
    Aturan Utama
    Berlaku untuk segala jenis loop : while, do while, for

    "Selama 'condition' bernilai 'true', maka 'task' yang ada pada loop akan diproses"
*/

/*
    Alur Proses

    Alur A: While dan For

    Alur B: Do While

*/

/*
    Syntax

    while (condition) {

        task

    }
*/

///////////////////////////
// Menampilkan angka 1 - 5
///////////////////////////

/*
    Alur Proses While Loop

    1. Membuat variabel dengan nilai awal, digunakan sebagai acuan loop (init)
    2. Mengevaluasi condition (condition)
        a. condition : true, lanjut ke langkah 3
        b. condition : false, keluar dari block loop
    3. Menyelesaikan task
    4. Menjalankan modification
    5. Kembali ke langkah 2

*/

// // Init
// var number = 1
// // Condition
// while (number <= 5) {
//     // task

//     console.log(`Number : ${number}`)

//     number++

// }

// console.log("Selesai Loop")


///////////////
// Dua Langkah
///////////////

// Membuat variabel init
// var number = 1

// // Mengevaluasi condition
// while (number <= 10) {

//     // Menampilkan informasi pada terminal / console
//     console.log(`Number : ${number}`);

//     // Menjumlahkan 'number' dengan dua
//     number += 2

//     // Kembali mengevaluasi condition

// }
// // Dijalankan setelah keluar dari loop
// console.log("Selesai Loop");


///////////////////////////
// Menampilkan nilai Genap
///////////////////////////

// nilai genap adalah nilai yang 'habis' dibagi dua.
// jika di modulus dua, hasilnya adalah nol

// init
// var number = 0
// // condition
// while (number <= 10) {

//     // Evaluasi nilai, apakah merupakan bilangan genap
//     // jika setelah dimoduluskan 2 menghasilkan nol, maka nilai tsb termasuk bilangan genap
//     if(number % 2 == 0){
//         // Menampilkan bilangan genap pada console / terminal
//         console.log(`${number} adalah bilangan genap`)
//     }

//     // modification
//     // Menjumlahkan 'number' dengan satu
//     number++

// }

// // Dijalankan setelah keluar dari loop
// console.log('Selesai Loop')


///////////////////////////
// Menampilkan nilai Ganjil
///////////////////////////

// nilai ganjil adalah nilai yang sisa satu saat dibagi dua.
// jika di modulus dua, hasilnya adalah satu

// init
// var number = 0
// // condition
// while (number <= 10) {

//     // Evaluasi nilai, apakah merupakan bilangan ganjil
//     // jika setelah dimoduluskan 2 menghasilkan satu, maka nilai tsb termasuk bilangan ganjil
//     if(number % 2 == 1){
//         // Menampilkan bilangan ganjil pada console / terminal
//         console.log(`${number} adalah bilangan ganjil`)
//     }

//     // modification
//     // Menjumlahkan 'number' dengan satu
//     number++

// }

// // Dijalankan setelah keluar dari loop
// console.log('Selesai Loop')


/////////////////////////////////////
// Menampilkan nilai Ganjil dan Genap
/////////////////////////////////////

// Membuat variabel acuan (init)
var number = 1
// Mengevaluasi condition (condition)
while (number <= 5) {

    // Jika menghasilkan 1 setelah dimodulus 2
    if(number % 2 == 1) {


        console.log(`${number} adalah GANJIL`)

    // Jika menghasilkan 0 setelah dimodulus 2
    } else {

        console.log(`${number} adalah GENAP`)

    }

    // Menambahkan satu nilai terhadap nilai yang disimpan di variabel number
    number++

}

// Dijalankan setelah keluar dari loop
console.log('Selesai Loop')
