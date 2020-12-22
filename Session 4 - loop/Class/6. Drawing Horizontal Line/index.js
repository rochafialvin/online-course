/////////////////////
// Drawing Horizontal
/////////////////////

//////////////////////////////////////
// Menjumlahkan 0 + 1 + 2 + 3 + 4 + 5
/////////////////////////////////////

// Membuat variabel number yg menyimpan nol
var number = 0
// Setup loop untuk 5 kali putaran
for(var i = 1; i <= 5; i++){
    // Setiap loop akan menjumlahkan nilai number sebelumnya dengan nilai i
    number += i

}

console.log(number);

/////////////////////
// Membuat Horizontal
/////////////////////

// '*****'
// ' *  *  *  *  * '

// Looping sebanyak lima kali, dan setiap looping menambah satu bintang
// Menyiapkan variabel yang akan menyimpan hasil akhir
var stars = ''
// Setup for loop untuk dapat melakukan 5 kali loop
for(var i = 0; i < 5; i++){
    // Menambahkan satu bintang untuk setiap kali loop
    stars += ' * '

}

// Menampilkan hasil
console.log(stars);
