// For Loop

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



// WHILE TEMPLATE
var number = 0

while (number <= 5) {
    console.log(`While loop : ${number}`)

    number++

}