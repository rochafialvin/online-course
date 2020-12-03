// While Loop

// Akan terus mengulang statement selama condition bernilai true
// Saat dijalankan, akan memerika condition terlebih dahulu
// while(condition){

    // statement

// }

// Menampilkan angka
var number = 0
while(number <= 5){
    console.log(`Number : ${number}`);
    // Menjumlahkan number dengan satu
    number++
    // setelah baris terakhir di proses
    // akan check condition pada while
}

console.log('Selesai LOOP');

// Lompat dua nilai
var number = 0
while(number <= 5){

    // Menampilkan informasi pada terminal / console
    console.log(`Number : ${number}`);
    // Menjumlahkan number dengan dua
    number += 2
    // Kembali ke condition

}
// Dijalankan setelah keluar dari loop
console.log('Selesai LOOP');


// Menampilkan nilai genap
var number = 1
while(number <= 10){

    // Jika hasil dari modulus dua adalah nol
    if(number % 2 == 0 ){
        // Menampilkan informasi pada terminal / console
        console.log(`${number} adalah bilangan genap`)
    }
    // Menjumlahkan number dengan satu
    number++
}

// Dijalankan setelah keluar dari loop
console.log('Selesai LOOP');




// Menampilkan nilai ganjil
var number = 1
while(number <= 10){

    // Jika hasil dari modulus dua adalah satu
    if(number % 2 == 1 ){
        // Menampilkan informasi pada terminal / console
        console.log(`${number} adalah bilangan ganjil`)
    }
    // Menjumlahkan number dengan satu
    number++
}

// Dijalankan setelah keluar dari loop
console.log('Selesai LOOP');



// Menampilkan nilai genap dan ganjil
var number = 1
while(number <= 10){

    // Jika hasil dari modulus dua adalah nol
    if(number % 2 == 0 ){
        // Menampilkan informasi pada terminal / console
        console.log(`${number} adalah bilangan genap`)
    // Jika hasil dari modulus dua adalah satu
    } else {
        // Menampilkan informasi pada terminal / console
        console.log(`${number} adalah bilangan genap`)
    }
    // Menjumlahkan number dengan satu
    number++

}
// Dijalankan setelah keluar dari loop
console.log('Selesai LOOP');