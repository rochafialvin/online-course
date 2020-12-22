//////////////
// WHILE LOOP
//////////////


/*
    Aturan Utama

    Diterapkan ke segala jenis loop : While , Do While, For
    Selama "condition" bernilai "true". maka "statement" yang ada pada loop akan diproses ulang
*/


/*
    Syntax While Loop

    while(condition){

        statement

    }

*/


/*
    Alur Proses

    Alur A
        While
        For

    Alur B
        Do While
*/

///////////////////////////
// Menampilkan angka 1 - 5
///////////////////////////

/*
    Alur Proses While Loop

    1. Kita akan membuat variabel yang digunakan sebagai acuan loop (init)
    2. Mengevaluasi condition.  (condition)
        2.1 Jika condition bernilai "true" maka akan menjalankan statement (step 3)
        2.2 Jika false akan keluar dari block kode while loop
    3. Menyelesaikan statement yang ada di dalam kurung kurawal, dimana didalamnya juga akan terdapat proses perubahan nilai untuk variabel yang menjadi acuan tadi (number) (modification)

*/

var number = 0
// Melakukan evaluasi condition while
while(number <= 5){

    console.log(`Number : ${number}`);

    // Menjumlahkan number dengan satu
    number++

    // setelah baris terakhir di proses
    // akan kembali mengevaluasi condition

}

console.log('Selesai LOOP');


////////////////////
// Lompat dua nilai
////////////////////
var number = 0
// Melakukan evaluasi condition while
while(number <= 5){

    // Menampilkan informasi pada terminal / console
    console.log(`Number : ${number}`);

    // Menjumlahkan number dengan dua
    number += 2

    // Kembali mengevaluasi condition
}
// Dijalankan setelah keluar dari loop
console.log('Selesai ');

///////////////////////////
// Menampilkan nilai GENAP
///////////////////////////

// init
var number = 1
// condition
while( number <= 10 ){

    // Evaluasi nilai, apakah merupakan bilangan genap atau bukan
    // Jika setelah dimoudulus 2 menghasilkan 0 maka nilai tsb termasuk bil GENAP
    if(number % 2 == 0 ){
        // Menampilkan informasi pada terminal / console
        console.log(`${number} adalah bilangan genap`)
    }

    // modification
    // Menjumlahkan number dengan satu
    number++
}

// Dijalankan setelah keluar dari loop
console.log('Selesai ');




///////////////////////////
// Menampilkan angka GANJIL
///////////////////////////

// init
var number = 1
// condition
while(number <= 10){

    // Evaluasi nilai, apakah merupakan bilangan ganjil atau bukan
    // Jika setelah dimoudulus 2 menghasilkan 1 maka nilai tsb termasuk bil GANJIL
    if(number % 2 == 1 ){
        // Menampilkan informasi pada terminal / console
        console.log(`${number} adalah bilangan ganjil`)
    }

    // modification
    // Menjumlahkan number dengan satu
    number++
}

// Dijalankan setelah keluar dari loop
console.log('Selesai');


/////////////////////////////////////
// Menampilkan nilai GANJIL dan GENAP
/////////////////////////////////////

// init
var number = 1
// condition
while(number <= 5){

    // statement
    // Evaluasi nilai, apakah "number" merupakan bil ganjil ?
    if(number % 2 == 1){
        console.log(`${number} adalah bilangan ganjil`)
    } else {
        console.log(`${number} adalah bilangan genap`)
    }

    // modification
    number ++

}

// Dijalankan setelah keluar dari loop
console.log('Selesai');
