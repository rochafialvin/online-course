//////////
// SQUARE
//////////

// * * *
// * * *
// * * *

var stars = ''
var rows = 3

// Loop i untuk membuat baris
// Banyaknya loop i ditentukan dari variabel rows
for (var i = 0 ; i < rows ; i++) {

    // Loop j untuk menambahkan bintang per baris
    // Banyaknya bintang setiap baris = jumlah baris
    for (var j = 0 ; j < rows ; j++){

        // Menambahkan satu bintang dari nilai sebelumnya
        stars += ' * '

    }

    // Menambahkan new line setiap selesai membuat satu baris bintang (Horizontal line)
    stars += '\n'

}

// Menampilkan hasil akhirnya pada console / terminal
console.log(stars)
