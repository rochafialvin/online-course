///////////////////////////////////////////
// RIGHT TRIANGLE - UPSIDE DOWN (Terbalik)
//////////////////////////////////////////

// baris ke 1 : *
// baris ke 2 : * *
// baris ke 3 : * * *
// baris ke 4 : * * * *
// baris ke 5 : * * * * *

// baris ke 5 : * * * * *
// baris ke 4 : * * * *
// baris ke 3 : * * *
// baris ke 2 : * *
// baris ke 1 : *

var stars = ''
var rows = 5

// i = 5 - 1
// Loop i menentukan banyaknya baris
for (var i = rows ; i >= 1 ; i--) {

    // Loop j menentukan banyaknya bintang perbaris
    for (var j = 1 ; j <= i ; j++) {

        // Menambahkan satu bintang dari nilai sebelumnya
        stars += ' * '

    }

    // Menambahkan satu new-line dari nilai sebelumnya
    stars += '\n'

}

// Menampilkan hasil akhirnya
console.log(stars)
