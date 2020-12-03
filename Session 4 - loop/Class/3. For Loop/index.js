// For Loop

//////////////
// Bandingkan
/////////////

// 1. Membuat variabel number untuk pertama kali
var number = 0
// 2. Memeriksa condition
while (number <= 5) {
    // 3. Menjalankan statement (condition : true) atau keluar dari loop (condition : false)
    console.log(`While loop : ${number}`)

    // 4. Menjalankan modification
    number++

    // 5. Kembali ke step 2
}

//////////////////////////////////////////////////////////
// Memiliki cara kerja yang sama, hanya berbeda penulisan
//////////////////////////////////////////////////////////

// 1. Membuat variabel number untuk pertama kali (init)
// 2. Memeriksa condition
// 3. Menjalankan statement (condition : true) atau keluar dari loop (condition : false)
// 4. Menjalankan modification
// 5. Kembali ke step 2

// for ( init ; condition ; modification )
for(var number = 0 ; number <= 5 ; number++){

    console.log(`For loop : ${number}`)

}

