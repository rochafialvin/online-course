///////////
// For Loop
///////////

/*
    Alur Proses For Loop

    1. Membuat variabel dengan nilai awal, digunakan sebagai acuan loop (init)
    2. Mengevaluasi condition (condition)
        a. condition : true, lanjut ke langkah 3
        b. condition : false, keluar dari block loop
    3. Menyelesaikan task
    4. Menjalankan modification
    5. Kembali ke langkah 2

*/

///////////////////////////////
// Bandingkan WHILE dengan FOR
///////////////////////////////

// 1. Membuat variabel number untuk pertama kali (init)
var number = 0
// 2. Memeriksa condition (condition)
while (number <= 5) {
    // 3. Menjalankan statement (condition : true) atau keluar dari loop (condition : false)
    console.log(`While loop : ${number}`)

    // 4. Menjalankan modification (modification)
    number++

    // 5. Kembali ke step 2
}

//////////////////////////////////////////////////////////
// Memiliki cara kerja yang sama, hanya berbeda penulisan
//////////////////////////////////////////////////////////

// 1. Membuat variabel number untuk pertama kali (init)
// 2. Memeriksa condition (condition)
// 3. Menjalankan statement (condition : true) atau keluar dari loop (condition : false)
// 4. Menjalankan modification (modification)
// 5. Kembali ke step 2

// for ( init ; condition ; modification )
for(var number = 0 ; number <= 5 ; number++){

    console.log(`For loop : ${number}`)

}

///////////////////////////
// Menampilkan angka 1 - 5
//////////////////////////

// Menjalankan init
// Condition
//      True ==> Task
//      False ==> Keluar dari loop
// Task
// Modification ==> Condition

// init, condition, modification
for(var i = 1 ; i <= 5; i++){
  // Menampilkan informasi pada terminal / console
  console.log(`Number : ${i}`);
}

// Dijalankan setelah keluar dari loop
console.log('Selesai LOOP');

////////////////////
// Lompat dua nilai
////////////////////

for(var i = 1 ; i <= 5; i+=2){
  // Menampilkan informasi pada terminal / console
  console.log(`Number : ${i}`);
}

// Dijalankan setelah keluar dari loop
console.log('Selesai LOOP');

///////////////////////////
// Menampilkan nilai GENAP
///////////////////////////

for(var i = 1 ; i <= 5; i++){
  // Jika hasil dari modulus dua adalah nol
  if(number % 2 == 0 ){
      // Menampilkan informasi pada terminal / console
      console.log(`${i} adalah bilangan genap`)
  }
}

// Dijalankan setelah keluar dari loop
console.log('Selesai LOOP');

///////////////////////////
// Menampilkan nilai GANJIL
///////////////////////////

for(var i = 1 ; i <= 5; i++){
  // Jika hasil dari modulus dua adalah nol
  if(number % 2 == 1 ){
      // Menampilkan informasi pada terminal / console
      console.log(`${i} adalah bilangan ganjil`)
  }
}

// Dijalankan setelah keluar dari loop
console.log('Selesai LOOP');

////////////////////////////////////
// Menampilkan angka GANJIL & GENAP
///////////////////////////////////

for(var i = 1 ; i <= 5; i++){
  // Jika hasil dari modulus dua adalah nol
  if(number % 2 == 1 ){
      // Menampilkan informasi pada terminal / console
      console.log(`${i} adalah bilangan GANJIL`)
  } else {
      // Menampilkan informasi pada terminal / console
      console.log(`${i} adalah bilangan GENAP`)
  }
}

// Dijalankan setelah keluar dari loop
console.log('Selesai LOOP');
