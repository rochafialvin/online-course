// Print five texts
// Compare while and do while

// Akan terus mengulang statement selama condition bernilai true
// Saat pertama dijalankan, akan menjalankan statement terlebih dahulu

do{

    // statement

} while (condition)

//////////////////////////////////
// Menampilkan angka dengan WHILE
//////////////////////////////////

var number = 6

while( number <= 5 ){

    // Menampilkan teks dan number
    console.log(`WHILE : ${number}`);

    // Menjumlahkan number dengan satu
    number++

    // setelah baris terakhir di proses
    // akan kembaali mengevaluasi condition pada while

}

console.log('\n\n')

/////////////////////////////////////
// Menampilkan angka dengan DO WHILE
/////////////////////////////////////

var number = 6

do{

    // Menampilkan teks dan number
    console.log(`WHILE : ${number}`);

    // Menjumlahkan number dengan satu
    number++

    // setelah baris terakhir di proses
    // akan kembaali mengevaluasi condition pada while

} while ( number <= 5 )

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
    
    // Melakukan update / modification nilai pada variabel number
    number++

// Mengevaluasi condition pada while

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
    
    // Melakukan update / modification nilai pada variabel number
    number++

// Mengevaluasi condition pada while
} while ( number <= 10 );


////////////////////////////////////
// Menampilkan angka GANJIL & GENAP
///////////////////////////////////

var number = 0

do {

    if( number % 2 == 1 ){

        console.log(`${number} adalah bilangan ganjil`)

    } else {

        console.log(`${number} adalah bilangan genap`)

    }

    number++

} while ( number <= 10 );