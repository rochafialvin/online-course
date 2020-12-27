/////////////////
// DO WHILE LOOP
/////////////////


/*
    Alur Proses While Loop (Condition first)

    1. Membuat variabel dengan nilai awal, digunakan sebagai acuan loop (init)
    2. Mengevaluasi condition (condition)
        a. condition : true, lanjut ke langkah 3
        b. condition : false, keluar dari block loop
    3. Menyelesaikan task
    4. Menjalankan modification
    5. Kembali ke langkah 2

*/

/*
    Alur Proses DO WHILE (task first)

    1. Membuat variabel dengan nilai awal, digunakan sebagai acuan loop (init)
    2. Menyelesaikan task
    3. Menjalankan modification
    4. Mengevaluasi condition (condition)
        a. condition : true, lanjut ke langkah 2
        b. condition : false, keluar dari block loop

*/

/*

    Synatx Do While

    do{

        statement

    } while (condition)

*/


/////////////////////////////////////
// Menampilkan angka dengan DO WHILE
/////////////////////////////////////

// init
var number = 6
// menjalankan statement
do{

    // Menampilkan nilai "number"
    console.log(`WHILE : ${number}`);

    // Menjumlahkan number dengan satu nilai (modification)
    number++

// Selanjutnya melakukan evaluasi condition pada do while (condition)
} while ( number <= 5 )

console.log('Selesai DO WHILE');

///////////////////////////
// Menampilkan angka GENAP
///////////////////////////

var number = 0

do {
    // Jika hasil modulus dengan dua adalah nol
    if( number % 2 == 0 ){

        // Menampilkan teks saat condition pada if bernilai true
        console.log(`${number} adalah bilangan genap`)

    }

    // Menjumlahkan number dengan satu nilai (modification)
    number++

// Selanjutnya melakukan evaluasi condition pada while (condition)
} while ( number <= 10 );

///////////////////////////
// Menampilkan angka GANJIL
///////////////////////////

var number = 0

do {

    // Jika hasil modulus dengan dua adalah satu
    if( number % 2 == 1 ){

        // Menampilkan teks saat condition pada if bernilai true
        console.log(`${number} adalah bilangan genap`)

    }

    // Menjumlahkan number dengan satu nilai (modification)
    number++

// Selanjutnya melakukan evaluasi condition pada while (condition)
} while ( number <= 10 );


////////////////////////////////////
// Menampilkan angka GANJIL & GENAP
///////////////////////////////////

// Init
var number = 0
// Menjalankan statement
do {

    if( number % 2 == 1 ){
        // Jika number menghasilkan 1 setelah dimoduluskan oleh 2
        console.log(`${number} adalah bilangan ganjil`)

    } else {
        // Jika number menghasilkan 0 setelah dimoduluskan oleh 2
        console.log(`${number} adalah bilangan genap`)

    }

    // Menjumlahkan number dengan satu nilai (modification)
    number++

// Selanjutnya melakukan evaluasi condition pada while (condition)
} while ( number <= 10 );



//////////////////////////////////////
// Infinite Loop (Loop tak terhingga)
//////////////////////////////////////

//////////////////////////////////////////////////////////////////////////////////////////////////////////
// Infinite loop ini akan terjadi karena nilai pada variabel number selalu lebih kecil dari pada 5
// Nilai pada variabel number akan selalu 1 karena tidak ada proses modification.
//////////////////////////////////////////////////////////////////////////////////////////////////////////

// Init
var number = 1

do {
    // task
    console.log(`${number}`)

    // condition
} while (number <= 5)


//////////////////////////////////////////////////////////////////////////////////////////////////////////
// Infinite loop ini akan terjadi karena nilai pada variabel number selalu lebih besar atau sama dengan 5
//////////////////////////////////////////////////////////////////////////////////////////////////////////

// init
var number = 7

do {
    // task
    console.log(`${number}`)
    // modification
    number++

    // condition
} while (number >= 5)
