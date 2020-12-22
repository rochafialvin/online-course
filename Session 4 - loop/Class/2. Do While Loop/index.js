/////////////////
// DO WHILE LOOP
/////////////////


/*
    Aturan Utama

    Akan memproses ulang "statement" selama "condition" bernilai "true"
*/

/*
    Alur Proses While Loop

    1. Kita akan membuat variabel yang digunakan sebagai acuan loop (init)
    2. Mengevaluasi condition.  (condition)
        2.1 Jika condition bernilai "true" maka akan menjalankan statement (step 3)
        2.2 Jika false akan keluar dari block kode while loop
    3. Menyelesaikan statement yang ada di dalam kurung kurawal, dimana didalamnya juga akan terdapat proses perubahan nilai untuk variabel yang menjadi acuan tadi (number) (modification)

*/

/*
    Alur Proses

    1. Membuat variabel untuk acuan loop (init)
    2. Langsung menjalankan "statement" didalam kurung kurawal, dimana juga terdapat "modification"
    3. Evaluasi "condition"
        3.1 Jika condition bernilai true, maka block kode pada kurung kurawal dijalankan
        3.2 Jika condition bernilai false, maka akan keluar dari block do while


*/

/*

    Synatx Do While

    do{

        statement

    } while (condition)

*/

//////////////////////////////////
// Menampilkan angka dengan WHILE
//////////////////////////////////

// init
var number = 6
// condition
while( number <= 5 ){

    // Menampilkan nilai "number"
    console.log(`WHILE : ${number}`);

    // Menjumlahkan number dengan satu nilai (modification)
    number++

    // Selanjutnya kembali melakukan evaluasi condition pada while
}

console.log('Selesai WHILE\n\n');

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
